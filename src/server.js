const app = require("./app");

//DOT ENV Configuration
require("dotenv").config({
  path: require("path").resolve(__dirname, "../.env"),
});

//SERVER CONFIGURATION PENDING
app.listen(process.env.PORT, () => {
  console.log(process.env.PORT);
  console.log(`Server is Listening on http://localhost:3000`);
});
