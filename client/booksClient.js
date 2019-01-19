const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");

const BOOKS_SERVICE_PATH = process.env.BOOKS_SERVICE_PATH || "0.0.0.0:8080";
const PROTO_FILE = `${__dirname}/../protos/books.proto`;

const packageDefinition = protoLoader.loadSync(PROTO_FILE);
const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
const Client = protoDescriptor.books.BooksService;

const client = new Client(
  BOOKS_SERVICE_PATH,
  grpc.credentials.createInsecure()
);

module.exports = client;
