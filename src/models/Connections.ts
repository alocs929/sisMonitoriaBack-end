import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity('connections')
class Connections{
  @PrimaryColumn()
  readonly id: string;

  @Column()
  counter: number;


  constructor(){
    if (!this.id){
      this.id = uuid();
    }
  }
}

export default Connections;
