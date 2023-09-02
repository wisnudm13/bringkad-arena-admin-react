import BringkadArenaAPIClient from "./Client";

export function getUserList(params) {
    return BringkadArenaAPIClient.get("/v1/users/list", {params: params})
}
