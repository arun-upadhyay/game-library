import GameService from "../http/GameService";
import gameService from "../http/GameService";

const gameReducer = (state = {games: []}, actionType) => {

    switch (actionType.type) {
        case 'GET':

            return {
                authLogIn: true
            }

            break;
        case 'LOGOUT':
            return {
                authLogIn: false
            }
            break;

        default:
            return state;
    }
}
export default gameReducer;
