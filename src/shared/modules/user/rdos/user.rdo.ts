import { Expose } from 'class-transformer';

export class UserRdo {

  @Expose()
  public id: string;

  @Expose()
  public name: string;

  @Expose()
  public email: string;

  @Expose()
  public type: string;

  @Expose()
  public favourites: string[];

  @Expose()
  public avatarUrl: string;
}
