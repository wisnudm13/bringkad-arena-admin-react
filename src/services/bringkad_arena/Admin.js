import BringkadArenaAPIClient from "./Client";

export function getUserList(params) {
    return BringkadArenaAPIClient.get("/v1/admins/list", {params: params})
}

export function updateUserData() {
    return BringkadArenaAPIClient.put("/v1/users/admin")
}
