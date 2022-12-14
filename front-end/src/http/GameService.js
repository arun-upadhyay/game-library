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
        const uri = this.baseUri + "api/game/" + id;
        fetch(uri, {
            method: 'DELETE',
            redirect: 'follow'
        })
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
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
