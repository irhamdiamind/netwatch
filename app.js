const express = require("express");
const apiRoutes = require("./routes");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(express.json());
app.use("/api", apiRoutes);

app.use((req, res) => {
  res.status(403).json({ message: "Forbidden: not allowed" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
