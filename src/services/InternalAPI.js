import axios from "axios";

class BringkadArenaAPI {
    static createHeaders(contentType, authToken) {
        let headers = {}
        headers["Content-Type"] = "application/json"

        if (contentType != null) {
            headers["Content-Type"] = contentType
        }

        if (authToken != null) {
            headers["Authorization"] = `Bearer ${JSON.parse(authToken)}`
        }

        return headers
    }

    static createClient(headers) {
        return axios.create({
            baseURL: process.env.REACT_APP_API_URL,
            headers: headers
        })
    }

    static async sendRequest(url, data, contentType, authToken, method) {
        let message = "OK";
        let status = 200;
        let responseData = {};
        let error = ""
        const headers = this.createHeaders(contentType, authToken);

        if (method == null) {
            method = "post"
        }

        try {
            if (method === "post") {
                let response = await this.createClient(headers).post(url, data);
                responseData = response.data.data
                message = response.data.message

            } else if (method === "put") {
                let response = await this.createClient(headers).put(url, data);
                responseData = response.data.data
                message = response.data.message
            }
            
        } catch (error) {
            console.log(error)
            status = error.response.status;
            message = error.response.data.message;
            error = error.response.data.errors
            console.error(`Error processing request: ${error}`);
        }

        return {
            status: status,
            message: message,
            errors: error,
            data: responseData
        }
    }

    static loginAdmin(data) {
        return this.sendRequest("/v1/admins/login", JSON.stringify(data))

    }

    static validateTokenAdmin() {
        const authToken = localStorage.getItem("userToken")
        return this.sendRequest("/v1/tokens/admins/validate", {}, null, authToken)

    }

    static updateUserData(data, userID) {
        const authToken = localStorage.getItem("userToken")
        return this.sendRequest(`/v1/users/admin/${userID}`, data, "application/json", authToken, "put")
    }

    static updateAdminData(data, adminID) {
        const authToken = localStorage.getItem("userToken")
        return this.sendRequest(`/v1/admins/${adminID}`, data, "application/json", authToken, "put")
    }

    static getAdminDataList() {

    }

    static getUserDataList() {
        
    }

}

export default BringkadArenaAPI;
