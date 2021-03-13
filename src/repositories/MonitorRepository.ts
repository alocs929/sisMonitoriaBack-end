import { EntityRepository, Repository } from "typeorm";
import { Monitor } from "../models/Monitor";

@EntityRepository(Monitor)
class MonitorRepository extends Repository<Monitor> {

}
export { MonitorRepository }
