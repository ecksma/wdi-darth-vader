___

<strong>SQL</strong>
<h3>Postgres SQL Cheat Sheet</h3>

---

- Open Postgres in Terminal (bash): `psql`
- List all databases in **psql**: `\l`
- Connect to a database in **psql**: `\c databasename`
- List all tables in current database: `\dt`
- Quit **psq**: `\q` + `ENTER`

---

- Create a database: `CREATE DATABASE db_name;`
- Create a table: `CREATE TABLE table_name (id SERIAL PRIMARY KEY, name varchar(255));`
- Read all values: `SELECT * FROM table_name;`
