import axios from "axios";

class BringkadArenaAPI {
    static createHeaders(contentType, authToken) {
        let headers = {}
        headers["Content-Type"] = "application/json"

        if (contentType != null) {
            headers["Content-Type"] = contentType
        }

        if (authToken != null) {
            headers["Authorization"] = `Bearer ${authToken}`
        }

        return headers
    }

    static createClient(headers) {
        return axios.create({
            baseURL: process.env.REACT_APP_API_URL,
            headers: headers
        })
    }

    static async sendRequest(url, data, contentType, authToken) {
        let message = "OK";
        let status = 200;
        let responseData = {};
        const headers = this.createHeaders(contentType, authToken);

        try {
            let response = await this.createClient(headers).post(url, data);
            responseData = response.data.data
            message = response.data.message
            
        } catch (error) {
            status = error.response.status;
            message = error.response.data.message;
            console.error(`Error processing request: ${error}`);
        }

        return {
            status: status,
            message: message,
            data: responseData
        }
    }

    static loginAdmin(data) {
        return this.sendRequest("/v1/admins/login", JSON.stringify(data))

    }

    static validateTokenAdmin() {
        const authToken = localStorage.getItem("userToken")
        return this.sendRequest("/v1/tokens/admins/validate", {}, null, JSON.parse(authToken))

    }

    static getAdminDataList() {

    }

    static getUserDataList() {
        
    }

}

export default BringkadArenaAPI;
