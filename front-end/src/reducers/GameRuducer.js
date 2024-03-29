const initialState = {
    games: []
};
const returnData = (games) => {
    return {
        games: games,
        editState: false
    };
}
/**
 * Centralized redux store to keep state of the application
 *
 * @param state
 * @param action
 * @returns {{games, editState: boolean}|{games: *[]}}
 */
const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_GAME':
            return returnData(action.data)
        case 'ADD_GAME':
            return returnData([...state.games, action.data]);
        case 'DELETE_GAME':
            let filterData = state.games.filter((game) => {
                return game.id !== action.data
            });
            console.log(filterData)
            return returnData(filterData);

        default:
            return state;
    }
}
export default gameReducer;
