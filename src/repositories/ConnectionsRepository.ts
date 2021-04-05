import { EntityRepository, Repository } from 'typeorm';
import Connections from '../models/Connections';

@EntityRepository(Connections)
// eslint-disable-next-line prettier/prettier
class ConnectionsRepository extends Repository<Connections> { }

export default ConnectionsRepository;
