import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: { type: String, requried: true },
  email: { type: String, required: true },
  authentication: {
    password: { type: String, required: true, select: false },
    salt: { type: String, select: false },
    sessionToken: { type: String, select: false },
  },
});

export const UserModel = mongoose.model("User", UserSchema);
export const getUsers = () => UserModel.find();
export const getUserByEmail = (email: string) => UserModel.findOne({ email });
export const getUserBySessionToken = (sessionToken: string) =>
  UserModel.findOne({
    "authentication.sessionToken": sessionToken,
  });
export const getUserById = (_id: string) => UserModel.findById(_id);
export const createUser = (values: Record<string, any>) =>
  new UserModel(values).save().then((user) => user.toObject());
export const deleteUserById = (_id: string) =>
  UserModel.findOneAndDelete({ _id });
export const updateUserById = (_id: string, values: Record<string, any>) =>
  UserModel.findByIdAndUpdate(_id, values);

