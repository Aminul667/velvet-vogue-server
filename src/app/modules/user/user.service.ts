import httpStatus from "http-status";
import QueryBuilder from "../../builder/QueryBuilder";
import AppError from "../../errors/AppError";
import { userSearchableFields } from "./user.constant";
import { TUser } from "./user.interface";
import { User } from "./user.model";

const createUserIntoDB = async (payload: TUser) => {
  const user = await User.isUserExistsByEmail(payload.email);

  if (user) {
    throw new AppError(httpStatus.CONFLICT, "User already exists");
  }

  const result = await User.create(payload);

  return result;
};

const getAllUsersFromDB = async (query: Record<string, unknown>) => {
  const studentQuery = new QueryBuilder(
    User.find(),
    // .populate("user")
    // .populate("admissionSemester")
    // .populate("academicDepartment academicFaculty"),
    query
  )
    .search(userSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();

  const meta = await studentQuery.countTotal();
  const result = await studentQuery.modelQuery;

  return {
    meta,
    result,
  };
};

export const UserServices = {
  createUserIntoDB,
  getAllUsersFromDB,
};
