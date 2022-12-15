import {Component} from "react";
import Game from "./Game";
import {connect} from 'react-redux';
import {getGames} from "./Action/ActionTypes";
import AddGame from "./AddGame";

class Games extends Component {

    constructor(props) {
        super(props);

        this.state = {
            editState: false
        }
        this.changeEditableState = this.changeEditableState.bind(this);
    }

    componentDidMount() {
        this.props.getGames();
    }

    changeEditableState(val) {
        this.setState({
            editState: val
        })
    }

    render() {
        return (<div>

            <AddGame/>

            <table>
                <tr>
                    <td> Title</td>
                    <td> Rating</td>
                    <td> Review</td>
                </tr>
                {Object.entries(this.props.games).map(([key, value]) => (
                    <Game key={key} id={value.id} title={value.title} rating={value.rating} review={value.review}
                          last_played={value.last_played}/>
                ))}
            </table>

        </div>);
    }
}

const mapStateToProps = (state) => {
    return {
        games: state.gameReducer.games
    }
}

export default connect(mapStateToProps,
    {
        getGames
    })(Games);
