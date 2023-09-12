const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./database/database");
const eventsRouter = require("./events/events.routes");
const userRouter = require("./users/users.routes");
const productsRouter = require("./products/products.routes");
const authRouter=require('./auth/auth.router')
const PORT = process.env.PORT||9000;
require("dotenv").config();

db.authenticate()
  .then(() => {
    console.log(`data base autentificate`);
  })
  .catch((error) => {
    console.log(error);
  });
db.sync()
  .then(() => {
    console.log(`data base Syncet`);
  })
  .catch((error) => {
    console.log(error);
  });

app.use(express.json());
app.use(cors());
app.use("/alaskamu/users", userRouter);
app.use("/alaskamu", productsRouter);
app.use("/alaskamu", eventsRouter);
app.use('/alaskamu/auth',authRouter)

app.get("/", (req, res) => {
  res.json({ server: "ok" });
});

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});
