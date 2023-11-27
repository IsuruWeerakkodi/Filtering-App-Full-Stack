# Filtering App

## Project Overview

This project is an effort of showcasing the integration and functionality of Spring Framework, Java Bean Validation, HikariCP, JUnit 5, JavaFaker, and Spring AOP, along with the practical application of Filtering, Pagination, and Sorting, all in action within a single cohesive environment. 

Also, the Customer API project provides a robust and scalable RESTful API for managing customer data. Users can perform CRUD operations on customers, filter and sort them based on various criteria, and efficiently manage database connections using the Hikari connection pool.

## Key Features

### CRUD Operations for Customers

- **Create:** Add new customers with their details.
- **Retrieve:** Obtain existing customer information by their ID.
- **Update:** Modify existing customer information.
- **Delete:** Remove existing customers.

### Filtering and Sorting

- **Filtering:** Search and filter customers based on their ID, name, contact number, or country.
- **Sorting:** Sort customers using criteria such as ID, name, or contact number.

### Database Connection Management

- Efficiently manages database connections using the Hikari connection pool.

## Technology Stack

- Spring Boot
- MySQL
- HikariCP
- JavaFaker
- hibernate-validator
- jackson-databind
- lombok

## Getting Started

To run the project, ensure you have the following installed:

1. Java Development Kit (JDK) 11 or higher
2. Maven
3. MySQL database server

Follow these steps:

1. Clone the project repository.
2. Open the project in your preferred IDE.
3. Create a MySQL database named `dep11_filtering_app`.
4. Configure the database connection properties in the `application.properties` file.
5. Start the MySQL database server.
6. Run the Spring Boot application using your preferred method (e.g., Maven, IDE).

The API will be available on port 8080 by default.

## Endpoints

### Get All Customers

- **Endpoint:** `/customers`
- **Description:** Get all customers.
- **Request Method:** GET
- **Data Format:** JSON

### Get Filtered Customers

- **Endpoint:** `/customers`
- **Description:** Get all customers filtered by the search term.
- **Request Method:** GET
- **Data Format:** JSON

### Get Sorted Customers

- **Endpoint:** `/customers`
- **Description:** Get all customers sorted by the specified column and order.
- **Request Method:** GET
- **Data Format:** JSON

### Get Paginated Customers

- **Endpoint:** `/customers`
- **Description:** Get a paginated list of customers.
- **Request Method:** GET
- **Data Format:** JSON

### Get Paginated Sorted Customers

- **Endpoint:** `/customers`
- **Description:** Get a paginated list of sorted customers.
- **Request Method:** GET
- **Data Format:** JSON

### Create a New Customer

- **Endpoint:** `/customers`
- **Description:** Create a new customer.
- **Request Method:** POST
- **Data Format:** JSON

### Get Customer by ID

- **Endpoint:** `/customers/{id}`
- **Description:** Get customer by ID.
- **Request Method:** GET
- **Data Format:** JSON

### Update Customer Information

- **Endpoint:** `/customers/{id}`
- **Description:** Update customer information.
- **Request Method:** PUT
- **Data Format:** JSON

### Delete Customer

- **Endpoint:** `/customers/{id}`
- **Description:** Delete customer by ID.
- **Request Method:** DELETE
- **Data Format:** N/A

## Data Formats

The API primarily uses JSON as the data format for both requests and responses.

## License
This project is licenced under [MIT License]

