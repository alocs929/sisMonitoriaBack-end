import { Column, Entity, PrimaryColumn } from "typeorm";

import{ v4 as uuid } from 'uuid';
@Entity("monitor")
class Monitor {

  @PrimaryColumn()
  readonly id: string;

  @Column()
  name: string;

  @Column()
  avatar: string;

  @Column()
  whatsapp: string;

  @Column()
  bio: string;

  constructor(){
    if(!this.id){
      this.id  = uuid();
    }
  }
}

export { Monitor };
