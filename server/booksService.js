const database = require("./database.json");

const findById = ({ request: { id } }, callback) => {
  console.log(`Looking for a book with id: ${id}`);
  const book = database.find(book => book.id === id);
  return callback(null, book);
};

const list = (
  { request: { search, price_from, price_to, stock_status } },
  callback
) => {
  console.log(`Looking for a book with title: ${search}`);
  const regex = new RegExp(search, 'gi');
  const books = database.filter(book => book.title.match(regex));

  // add 2s delay
  setTimeout(() => {
    return callback(null, { books });
  }, 2000);
};

const addBook = (call, callback) => {
  return callback(null, {
    success: true
  });
};

const updateBook = (call, callback) => {
  return callback(null, {
    success: true
  });
};

const deleteBook = (call, callback) => {
  return callback(null, {
    success: true
  });
};

const listen = call => {
  // send data every second
  const interval = setInterval(() => {
    call.write({ date: new Date().toLocaleTimeString() });
  }, 1000);

  // close connection in 60s
  setTimeout(() => {
    clearInterval(interval);
    call.end();
    console.log("Connection is closed.");
  }, 60000);
};

module.exports = {
  findById,
  list,
  addBook,
  updateBook,
  deleteBook,
  listen
};
