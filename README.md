# PWA Budget Tracker


![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)


 ## Contents
 
 - [Description](#description)
    - [User Story](#user-story)
    - [Acceptance Criteria](#acceptance-criteria)
 - [Dependencies](#dependencies)
 - [Installation Instructions](#installing)
 - [Execution](#executing-program)
 - [Demos](#demos)
    - [`Category` Functions](#categories)
    - [`Product` Functions](#products)
    - [`Tag` Functions](#tags)
 - [Authors](#authors)


## Description

eCommerce backend refactored to use MySQL and sequelize to model and route the database. The structures built in this project allow for seamless CRUD operations within the database, allowing the client to get all products, tags, and categories, along with how they are related to one another. Client may now manipulate, add, or delete data off of the MySQL database within a responsive and organized structure. 

--------------------------------------------------------
### User Story
```
AS AN avid traveler
I WANT to be able to track my withdrawals and deposits with
or without a data/internet connection
SO THAT my account balance is accurate when I am traveling 
```

### Acceptance Criteria
```
GIVEN a budget tracker without an internet connection
WHEN the user inputs an expense or deposit
THEN they will receive a notification that they have added an expense or deposit
WHEN the user reestablishes an internet connection
THEN the deposits or expenses added while they were offline are added to their transaction history and their totals are updated

```

## Dependencies

```
"dotenv": "^8.6.0",
"express": "^4.17.1",
"mysql2": "^2.1.0",
"sequelize": "^5.21.7"
