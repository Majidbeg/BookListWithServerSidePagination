# BookListWithServerSidePagination

## Command for creating data base and schema
 ### First create DB
 CREATE DATABASE Book;

 ### Second create schema
 CREATE SCHEMA books;

 ### Third create table
CREATE TABLE IF NOT EXISTS books.books_details
(
    id bigint NOT NULL,
    name character varying(200) COLLATE pg_catalog."default",
    author character varying(100) COLLATE pg_catalog."default",
    isbn character varying(200) COLLATE pg_catalog."default",
    CONSTRAINT books_details_pkey PRIMARY KEY (id)
)

#### fourth insert some data to the table

insert into books.books_details select * from json_populate_recordset(
	null::books.books_details,
	'
[
  {
    "id":1,
    "name":"book1",
    "author":"author1",
    "isbn":"A1mbooaut1534"
  },

  {
    "id":2,
    "name":"book2",
    "author":"author2",
    "isbn":"qd2mbooaut1234"
  },

  {
    "id":3,
    "name":"book3",
    "author":"author3",
    "isbn":"Lqd2mboh343oaut1234"
  },
  {
    "id":4,
    "name":"book4",
    "author":"author4",
    "isbn":"KJq343oaut1234"
  },
  {
    "id":5,
    "name":"book5",
    "author":"author5",
    "isbn":"KJq23343oaut1234"
  },
  {
    "id":6,
    "name":"book6",
    "author":"author6",
    "isbn":"K21Jq23343oaut1234"
  },
  {
    "id":7,
    "name":"book7",
    "author":"author7",
    "isbn":"KJoaut1234"
  },
  {
    "id":8,
    "name":"book8",
    "author":"author8",
    "isbn":"KJq23343oaut4"
  },
  {
    "id":9,
    "name":"book9",
    "author":"author9",
    "isbn":"KJq023343oaut4"
  },
  {
    "id":10,
    "name":"book10",
    "author":"author10",
    "isbn":"KJq02la3343oaut4"
  },
  {
    "id":11,
    "name":"book11",
    "author":"author11",
    "isbn":"KJq023ut4"
  },
  {
    "id":12,
    "name":"book12",
    "author":"author12",
    "isbn":"KJq023390943oaut4"
  },
  {
    "id":13,
    "name":"book13",
    "author":"author13",
    "isbn":"KJq0231343oaut4"
  },
  {
    "id":14,
    "name":"book14",
    "author":"author14",
    "isbn":"KJq023343olkaut4"
  },
  {
    "id":15,
    "name":"book15",
    "author":"author15",
    "isbn":"K3343oaudft4"
  },
  {
    "id":16,
    "name":"book16",
    "author":"author16",
    "isbn":"K334d123oaudft4"
  }
  ]'
)


## To run the backend service follow below steps:

### 1. cd BooksBackEnd
### 2. npm install
### 3. npm run dev

## To run the FrontEnd follow below steps:

### 1. cd BooksFrontEnd
### 2. npm install
### 3. npm start
