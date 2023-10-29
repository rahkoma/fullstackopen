import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = (personObject) => {
    const request = axios.post(baseUrl, personObject)
    return request.then(response => response.data)
}

const deletePerson = (personId) => {
    axios.delete(`${baseUrl}/${personId}`)
}

const update = (personId, personObject) => {
    const request = axios.put(`${baseUrl}/${personId}`, personObject)
    return request.then(response => response.data)
}

export default { getAll, create, deletePerson, update }