import {EntityRepository, Repository} from 'typeorm';
import Flight from '../entity/Flight';

@EntityRepository(Flight)
export default class FlightRepository extends Repository<Flight> {

  findByAircraftType(aircraftType: string) {
    return this.find({ aircraftType });
  }
}