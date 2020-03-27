import * as express from 'express';
import { Request, Response, Router } from 'express';
import * as bodyParser from  'body-parser';
import { createConnection, getConnection } from 'typeorm';
import Flight from './entity/Flight';
import flightRepository from './repositories/FlightRepository';

(async () => {
  const connection = await createConnection();
  const app = express();
  app.use(bodyParser.json());
  const customFlightRepository = connection.getCustomRepository(flightRepository);

  app.get('/flights', async function (req: Request, res: Response) {
    const flights = await customFlightRepository.find();
    res.json(flights);
  });

  app.get('/flights/:aircraft', async function (req: Request, res: Response) {
    const flights = await customFlightRepository.findByAircraftType(req.params.aircraft);
    res.json(flights);
  });

  app.post('/flight', async function (req: Request, res: Response) {
    const flight = new Flight();
    customFlightRepository.merge(flight, req.body);
    const result = await customFlightRepository.save(flight);
    res.json(result);
  });

  app.delete('/all', async function (req: Request, res: Response) {
    await customFlightRepository.clear();
    res.json({ message: 'success' });
  });
  
  app.listen(3000);
})();
