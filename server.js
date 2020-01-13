const express = require("express");

const GraphQLHTTP = require("express-graphql");

const cors = require("cors");

const schema = require("./schema");
const app = express();

app.use(cors());

app.use(
  "/graphql",
  GraphQLHTTP({
    schema,
    graphiql: true
  })
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("server running!"));
