import { EntityRepository, Repository } from "typeorm";
import { Moneytoria } from "../models/Moneytoria";

@EntityRepository(Moneytoria)
class MoneytariaRepository extends Repository<Moneytoria> {

}
export { MoneytariaRepository }
