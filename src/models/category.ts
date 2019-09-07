import mongoose, { Schema, Document } from 'mongoose'

export interface _ICategory {
  icon: string
  name: string
}

export interface ICategory extends Document, _ICategory {}

const CategorySchema: Schema = new Schema({
  icon: { type: String, required: true },
  name: { type: String, required: true },
})

// Export the model and return your IUser interface
export default mongoose.model<ICategory>('Category', CategorySchema, "categories")
