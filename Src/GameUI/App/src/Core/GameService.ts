import axios from 'axios'
import { Cards } from './Models'

export const GameService = axios.create({
    baseURL: 'http://localhost:7001',
    responseType: 'json',
})

export const getTime = async (): Promise<string> =>
    new Promise(resolve => {
        const currentTime = new Date().getTime()
        resolve(currentTime.toString())
    })

export const getCards = async (): Promise<Cards> => {
    const response = await GameService.get<Cards>('/getcards')
    return response.data
}