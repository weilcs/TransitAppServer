const express = require('express');
const app = express();
const routes = require('./routes/routes');
const schemaBuilder = require('./model/schemabuilder/schema_builder');
const PORT = 3000;

// generate schema
schemaBuilder.generateSchema();

// middleware
routes.applyRoutes(app);

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));