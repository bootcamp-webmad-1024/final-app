import axios from 'axios'

class CoastersServices {

    constructor() {

        this.axiosApp = axios.create({
            baseURL: `${import.meta.env.VITE_APP_API_URL}/api`
        })

        this.axiosApp.interceptors.request.use(config => {

            const storedToken = localStorage.getItem('authToken');

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` };
            }

            return config
        })
    }

    fetchCoasters() {
        return this.axiosApp.get(`/coasters`)
    }

    fetchOneCoaster(id) {
        return this.axiosApp.get(`/coasters/${id}`)
    }

    saveCoaster(coasterData) {
        return this.axiosApp.post(`/coasters`, coasterData)
    }

    editCoaster(id, coasterData) {
        return this.axiosApp.put(`/coasters/${id}`, coasterData)
    }

    deleteCoaster(id) {
        return this.axiosApp.delete(`/coasters/${id}`)
    }

    filterCoasters(query) {
        return this.axiosApp.get(`/coasters`, {
            params: query
        })
    }
}

export default new CoastersServices()