import { Model } from "mongoose";
import { USER_ROLE } from "./user.constant";

export type TUser = {
  email: string;
  password: string;
  isDeleted: boolean;
};

export interface UserModel extends Model<TUser> {
  //instance methods for checking if the user exist
  isUserExistsByEmail(id: string): Promise<TUser>;
}

export type TUserRole = keyof typeof USER_ROLE;
