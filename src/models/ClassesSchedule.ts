import { Column, Entity, PrimaryColumn } from "typeorm";

import{ v4 as uuid } from 'uuid';
@Entity("classeSchedule")
class ClassesSchedule {

  @PrimaryColumn()
  readonly id: string;

  @Column()
  classe_id: string;

  @Column()
  weekday: number;

  @Column()
  time_from: number;

  @Column()
  time_to: number;


  constructor(){
    if(!this.id){
      this.id  = uuid();
    }
  }
}

export { ClassesSchedule };
