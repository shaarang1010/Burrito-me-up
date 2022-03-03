const express = require("express");
const cors = require("cors");

//intitialize app
const app = express();

// middlewares added here
app.use(cors());
app.use(express.urlencoded());

const router = require("./routes");

//set base path
app.use("/api/services", router);

app.use((req, res, next) => {
  // taking care of browsers that caches data against URL, example Microsoft Edge;
  // those browsers does not get the latest data sets from API Request when change occurs.
  res.header("Cache-Control", "private, no-cache, no-store, must-revalidate");
  res.header("Expires", "-1");
  res.header("Pragma", "no-cache");
  next();
});

app.listen(4000);
