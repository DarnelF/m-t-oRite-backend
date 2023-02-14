const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://admin:byVPC8jFZlgVs2pl@cluster0.sezxo9r.mongodb.net/meteo-rite";

mongoose
  .connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log("Database connected"))

  .catch((error) => console.error(error));
