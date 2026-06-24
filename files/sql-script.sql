-- Step 1: Create and Use Database
CREATE DATABASE mini_DATABASE;
USE mini_DATABASE;

-- Step 2: Create Customers table
CREATE TABLE Customers AS 
SELECT DISTINCT 
    `Customer ID` AS customer_id,
    `Customer Name` AS customer_name,
    Segment AS segment
FROM mini_store_cleaned;

ALTER TABLE Customers
MODIFY COLUMN customer_id VARCHAR(20) NOT NULL,
ADD PRIMARY KEY (customer_id);

-- Step 3: Create Locations table
CREATE TABLE Locations AS 
SELECT DISTINCT 
    `Postal Code` AS postal_code,
    City AS city,
    State AS state,
    Region AS region,
    Country AS country
FROM mini_store_cleaned;

ALTER TABLE Locations
MODIFY COLUMN postal_code VARCHAR(20) NOT NULL,
MODIFY COLUMN city VARCHAR(100) NOT NULL,
MODIFY COLUMN state VARCHAR(50) NOT NULL,
MODIFY COLUMN region VARCHAR(50) NOT NULL,
MODIFY COLUMN country VARCHAR(50) NOT NULL DEFAULT 'USA';

ALTER TABLE Locations
ADD COLUMN location_id INT AUTO_INCREMENT PRIMARY KEY FIRST;

ALTER TABLE Locations
ADD UNIQUE KEY loc_unique_key (postal_code, city(100), state);

-- Step 4: Create Products table
CREATE TABLE Products AS 
SELECT DISTINCT 
    `Product ID` AS product_id,
    Category AS category,
    `Sub-Category` AS sub_category,
    `Product Name` AS product_name
FROM mini_store_cleaned;

-- Clean duplicates if any
CREATE TABLE Products_clean AS
SELECT 
    product_id,
    MAX(category) AS category,
    MAX(sub_category) AS sub_category,
    MAX(product_name) AS product_name
FROM Products
GROUP BY product_id;

DROP TABLE Products;
RENAME TABLE Products_clean TO Products;

ALTER TABLE Products
MODIFY COLUMN product_id VARCHAR(50) NOT NULL,
ADD PRIMARY KEY (product_id);

-- Step 5: Create Orders table
CREATE TABLE Orders AS
SELECT 
    m.`Order ID` AS order_id,
    m.`Customer ID` AS customer_id,
    l.location_id,
    STR_TO_DATE(m.`Order Date`, '%m/%d/%Y') AS order_date,
    STR_TO_DATE(m.`Ship Date`, '%m/%d/%Y') AS ship_date,
    m.`Ship Mode` AS ship_mode
FROM mini_store_cleaned m
JOIN Locations l ON m.`Postal Code` = l.postal_code 
                AND m.City = l.city 
                AND m.State = l.state;

-- Clean duplicates if any
CREATE TABLE Orders_clean AS
SELECT 
    order_id,
    customer_id,
    location_id,
    MAX(order_date) AS order_date,
    MAX(ship_date) AS ship_date,
    MAX(ship_mode) AS ship_mode
FROM Orders
GROUP BY order_id, customer_id, location_id;

DROP TABLE Orders;
RENAME TABLE Orders_clean TO Orders;

ALTER TABLE Orders
MODIFY COLUMN order_id VARCHAR(20) NOT NULL,
MODIFY COLUMN customer_id VARCHAR(20) NOT NULL,
MODIFY COLUMN location_id INT NOT NULL,
ADD PRIMARY KEY (order_id),
ADD FOREIGN KEY (customer_id) REFERENCES Customers(customer_id),
ADD FOREIGN KEY (location_id) REFERENCES Locations(location_id);

-- Step 6: Create Order_Items junction table
CREATE TABLE Order_Items AS
SELECT 
    `Order ID` AS order_id,
    `Product ID` AS product_id,
    MAX(Quantity) AS quantity,
    MAX(Discount) AS discount,
    MAX(Sales) AS sales,
    MAX(Profit) AS profit
FROM mini_store_cleaned
GROUP BY `Order ID`, `Product ID`;

-- Final constraints and schema for Order_Items
ALTER TABLE Order_Items
MODIFY COLUMN order_id VARCHAR(20) NOT NULL,
MODIFY COLUMN product_id VARCHAR(50) NOT NULL,
MODIFY COLUMN quantity INT NOT NULL,
MODIFY COLUMN discount DECIMAL(5,2),
MODIFY COLUMN sales DECIMAL(10,2),
MODIFY COLUMN profit DECIMAL(10,2),
ADD PRIMARY KEY (order_id, product_id),
ADD FOREIGN KEY (order_id) REFERENCES Orders(order_id),
ADD FOREIGN KEY (product_id) REFERENCES Products(product_id);

-- Step 7: Compare Storage Size (Optional)
-- a. Size of original table
SELECT 
    table_name AS 'Table',
    ROUND(data_length/(1024*1024), 2) AS 'Size (MB)',
    ROUND(index_length/(1024*1024), 2) AS 'Index (MB)',
    ROUND((data_length+index_length)/(1024*1024), 2) AS 'Total (MB)'
FROM information_schema.TABLES
WHERE table_schema = DATABASE() AND table_name = 'mini_store_cleaned';

-- b. Combined size of normalized tables
SELECT 
    'Normalized Total' AS 'Table',
    ROUND(SUM(data_length)/(1024*1024), 2) AS 'Size (MB)',
    ROUND(SUM(index_length)/(1024*1024), 2) AS 'Index (MB)',
    ROUND(SUM(data_length+index_length)/(1024*1024), 2) AS 'Total (MB)'
FROM information_schema.TABLES
WHERE table_schema = DATABASE() 
AND table_name IN ('Customers', 'Locations', 'Products', 'Orders', 'Order_Items');

-- Storage Reduction Calculation:
-- Original size: 3.52 MB
-- Normalized size: 1.84 MB
-- Reduction: 47.27% reduction
