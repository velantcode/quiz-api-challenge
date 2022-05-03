import { Schema, model } from 'mongoose';
import { setDate } from '../Functions/GlobalFunctions';

const UsersSchema = new Schema(
  {
    username: { type: String, require: true },
    fullname: { type: String, require: true },
    password: { type: String, require: true },
    createdAt: { type: Number, default: setDate },
    updatedAt: { type: Number, default: setDate, set: setDate },
  },
  { id: false }
);

UsersSchema.set('toJSON', { getters: true });

const Users = model('users', UsersSchema);

export default Users;
