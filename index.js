const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;
// middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.iitoxlh.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri);

async function run() {
  try {
    const appointmentOptionCollection = client
      .db("doctorsPortal")
      .collection("appointmentOptions");

    // endpoint
    app.get("/appointmentOptions", async (req, res) => {
      const query = {};
      const result = await appointmentOptionCollection.find(query).toArray();
      res.send(result);
    });
  } finally {
  }
}
run().catch();

app.get("/appointmentOptions", async (req, res) => {
  const query = {};
  const data = appointmentOptionCollection.find(query).toArray();
  res.send(data);
});

app.get("/", async (req, res) => {
  res.send("api running");
});

app.listen(port, () => console.log(`port is running on localhost:${port}`));
