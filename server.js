// backend/server.js
const express = require("express");
const cors = require("cors");
const qrRoutes = require("./routes/qrRoutes");

const app = express();
const port = process.env.PORT || 3001;
app.use(cors());
app.use(express.json());

app.use("/generate", qrRoutes);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
