import {Component} from "react";
import gameService from "./http/GameService";
import Game from "./Game";

export default class Games extends Component {

    constructor(props) {
        super(props);
        this.state = {
            games: []
        }
    }

    componentDidMount() {
        gameService.getAllGames().then(r => r.text()).then(r => {
            const obj = JSON.parse(r);

            this.setState({
                games: obj
            });
        });
    }

    render() {
        return (<div>
            <table>
                <tr>
                    <td> Title</td>
                    <td> Rating</td>
                    <td> Review</td>
                </tr>
                {Object.entries(this.state.games).map(([key, value]) => (
                    <Game key={key} id={value.id} title={value.title} rating={value.rating} review={value.review}
                          last_played={value.last_played}/>
                ))}
            </table>

        </div>);
    }

}
