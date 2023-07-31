const express = require('express');
const { connect } = require('mongoose');
const booksRouters = require('./routers/books');
const bodyParser = require('body-parser');

const db = process.env.MONGODB || 'mongodb://localhost:27017/api_library';

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

app.get('/', (res, req) => {
  res.send('app de biblioteca')
})

// routes
app.use('/api/libros', booksRouters);

const PORT = process.env.PORT || 3006;

app.listen(PORT, () => {
  connectDb();
  console.log(`API-LIBRARY READY AT ${PORT}`);
})