import express from "express";
import mongodb from "mongodb";
import cors from "cors";

const mongoClient = new mongodb.MongoClient('mongodb://localhost:27017');

mongoClient.connect();

const db = mongoClient.db('store');

const collection = db.collection('items');

const app = express();
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

const PORT = 8080;

app.post('/items', async (req, res) => {
    const newItem = req.body;
    await collection.insertOne(newItem);
    res.status(200).end();
});

app.get("/items", async (request, response) => {
    const query = request.query;
    const items = await collection.find(query).toArray();
    console.log(items);
    response.json(items);
});

app.get("/items/:query", async (request, response) => {
    const query = request.params.query;
    const items = await collection
    .find({ title: { $regex: `${query}`, $options: 'i' } })
    .toArray();
    console.log(items);
    response.status(200).json(items);

});

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});