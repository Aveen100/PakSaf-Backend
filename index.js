// server.js
const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");
const orderRoutes = require("./routes/orderRoutes");
const RiderRoutes = require("./routes/RiderRoutes");
const WithdrawRoutes = require("./routes/WithdrawRoutes");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;
// Allow requests from http://localhost:8080
// const corsOptions = {
//   origin: "http://localhost:8080",
// };
const corsOptions = {
  origin: ["http://localhost:8080", "http://localhost:8081"],
};

app.use(cors(corsOptions));

// Middleware
// configure the app to use bodyParser()
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
// Routes
app.use("/api/user", userRoutes);
app.use("/api/total-orders", orderRoutes);
app.use("/api/riders", RiderRoutes);
app.use("/api/withdraws", WithdrawRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
