import BringkadArenaAPIClient from "./Client";

export function getUserList(params) {
    return BringkadArenaAPIClient.get("/v1/admins/list", {params: params})
}
