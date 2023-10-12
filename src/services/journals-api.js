import axios from "axios"

const baseURL = 'http://localhost:3005/journals'
const baseURLRender = 'https://mhjounal-backend.onrender.com/journals'

export const getJournals = async () => {
    const URL = baseURLRender || baseURL
    const response = await axios.get(URL)
    return response
}

export const getOneJournal = async (id) => {
    const URL = `${baseURLRender || baseURL}/${id}`
    const response = await axios.get(URL)
    console.log(response)
    return response
}

export const editJournal = async (id, data) => {
    const URL = `${baseURLRender || baseURL}/${id}`
    console.log('URL', URL)
    const response = await axios.put(URL, data)
    console.log(response)
    return response

}

export const createJournal = async (journal) => {
    const URL = baseURLRender || baseURL
    const response = await axios.post(URL, journal)
    return response
}
export const deleteJournal = async (id) => {
    const URL = `${baseURLRender || baseURL}/${id}`
    const response = axios.delete(URL)
    return response
}
