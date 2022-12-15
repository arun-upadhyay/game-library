import {Component} from "react";
import {connect} from 'react-redux';
import {deleteGame, editGame} from "./Action/ActionTypes";

class Game extends Component {

    constructor(props) {
        super(props);
        this.deleteGame = this.deleteGame.bind(this);
        this.editGame = this.editGame.bind(this);
    }

    render() {
        return (
            <tr>
                <td>{this.props.id}</td>
                <td>{this.props.title}</td>
                <td>{this.props.rating}</td>
                <td>{this.props.review}</td>
                <td>{this.props.last_played}</td>
                <td>
                    <button>Edit</button>
                </td>
                <td>
                    <button>Delete
                    </button>
                </td>
            </tr>
        );
    }

    deleteGame(id) {
        this.props.deleteGame(id)
    }

    editGame(id) {
        // // this.props.editGame({
        // //     id: id,
        // //     state: true
        // // })
        //
        // this.setState({
        //     shouldEditProp: true
        // })
        // console.log(this.state.shouldEditProp);
    }
}

export default connect(null,
    {deleteGame, editGame})(Game);
