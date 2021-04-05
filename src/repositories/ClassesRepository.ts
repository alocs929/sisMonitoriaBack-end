import { EntityRepository, Repository } from 'typeorm';
import Classes from '../models/Classes';

@EntityRepository(Classes)
class ClassesRepository extends Repository<Classes> {}
export default ClassesRepository;
