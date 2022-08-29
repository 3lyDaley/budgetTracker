let db;

const request = indexedDB.open('budget_tracker', 1)

// this event will emit if the database version changes (nonexistant to version 1, v1 to v2, etc.)
request.onupgradeneeded = function (event) {
  // save a reference to the database 
  const db = event.target.result;
  // create an object store (table) called `new_transaction`
  db.createObjectStore('new_transaction', { autoIncrement: true });
};

// upon a successful 
request.onsuccess = function (event) {
  // when db is successfully created with its object store (from onupgradedneeded event above) or simply established a connection, save reference to db in global variable
  db = event.target.result;

  // check if app is online, if yes run uploadPizza() function to send all local db data to api
  if (navigator.onLine) {
    
    // populateTotal();
    // populateTable();
    // populateChart();
  }
};

request.onerror = function (event) {
  // log error here
  console.log(event.target.errorCode);
};

function makeDeposit(deposit) {
  // open a new transaction with the database with read and write permissions 
  const transaction = db.transaction(['new_deposit'], 'readwrite');
  // access the object store for `new_deposit`
  const budgetObjectStore = transaction.objectStore('new_deposit');

  // add record to your store with add method
  depositObjectStore.add(record);
}