import { EntityRepository, Repository } from "typeorm";
import { ClassesSchedule } from "../models/ClassesSchedule";

@EntityRepository(ClassesSchedule)
class ClassesScheduleRepository extends Repository<ClassesSchedule> {

}
export { ClassesScheduleRepository }
