import { Column, Entity, PrimaryColumn } from 'typeorm';

import { v4 as uuid } from 'uuid';

@Entity('classes')
class Classes {
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

  @Column()
  subject: string;

  @Column()
  cost: string;

  @Column()
  weekday: number;

  @Column()
  time_from: number;

  @Column()
  time_to: number;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export default Classes;
