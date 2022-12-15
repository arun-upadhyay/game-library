import gameService from "../http/GameService";
import GameService from "../http/GameService";


export function getGames() {
    return dispatch => gameService.getAllGames().then(r => r.text()).then(r => {
        const data = JSON.parse(r);
        dispatch({
            data, type: 'GET_GAME'
        });
    });
}

export function deleteGame(id) {
    return dispatch => GameService.deleteGameById(id).then(res => {
        if (res.ok && res.status === 200) {
            dispatch({
                data: id, type: 'DELETE_GAME'
            })
        }
    });
}

export function addNewGame(data) {
    return dispatch => gameService.addNewGama(data).then(res => {
        if (res.ok && res.status === 200) {
            gameService.getAllGames().then(r => r.text()).then(r => {
                const data = JSON.parse(r);
                dispatch({
                    data, type: 'GET_GAME'
                });
            })
        }
    });
}

export function editGame(data) {
    return dispatch => dispatch({
        data: data, type: 'EDIT_GAME'
    })
}
