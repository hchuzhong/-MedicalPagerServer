const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth.js");

const app = express();
const PROT = process.env.PROT || 5000;

require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.send("Hello hi");
});

app.use("/auth", authRoutes);

app.listen(PROT, () => console.log(`Server running on port ${PROT}`));
