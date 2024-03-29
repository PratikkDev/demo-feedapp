const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const multer = require('multer');
const path = require('path')
const upload = multer();
const postRouter = require('./src/routes/post.route');
const connectDB = require('./src/config/config');
require('dotenv').config()


const app = express();
const port = process.env.PORT || 4001;

app.use(upload.any());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

connectDB();

app.use('/', postRouter);

const server = http.createServer(app);
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
