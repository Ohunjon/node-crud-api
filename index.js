require("dotenv").config();
const express = require("express");
const sequelize = require("./src/db/connection");
const models = require("./src/models"); // imported module but not used - it is for sync database structure
const cors = require("cors");
const cookieParser = require("cookie-parser");
const router = require("./src/routes");
const errorMiddleware = require("./src/middlewares/error-middleware");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use("/api", router);

//error handling (should be after routes - next())
app.use(errorMiddleware);

const start = async () => {
  try {
    //connect to db
    await sequelize.authenticate();
    //sync model with db
    await sequelize.sync();

    app.listen(PORT, () => {
      console.log(`Server started on PORT = ${PORT}`);
    });
  } catch (e) {
    console.log("Error on start app", JSON.stringofy(e));
  }
};

start();
