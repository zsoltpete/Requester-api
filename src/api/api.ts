import { Router, Response, Request, NextFunction } from 'express'
import categoryDao from '../store/categoryDao'
import { _ICategory } from '../models/category'

const apiRouter = Router()

const getCategories = async (request: Request, response: Response) => {
  try {
    const databaseResponse = await categoryDao.getAll()
    console.log("Ott van")
    response.status(databaseResponse.status).send(databaseResponse.value)
  } catch (e) {
    response.status(500).send()
  }
}

apiRouter.get('/categories', getCategories)

export default apiRouter
