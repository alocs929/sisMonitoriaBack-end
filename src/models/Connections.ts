import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('connections')
class Connections {
  @PrimaryColumn()
  readonly id: number;

  @Column()
  counter: number;
}

export default Connections;
