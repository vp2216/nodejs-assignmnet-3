const fs = require("fs");
const http = require("http");

fs.writeFile(
  "index.html",
  "<h1> Hello World </h1><p> This is VP... </p>",
  (err) => {}
);

fs.readFile("index.html", "utf-8", (err, data) => {
    const server = http.createServer((req, res) => {
      res.writeHead(200, { "Content-type": "text/html" })
      res.write(data);
      res.end();
  });

  server.listen(5000, () => {
    console.log("Server is up at http://localhost:5000");
  });
});