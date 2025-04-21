# SQL Joins

SQL joins are used to combine records from two or more tables based on a related column between them. Here are the main types of SQL joins:

## 1. **INNER JOIN**

Returns records that have matching values in both tables.

### Syntax:
```sql
SELECT column1, column2
FROM table_a
INNER JOIN table_b
ON table_a.common_column = table_b.common_column;


