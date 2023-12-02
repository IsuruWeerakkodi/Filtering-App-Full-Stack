# Filtering App
The project uses the following languages and technologies:

Java, javaScript, Html, CSS, Spring framework, HikariCP, MySQL, Lombok, Jackson Databind, Validation API, Hibernate Validator, Java Servlet API, JUnit Jupiter.


## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contribution](#contribution)
- [License](#license)
- [Copyright](#copyright-statement)

## Introduction

Filtering App is a web application that allows users to search and filter customer data. It provides a user-friendly interface to search for customers based on various criteria and displays the results in a table.

## Features

You will experience a user-friendly interface for searching, filtering, and viewing customer data in a sortable table. The dark/light mode option enhances the user experience, and the responsive design ensures accessibility on various devices.
Other than that,

- Search Functionality
- Sortable Table
- Clear Search Results Message
- Column Hover Effect
- Column Sorting Indicator:
- Dynamic URL Update
- Toggle-able Dark Mode Icon
- Bootstrap Styling


## Getting Started

To run this project locally, follow the steps below:

### Prerequisites

Ensure you have the following software installed on your machine:

- Java Development Kit (JDK) 8 or later
- Maven (for building and managing dependencies)
- [MySQL](https://www.mysql.com/) or another relational database (ensure you have the necessary credentials)

### Clone the Repository

```bash
git clone https://github.com/IsuruWeerakkodi/Filtering-App-Full-Stack.git
cd your-project
```
### Configure Database
- Create a new database in your MySQL server.
- Update the database configuration in src/main/resources/application.properties with your database credentials.

```bash
spring.datasource.url=jdbc:mysql://localhost:3306/your_database
spring.datasource.username=your_username
spring.datasource.password=your_password
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
```
### Build the Project
```bash
npm run build
```
### Run the Application
```bash
npm start
```
The application will start, and you can access it at [http://localhost:1324](http://localhost:1234) as shown when run the application

## Usage
The project's REST API provides the following endpoints:

List and explain the available API endpoints and their functionalities.

- `/customers`: Get a list of all customers.
- `/customers?sort={sortParam}`: Get sorted customers based on the specified parameter.
- `/customers?page={pageNumber}&size={pageSize}`: Get paginated customers.
- `/customers?page={pageNumber}&size={pageSize}&sort={sortParam}`: Get sorted and paginated customers.

## Contribution

Thank you for considering contributing to my project! I welcome contributions from the community to improve and grow this project.

### How to Contribute

1. **Fork the Repository:**
   - Fork the project to your GitHub account.
   - Clone your fork to your local machine:

     ```bash
     git clone https://github.com/IsuruWeerakkodi/Filtering-App-FullStack.git
     cd your-project
     ```

2. **Create a Branch:**
   - Create a new branch for your feature or bug fix:

     ```bash
     git checkout -b feature-or-fix-branch
     ```

3. **Make Changes:**
   - Implement your changes and ensure that your code follows the project's coding standards.

4. **Test:**
   - Test your changes thoroughly to ensure they work as expected.

5. **Commit:**
   - Commit your changes with a clear and concise commit message:

     ```bash
     git commit -m "Add feature or fix bug"
     ```

6. **Push Changes:**
   - Push your changes to your fork:

     ```bash
     git push origin feature-or-fix-branch
     ```

7. **Create a Pull Request:**
   - Create a pull request from your branch to the main repository.
   - Provide a clear title and description for your pull request.

8. **Code Review:**
   - Participate in the code review process, address any feedback, and make necessary changes.

9. **Merge:**
   - Once your changes are approved, they will be merged into the main branch.

### Issue Reporting

If you encounter any issues or have suggestions for improvement, please open an issue on the [GitHub Issues](https://github.com/your-username/your-project/issues) page.

Thank you for contributing!

## License

This project is licensed under the MIT License - [click here](LICENSE.txt) for more details.

## Copyright Statement

The content of this project is © Isuru Weerakkodi 2023.
All rights reserved.



