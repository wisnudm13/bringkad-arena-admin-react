import BringkadArenaAPIClient from "./Client";

export function loginAdmin(data) {
    return BringkadArenaAPIClient.post("/api/v1/admins/login", JSON.stringify(data))
}

export function validateTokenAdmin() {
    const authToken = localStorage.getItem("authToken")

    return BringkadArenaAPIClient.post("/api/v1/admins/validate-token", {}, 
        {
            headers: {
                "Authorization": `Bearer ${authToken}`
            }
        }
    )
}