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
            "rating": data.rating,
            "review": data.review,
            "last_played": data.last_played
        });
        return fetch(this.baseUri + "api/game/", {
            method: 'POST',
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

    // saveGame() {
    //     let form_data = new FormData();
    //     form_data.append("username", username);
    //     form_data.append("password", password);
    //     return fetch("api/auth/login", {
    //         method: 'POST',
    //         body: form_data,
    //         redirect: 'follow'
    //     })
    // }

}

export default new GameService("http://localhost:8000/");
