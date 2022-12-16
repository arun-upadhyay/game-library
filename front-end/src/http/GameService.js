/**
 * HTTP Service Handler to communicate with an API
 */
class GameService {
    constructor(uri) {
        this.baseUri = uri;
    }

    getAllGames() {
        return fetch(this.baseUri + "api/game", {
            method: 'GET',
            credentials: "same-origin",
            redirect: 'follow'
        });
    }

    deleteGameById(id) {
        return fetch(this.baseUri + "api/game/" + id, {
            method: 'DELETE',
            credentials: "same-origin",
            redirect: 'follow'
        });
    }

    addNewGama(data) {
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const raw = JSON.stringify({
            "title": data.title,
            "review": data.review,
            "rating": data.rating,
            "last_played": data.last_played
        });
        return fetch(this.baseUri + "api/game/", {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        })
    }

    updateGame(data) {
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "title": data.title,
            "rating": data.rating,
            "review": data.review,
            "last_played": data.last_played
        });
        return fetch(this.baseUri + "api/game/" + data.id, {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        })
    }

    getGameById(id) {
        return fetch(this.baseUri + "api/game/".id, {
            method: 'GET',
            credentials: "same-origin",
            redirect: 'follow'
        });
    }
}

export default new GameService(process.env.REACT_APP_API_URL);
