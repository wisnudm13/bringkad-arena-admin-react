import BringkadArenaAPIClient from "./Client";

export function getUserList(params) {
    return BringkadArenaAPIClient.get("/api/v1/admins/list", {params: params})
}
