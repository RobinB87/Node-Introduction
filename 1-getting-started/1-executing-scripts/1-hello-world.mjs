// when using ecma script module management (.mjs)
import http from "http";

const server = http.createServer((req, res) => {
  res.end("Hello World\n");
});

server.listen(4242, () => {
  console.log("Server is running...");
});
