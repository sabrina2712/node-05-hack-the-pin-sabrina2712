const http = require("http");
const { maxPin } = require("./config");
const { newPin } = require("./lib/randomPin");

const systemPin = newPin(maxPin);
console.log("My Pin is", systemPin);

const server = http.createServer((req, res) => {
  let requestedPin = req.url;
  requestedPin = requestedPin.slice(1);

  if (requestedPin == systemPin) {
    res.end("true");
  } else {
    res.end("false");
  }
});

server.listen(3000, () => {
  console.log("Server listening on port 3000");
});
