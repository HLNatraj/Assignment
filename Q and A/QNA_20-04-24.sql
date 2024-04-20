create database book_store1;
use book_store1;

create table books(
bookid int primary key,
title varchar(200),
author varchar(200),
isnb varchar(13),
publisher varchar(200),
publicationyear Int,
genre varchar(50),
price int(10)
);

create table Inventory(
inventoryid int primary key,
bookid int,
foreign key(bookid) references books(bookid),
quantity int,
location varchar(102)
);

select * from inventory;

create table customers(
customerid int primary key,
firstname varchar(20),
lastname varchar(20),
email varchar(100),
phone varchar(20),
address varchar(200)
);

create table sales(
saleid int primary key,
bookid int,
foreign key (bookid) references books(bookid),
customerid int,
foreign key(customerid) references customers(customerid),
q

insert into books(bookid,title,author,isnb,publisher,publicationyear,genre,price)
values
(1,'abc','def',123456,'abcd',1996,'classic',999),
(2,'def','jis',15595,'abwwd',2000,'classic',9919),
(3,'ghi','sas',179522,'ahuju',2001,'fiction',9199),
(4,'klm','dadd',14541,'asdfe',2003,'fiction',99459),
(5,'nat','dswd',124446,'adef',1998,'fantasy',99229);

INSERT INTO Books (bookid,title,author,isnb,publisher,publicationyear,genre,price) VALUES
(6, 'To Kill a Mockingbird', 'Harper Lee', '9780060935467', 'Harper Perennial Modern Classics', 1960, 'Classic', 14.99),
(7, '1984', 'George Orwell', '9780451524935', 'Plume', 1949, 'Dystopian', 9.99),
(8, 'The Great Gatsby', 'F. Scott Fitzgerald', '9780743273565', 'Scribner', 1925, 'Novel', 15.00),
(9, 'The Catcher in the Rye', 'J.D. Salinger', '9780316769488', 'Little, Brown and Company', 1951, 'Literature', 8.99),
(10, 'Sapiens: A Brief History of Humankind', 'Yuval Noah Harari', '9780062316097', 'Harper', 2011, 'Non-fiction', 22.00),
(11, 'Life of Pi', 'Yann Martel', '9780156027328', 'Harcourt', 2001, 'Adventure fiction', 12.99),
(12, 'The Alchemist', 'Paulo Coelho', '9780061122415', 'HarperOne', 1988, 'Philosophical novel', 16.99),
(13, 'Brave New World', 'Aldous Huxley', '9780060850524', 'Harper Perennial', 1932, 'Dystopian', 14.99),
(14, 'The Road', 'Cormac McCarthy', '9780307387899', 'Vintage', 2006, 'Post-apocalyptic', 14.95),
(15, 'Gone Girl', 'Gillian Flynn', '9780307588371', 'Crown Publishing Group', 2012, 'Thriller', 9.99);

INSERT INTO inventory (inventoryid,bookid,quantity,location) VALUES
(1,1,110,'tumakuru'),
(2,2,89,'bengaluru'),
(3,3,220,'chitradurga'),
(4,4,140,'mandya'),
(5,5,143,'arasikere'),
(6, 1, 35, 'Shelf A1'),
(7, 2, 20, 'Shelf A2'),
(8, 3, 15, 'Shelf B1'),
(9, 4, 25, 'Shelf B2'),
(10, 5, 30, 'Shelf C1'),
(11, 6, 40, 'Shelf C2'),
(12, 7, 50, 'Shelf D1'),
(13, 8, 45, 'Shelf D2'),
(14, 9, 10, 'Shelf E1'),
(15, 10, 5, 'Shelf E2');

select* from inventory;



insert into customers(customerid,firstname, lastname,email,phone,address)
values
(1,'natraj','hl','hln18@gmail.com',12345566,'ss puram tumakuru'),
(2,'manoj','l','man18@gmail.com',4567912,'mg raod bengaluru'),
(3,'jhenkar','al','jhem18@gmail.com',1784526,'gandhi nagar chitradurga'),
(4,'darshan','l','darshan@gmail.com',145626,'srinagar bengaluru'),
(5,'kethan','g','kethan@gmail.com',1794566,'vidya nagar hubli'),
(6,'chethan','il','chethan@gmail.com',78945626,'rr nagar darwad');

select * from customers;
select * from books;

-- 1
select * from books
where author='paulo coelho';

-- 2
select * from books 
where price between 15 and 20;

-- 3
select * from books 
where title ='the great gatsby';

-- 4
select distinct genre
from books;

-- 5
select max(price),genre
from books
group by (genre);

-- 6
select count(*), author
from books
group by(author);


-- List all books that are low on stock (less than 5 units)
select* from inventory;
select * from inventory where quantity<10;

-- Update the inventory after receiving new stock:
 update inventory
 set quantity =quantity+20
 where bookid=1;
 
-- Find the location of a specific book in the store:
select location
from inventory
where bookid=2;

select location,bookid
from inventory
where bookid in (1,2,3);

-- Identify books that are out of stock:
select bookid, quantity
from inventory
where quantity=0;

-- Get a summary of total books in stock by genre:
select genre,sum(quantity) as total_books_in_stock
from inventory
join books on inventory.bookid=books.bookid
group by genre;

-- Find which locations need restocking (less than 10 units):
select location,quantity
from inventory
where quantity<10;
