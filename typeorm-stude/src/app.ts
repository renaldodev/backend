import 'reflect-metadata';
import express, { Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import AppointmentRouter from './router/Appointment.router';
import './database';

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/appointment', AppointmentRouter);
app.get('/', (re: Request, res: Response) =>
  res.json({ message: 'ola mundo' }),
);

app.listen(3000, () => console.info('app runnig o port 3000'));
