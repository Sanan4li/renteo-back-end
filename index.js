require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
app.use(express.json());
app.use("/auth", authRoutes);

mongoose
  .connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((result) => {
    app.listen(process.env.PORT, () => {
      console.log("Listening on port : " + process.env.PORT);
    });
  })
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("test");
});
