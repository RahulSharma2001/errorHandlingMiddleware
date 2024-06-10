const express = require("express");
const userRoutes = require("./routes/user");

const app = express();

app.use(express.json());

app.use(userRoutes);

app.listen(5000, () => console.log("Server is up and running"));
