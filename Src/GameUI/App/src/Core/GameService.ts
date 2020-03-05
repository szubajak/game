import axios from 'axios'
import { Cards } from './Models'

export const GameService = axios.create({
    //baseURL: 'https://szubarga-game-api.azurewebsites.net',
    baseURL: 'http://localhost:8081',
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
