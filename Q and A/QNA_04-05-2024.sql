-- 1. Detailed revenue and sales report by book title and genre:
use book_store1;
select b.title,b.genre,sum(s.totalprice) as totalrevenue, sum(s.quantity) as totalsalesquantity
from
sales s
join 
books b on
s.bookid=b.bookid
group by 
b.title,b.genre;

-- 2. Inventory and sales comparison for forecasting
select b.bookid,b.title,b.genre,i.quantity,sum(s.quantity) as salesquantity,(sum(i.quantity)-sum(s.quantity)) as forecastdiff
from inventory i
join books b on i.bookid=b.bookid
left join 
sales s on i.bookid =s.bookid
group by b.title,b.genre,i.quantity;

-- 3. Detailed customer purchase history:
select s.saleid,c.customerid,c.firstname,c.lastname,c.email,c.phone,c.address,s.quantity,s.saledate,s.totalprice,b.title as booktitle,b.author,b.isnb,b.publisher,b.publicationyear,b.genre,b.price as bookprice
from sales s
join customers c on s.customerid = c.customerid
join books b on s.bookid=b.bookid
order by s.saledate desc;

-- Query 4: Total Sales Revenue Per Genre
select b.genre,sum(s.totalprice) as totalrevenue
from sales s
join
books b on s.bookid=b.bookid
group by b.genre;

-- Query 5: Books with Low Inventory
select b.bookid,b.title,b.genre,i.quantity as inventoryquantity
from inventory i
join books b on i.bookid=b.bookid
where
i.Quantity<=5;

-- Query 6: Top 5 Customers by Total Spending
select c.customerid,c.firstname,c.lastname,c.email,sum(s.totalprice) as totalspending
from sales s
join 
customers c on s.customerid=c.customerid
group by c.customerid
order by totalspending desc
limit 5;

-- Query 7: Average Price of Books by Publisher
select avg(price) as averageprice , publisher
from books
group by publisher;

-- Query 8: Books Sold More Than 5 Times

select bookid,count(*) as totalsales
from sales
group by bookid
having count(*)>5;