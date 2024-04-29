-- Find all customers in a specific location:
use book_store1;
select * from customers
where address like '%tumakuru%';

-- Retrieve complete customer information by email:
select * from customers
where email like "%hln18@gmail.com%";

-- Find customers who have not made any purchases within the last year:
SELECT *
FROM Customers
WHERE CustomerID NOT IN (
    SELECT DISTINCT CustomerID
    FROM Sales
    WHERE SaleDate >= DATE_SUB(NOW(), INTERVAL 1 YEAR)
);


-- List all customers who have spent more than a specific amount:
select c.*,sum(s.totalprice) as totalspent
from customers c
join sales s on c.customerid=s.customerid
group by c.customerid
having totalspent>500;

-- Customers with the most purchases in terms of quantity:

select c.*,count(s.saleid) as quantity
from customers c
join sales s on c.customerid=s.customerid
group by c.customerid
order by quantity desc
limit 10;

-- View all sales on a particular date
select * from sales
where saledate="2023-03-03";

-- Calculate total sales for a specific book:
select sum(totalprice) as totalsales
from sales
where bookid="1";

-- List all sales made to a particular customer:
select * from sales 
where customerid="2";

-- Determine the average sale amount per customer:
select customerid,avg(totalprice) as averagesaleamount
from sales
group by  customerid;

-- List the top 5 best-selling books:
select bookid,sum(quantity) as totQuantitysold
from sales
group by bookid
order by totquantitysold desc
limit 5;

-- Total revenue per Day, Week, Month, Year
select date(saledate) as date, sum(totalprice) as revenue
from sales
group by date(saledate);


