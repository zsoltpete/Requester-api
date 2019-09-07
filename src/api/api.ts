import { Router, Response, Request, NextFunction } from 'express'
import categoryDao from '../store/categoryDao'
import userDao from '../store/userDao'
import { _ICategory } from '../models/category'

const apiRouter = Router()

const getCategories = async (request: Request, response: Response) => {
  try {
    const databaseResponse = await categoryDao.getAll()
    response.status(databaseResponse.status).send(databaseResponse.value)
  } catch (e) {
    response.status(500).send()
  }
}

const getUsers = async (request: Request, response: Response) => {
  try {
    const databaseResponse = await userDao.getAll()
    response.status(databaseResponse.status).send(databaseResponse.value)
  } catch (e) {
    response.status(500).send()
  }
}

apiRouter.get('/categories', getCategories)
apiRouter.get('/users', getUsers)

export default apiRouter
