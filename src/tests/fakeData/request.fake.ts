import { HttpRequest } from "@infra/http/protocols/http";

export const fakeRequest = (): HttpRequest => {
    return {
        body: {},
        params: {},
        query: {},
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Bearer token",
        }
}
};