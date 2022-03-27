const express = require('express');
const cors = require('cors');
const apiRouter = require('./routes/index');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// use express router
app.use('/', apiRouter);

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`BooksBackEnd listining on port ${port}`);
});

module.exports = app; 