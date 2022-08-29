# PWA Budget Tracker


![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)


 ## Contents
 
 - [Description](#description)
    - [User Story](#user-story)
    - [Acceptance Criteria](#acceptance-criteria)
 - [Dependencies](#dependencies)
 - [Installation Instructions](#installing)
 - [Execution](#executing-program)
 - [Authors](#authors)


## Description

This project updates an existing budget tracker application to allow for offline access and functionality. The user will be able to add expenses and deposits to their budget with or without a connection. If the user enters transactions offline, the total should be updated when they're brought back online.

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
THEN the deposits or expenses added while they were offline are added to their
transaction history and their totals are updated

```

## Dependencies

```
"compression": "^1.7.4"
"express": "^4.17.1"
"mongoose": "^5.5.15"
"morgan": "^1.9.1"
```

## Installation Instructions
- Enter `npm i` in CLI
- Navigate to 'Develop' folder in CLI 
- Enter `node server.js`
- open default browser to localhost:3001


## Authors
- Created by [@3lydaley](https://github.com/3lyDaley) - feel free to contact me!
