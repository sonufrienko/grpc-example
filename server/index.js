const grpc = require("grpc");
const BooksService = require('./booksService');
const BooksInterface = require('./booksInterface')();

const PORT = process.env.PORT || "8080";

const getServer = () => {
  const server = new grpc.Server();
  server.addService(BooksInterface, BooksService);
  return server;
}

const booksServer = getServer();
booksServer.bind(`0.0.0.0:${PORT}`, grpc.ServerCredentials.createInsecure());
booksServer.start();
console.log(`Server running on port ${PORT}`);