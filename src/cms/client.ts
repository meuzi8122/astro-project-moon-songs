import { createClient } from "microcms-js-sdk";
import { GAMES } from "~/constants/domain";

const client = createClient({
    serviceDomain: import.meta.env.SERVICE_DOMAIN,
    apiKey: import.meta.env.API_KEY
});

export const findSongs = async (gameId: string): Promise<Song[]> => {
    return (await client.get({
        endpoint: "songs",
        queries: {
            fields: "id,title,game,kind,artwork,youtube",
            filters: `game[equals]${GAMES[gameId]}`
        }
    })).contents.map((content: any): Song => ({
        id: content.id,
        title: content.title,
        game: content.game,
        kind: content.kind,
        artworkUrl: content.artwork.url,
        youtubeUrl: content.youtubeUrl,
    }));
}