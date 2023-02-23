import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';
import log4js from 'log4js';
import postRoutes from './routes/posts.js';
const logger = log4js.getLogger();

const app = express();

//Logger config
log4js.configure({
    appenders: {
        everything: { type: 'dateFile', filename: 'all-the-logs.log' }
    },
    categories: {
        default: { appenders: ['everything'], level: 'debug' }
    }
});

app.use('/posts', postRoutes);


app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());

const mongo_connection_url = `mongodb+srv://pawanchauhan933:ATQhH0nJtcf7Zaja@cluster0.mzuyhhb.mongodb.net/?retryWrites=true&w=majority`;

const PORT = process.env.PORT || 5000;

mongoose.connect(mongo_connection_url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port : ${PORT}`)))
    .catch(err => logger.error(err));
mongoose.set('strictQuery', false);



