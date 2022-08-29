let db;
const request = indexedDB.open('budget_tracker', 1)


request.onupgradeneeded = function (event) {
  // save a reference to the database 
  const db = event.target.result;
  // create an object store (table) called `new_transaction`
  db.createObjectStore('newRequest', { autoIncrement: true });
};

 
request.onsuccess = function (event) {
  // when db is successfully created with its object store or simply established a connection, save reference to db in global variable
  db = event.target.result;

  // check if app is online, if yes send all local db data to api
  if (navigator.onLine) {
    uploadReq();
  }
};

request.onerror = function (event) {
  // log error here
  console.log(event.target.errorCode);
};

function saveRecord(record) {
  // open a new transaction with the database with read and write permissions 
  const transaction = db.transaction(['newRequest'], 'readwrite');
  // access the object store for `new_deposit`
  const transactionStore = transaction.objectStore('newRequest');

  // add record to your store with add method
  transactionStore.add(record);
}

function uploadReq() {
  // open a transaction on your pending db
  const transaction = db.transaction(['newRequest'], 'readwrite');

  // access your pending object store
  const transactionStore = transaction.objectStore('newRequest');

  // get all records from store and set to a variable
  const getAll = transactionStore.getAll();

  getAll.onsuccess = function () {
    // if there was data in indexedDb's store, let's send it to the api server
    if (getAll.result.length > 0) {
      fetch('/api/transaction/bulk', {
        method: 'POST',
        body: JSON.stringify(getAll.result),
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then(serverResponse => {
          if (serverResponse.message) {
            throw new Error(serverResponse);
          }

          const transaction = db.transaction(['newRequest'], 'readwrite');
          const transactionStore = transaction.transactionStore('newRequest');
          // clear all items in your store
          transactionStore.clear();
        })
        .catch(err => {
          // set reference to redirect back here
          console.log(err);
        });
    }
  };
}

window.addEventListener('online',  uploadReq);

