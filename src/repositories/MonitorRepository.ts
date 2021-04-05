import { EntityRepository, Repository } from 'typeorm';
import Monitor from '../models/Monitor';

@EntityRepository(Monitor)
// eslint-disable-next-line prettier/prettier
class MonitorRepository extends Repository<Monitor> { }
export default MonitorRepository;
