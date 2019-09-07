import userModel, { _IUser, IUser } from '../models/user'

const getAll = async () => {
  const users: _IUser[] | null = await userModel.find().exec()
  if (!users) {
    return { status: 404, value: null }
  }
  return { status: 200, value: users }
}

export default {
  getAll
}