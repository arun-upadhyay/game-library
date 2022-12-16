import GameService from "../http/GameService";

/**
 * Get all games
 * @returns {function(*): Promise<string>}
 */
export function getGames() {
    return dispatch => GameService.getAllGames().then(r => r.text()).then(r => {
        const data = JSON.parse(r);
        dispatch({
            data, type: 'GET_GAME'
        });
    });
}

/**
 * Delete game by ID
 * @param id
 * @returns {function(*): Promise<Response>}
 */
export function deleteGame(id) {

    console.log("Deleting item" + id);
    return dispatch => GameService.deleteGameById(id).then(res => {
        if (res.ok && res.status === 200) {
            dispatch({
                data: id, type: 'DELETE_GAME'
            })
        }
    });
}

/**
 * Add new game
 * @param data
 * @returns {function(*): Promise<Response>}
 */
export function addNewGame(data) {
    return dispatch => GameService.addNewGama(data).then(res => {
        if (res.ok && res.status === 200) {
            GameService.getAllGames().then(r => r.text()).then(r => {
                const data = JSON.parse(r);
                dispatch({
                    data, type: 'GET_GAME'
                });
            })
        }
    });
}

/**
 * Update game base on ID
 * @param data
 * @returns {function(*): Promise<Response>}
 */
export function updateGame(data) {
    return dispatch => GameService.updateGame(data).then(res => {
        if (res.ok && res.status === 200) {
            GameService.getAllGames().then(r => r.text()).then(r => {
                const data = JSON.parse(r);
                dispatch({
                    data, type: 'GET_GAME'
                });
            })
        }
    });
}
