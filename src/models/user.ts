import mongoose, { Schema, Document } from 'mongoose'

export interface _IUser {
  image_src?: string
  name: string,
  moral_value: Number
}

export interface IUser extends Document, _IUser {}

const UserSchema: Schema = new Schema({
  image_src: { type: String, required: false },
  name: { type: String, required: true },
  moral_value: { type: Number, required: true },
})

// Export the model and return your IUser interface
export default mongoose.model<IUser>('User', UserSchema, "users")
