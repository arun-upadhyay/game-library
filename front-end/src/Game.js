import {Component} from "react";
import {connect} from 'react-redux';
import {deleteGame} from "./Action/ActionTypes";

class Game extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.id}</td>
                <td>{this.props.title}</td>
                <td>{this.props.rating}</td>
                <td>{this.props.review}</td>
                <td>{this.props.last_played}</td>
                <td>
                    <button onClick={() => {
                        this.props.changeWord(this.props.id)
                    }}>Edit
                    </button>
                </td>
                <td>
                    <button onClick={() => {
                        this.props.deleteGame(this.props.id)
                    }}>Delete
                    </button>
                </td>
            </tr>
        );
    }
}

export default connect(null,
    {deleteGame})(Game);
