import { EntityRepository, Repository } from 'typeorm';
import ClassesSchedule from '../models/ClassesSchedule';

@EntityRepository(ClassesSchedule)
export default class ClassesScheduleRepository extends Repository<ClassesSchedule> { }
