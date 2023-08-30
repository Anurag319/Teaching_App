import express  from 'express'; 
import dotenv from 'dotenv'; 
import cors from 'cors';
import Router from './routes/route.js';
import bodyParser from 'body-parser';
import Connection from './database/db.js';


const app = express(); 
dotenv.config();
const PORT =  8000; 

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(bodyParser.json({ extended : true}));
app.use(bodyParser.urlencoded({ extended : true}));
app.use('/',Router);

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

Connection(USERNAME,PASSWORD);
app.listen(PORT, ()=> console.log(`server is running succesfully on port ${PORT}`));