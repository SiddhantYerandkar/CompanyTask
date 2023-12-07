# CompanyTask

## Database Setup:

1. Create a new Database with name "EmployeeDB"
 
```sql
CREATE DATABASE EmployeeDB;
```
2. Use "EmployeeDB" database

```sql
USE EmployeeDB;
```
3. Create table with name "employee"

```sql
CREATE TABLE employee (
  emp_code INT PRIMARY KEY,
  emp_name VARCHAR(100),    
  salary DECIMAL(10, 2)
);
```


### Installation

A step-by-step guide on how to install application and run locally.

```bash
# Clone the repository
git clone https://github.com/SiddhantYerandkar/CompanyTask

# Change into the project directory
cd CompanyTask

# Install dependencies
npm install

# Run the project
npm start
```

### Output:
![Desktop Screenshot 2023 12 07 - 15 32 31 26](https://github.com/SiddhantYerandkar/CompanyTask/assets/86118947/6922c3c0-87f8-4dac-9b1e-079b58723844)
