const server = require("./api/server");

const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log(`\n\n Server listening on port ${port} \n\n`);
});
