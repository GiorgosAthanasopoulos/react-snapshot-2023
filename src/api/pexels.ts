import {createClient} from "pexels";

const key: string = "";
const client = createClient(key);

export async function getRandom() {
    return await client.photos.curated({page: 1, per_page: 20});
}

export async function getFiltered(filter: string) {
    return await client.photos.search({query: filter, orientation: "landscape", page: 1, per_page: 20});
}