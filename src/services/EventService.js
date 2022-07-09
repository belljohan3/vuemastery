import axios from "axios";

const apiClient = axios.create({
    baseURL: 'https://my-json-server.typicode.com/belljohan3/vuemastery/events',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getEvents(perPage, page) {
        return apiClient.get('?_limit=' + perPage + '&_page=' + page)
    },
    getEvent(id) {
        return apiClient.get('/' + id)
    }
}