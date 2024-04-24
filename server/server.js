const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const session = require("express-session");
const passport = require("passport");
const users = require("./Routes/user.route");
const exploreRepositories = require("./Routes/explore.route");
const authRoutes = require("./Routes/auth.route");
const dotenv = require("dotenv");
dotenv.config();
require("./passport/github.auth.js");
const port = process.env.PORT;
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./Swagger/swagger.js");
app.use(bodyParser.json());
app.use(cors());
app.use(session({ secret: "abc", resave: false, saveUninitailized: false }));
app.use(passport.initialize());
app.use(passport.session());
app.use("/api/users", users);
app.use("/api/explore", exploreRepositories);
app.use("/api/auth", authRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

mongoose
  .connect(`${process.env.MONGO_DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connected"));
