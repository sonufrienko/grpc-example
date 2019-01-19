# Example of gRPC on Node.js
![gRPC](./grpc.png)

## gRPC
>gRPC is a high performance, open-source universal RPC framework, developed by Google. In gRPC, a client application can directly call methods on a server application on a different machine as if it was a local object, making it easier to create distributed applications and services.

## This example demonstrates
- gRPC implementation on Server and Client side
- Protocol Buffers usage
- Deadline to specify how long client is willing to wait for an RPC to complete before the RPC is terminated with the error ``DEADLINE_EXCEEDED``
- Server streaming RPCs where the client sends a request to the server and gets a stream to read a sequence of messages back.

