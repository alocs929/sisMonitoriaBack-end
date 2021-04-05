import { EntityRepository, Repository } from 'typeorm';
import Connections from '../models/Connections';

@EntityRepository(Connections)
class ClassesRepository extends Repository<Connections> {}
export default ClassesRepository;
