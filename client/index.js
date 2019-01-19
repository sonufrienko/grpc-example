const Books = require("./booksClient");

const DEFAULT_DEADLINE_SEC = 3;
const getCallOptions = () => ({
  deadline: new Date().setSeconds(
    new Date().getSeconds() + DEFAULT_DEADLINE_SEC
  )
});

/*
 * Get array of books by keyword "red"
 * CallOption has Deadline 3 sec for request
 */
Books.list({ search: "red" }, getCallOptions(), (err, res) => {
  if (err) {
    return console.log(err.details ? err.details : err);
  }
  const { books } = res;
  return console.log(books);
});

/*
 * Gen single book by ID
 */
Books.findById({ id: 5 }, (err, res) => {
  if (err) {
    return console.log(err);
  }
  const book = res;
  return console.log(book);
});

/*
 * Create a stream and listen for new data
 */
const stream = Books.listen();

stream.on("data", ({ date }) => {
  console.log(date);
});

stream.on("end", () => {
  console.log("Connection is closed.");
});
