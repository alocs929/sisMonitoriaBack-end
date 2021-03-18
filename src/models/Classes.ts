import { Column, Entity, PrimaryColumn } from 'typeorm';

import { v4 as uuid } from 'uuid';

@Entity('classes')
class Classes {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  monitor_id: string;

  @Column()
  subject: string;

  @Column()
  cost: string;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export default Classes;
