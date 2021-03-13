import { Column, Entity, PrimaryColumn } from "typeorm";

import{ v4 as uuid } from 'uuid';
@Entity("moneytoria")
class Moneytoria {

  @PrimaryColumn()
  readonly id: string;

  @Column()
  nome: string;

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

export { Moneytoria };
