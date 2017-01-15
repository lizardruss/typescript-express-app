import {
  Column,
  Entity,
  Id,
  Types
} from '../tpa'

@Entity()
class User {

  @Id()
  id: number;

  @Column()
  username: string;

  @Column({type: Types.BOOLEAN})
  admin: boolean;

  public constructor(init?: Partial<User>) {
    Object.assign(this, init);
  }

}

export {User};


let user = new User({username: 'russ', id: 1})
