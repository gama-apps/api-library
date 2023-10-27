const express = require('express');
const { connect } = require('mongoose');
const bodyParser = require('body-parser');
const booksRouter = require('./routers/books');
const categoryRouter = require('./routers/category');
const dotenv = require('dotenv')
dotenv.config()

//const db = process.env.MONGODB || 'mongodb://localhost:27017/api_library';
const db = process.env.MONGODB


const connectDb = async () => {
    try {
        await connect(db);
        console.log('DB CONNECTED..');
    } catch (error) {
        console.error('DB CONNECTION ERROR:', error);
    }
}

const app = express();
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('app de biblioteca')
})

// routes
app.use('/api/v1/libros', booksRouter);
app.use('/api/v1/category', categoryRouter);

const PORT = process.env.PORT || 3006;

app.listen(PORT, () => {
  connectDb();
  console.log(`API-LIBRARY READY AT ${PORT}`);
})