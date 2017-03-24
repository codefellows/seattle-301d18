# Code 301, Class 9: ***SQL Joins & Relations***

## Today's Plan

**Code Review!!**

`10 minute break`

- [Slides on SQL joins](09-sql-joins-relations.pdf)

Also see this [reference document on joins](joins.md)

##### Normalization & Joins

- Database Relationships
- 1:1 Rel
- 1:Many / Many:1 Rel
- Many:Many Rel (Includes Junction Tables)
- Self-referencing Rel

##### Database Normalization

- Remove duplicate data
- Minimize database redesign
- Minimize modification anomalies

##### Joins

- Understanding Primary and Foreign Keys
	- Discuss how these keys are related and can be used for database normalization

- Inner Join
	- Discuss syntax
	- Discuss concepts

- High Level Overview of Other Join types

`10 minute break`

##### Demo

##### Lab Prep

- Be sure to carefully follow the setup instructions in the lab README to get today's lab up and running. You need to do a DROP TABLE on the articles table from yesterday's lab to prevent problems. Today we have two tables, one of which, 'articles', is the same name as the table we used yesterday but has a different structure, so it needs to be obliterated.

###Class 09 Readings (to be completed before class)

- [SQLBolt (Lessons 6-7) (Essential)](http://sqlbolt.com/lesson/select_queries_with_joins)
- [A Primer on SQL (Chapter 11) (Reference)](https://leanpub.com/aprimeronsql/read#leanpub-auto-understanding-joins)
- [Visual Guide to SQL Joins](http://www.codeproject.com/Articles/33052/Visual-Representation-of-SQL-Joins)

### Useful resources.

 - [SQLBolt](http://sqlbolt.com/) -- Interactive SQL Tutorial
 - [SQL Cheat Sheet](http://www.cheat-sheets.org/sites/sql.su/)
 - [Query String Primer](https://en.wikipedia.org/wiki/Query_string)

## Learning Objectives

- Understand how objects in a database can be interrelated with foreign keys
- Have familiarity with queries using SQL that select data from across multiple tables
- Have familiarity with different relationships in database tables
