import {Component} from "react";
import GameService from "./http/GameService";

export default class Game extends Component {
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
                    <button onClick={() => {
                        this.editGame(this.props.id)
                    }}>Edit
                    </button>
                </td>
                <td>
                    <button onClick={() => {
                        this.deleteGame(this.props.id)
                    }}>Delete
                    </button>
                </td>
            </tr>
        );
    }

    deleteGame(id) {
        console.log("Deleting game..." + id)
        GameService.deleteGameById(id).then(r => {
            console.log(r.text());
        });
    }

    editGame(id) {
        console.log("editing game..." + id)
    }

}
