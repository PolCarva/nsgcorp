import { STABLES } from "@/stables";

export default async function graphqlRequest(query: { query: string }) {
    const url = `${STABLES.API_URL}`;

    const headers: { 'Content-Type': string } = { 'Content-Type': 'application/json' };

    const res = await fetch(url, {
        headers,
        method: 'POST',
        body: JSON.stringify(query)
    });

    if (!res.ok) {
        console.error(`Error: ${res.statusText}`);
        throw new Error(`Error: ${res.statusText}`);
    }

    const resJson = await res.json();
    return resJson;
}
