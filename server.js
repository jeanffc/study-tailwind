const http = require("http");
const fs = require("fs").promises;

const host = "localhost";
const port = 8081;

let index;

const requestListener = function (req, res) {
  res.setHeader("Content-Type", "text/html");
  res.writeHead(200);
  res.end(index);
};

const server = http.createServer(requestListener);

fs.readFile(__dirname + "/index.html")
  .then((contents) => {
    index = contents;
    server.listen(port, host, () => {
      console.log(`Server is running on http://${host}:${port}`);
    });
  })
  .catch((err) => {
    console.error(`Could not read index.html file: ${err}`);
    process.exit(1);
  });
