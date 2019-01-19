const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");

const PROTO_FILE = `${__dirname}/../protos/books.proto`;

const getInterface = () => {
  const packageDefinition = protoLoader.loadSync(PROTO_FILE);
  const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
  return protoDescriptor.books.BooksService.service;
};

module.exports = getInterface;
