import categoryModel, { _ICategory, ICategory } from '../models/category'

const getAll = async () => {
  const categories: _ICategory[] | null = await categoryModel.find().exec()
  if (!categories) {
    return { status: 404, value: null }
  }
  return { status: 200, value: categories }
}

export default {
  getAll
}
