import * as express from 'express';
import { Request, Response } from 'express';
import * as bodyParser from  'body-parser';
import { createConnection } from 'typeorm';
import { Flight } from './entity/Flight';

createConnection().then(connection => {
  const app = express();
  app.use(bodyParser.json());
  
  const flightRepository = connection.getRepository(Flight);

  app.get('/flights', async function (req: Request, res: Response) {
    const flights = await flightRepository.find();
    res.json(flights);
  });

  app.post('/flight', async function (req: Request, res: Response) {
    const flight = new Flight();
    flightRepository.merge(flight, req.body);
    const result = await flightRepository.save(flight);
    res.json(result);
  });

  app.delete('/all', async function (req: Request, res: Response) {
    await flightRepository.clear();
    res.json({ message: 'success' });
  });
  
  app.listen(3000);
})
