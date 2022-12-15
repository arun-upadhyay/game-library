import {Component} from "react";
import {connect} from 'react-redux';
import {addNewGame} from "./Action/ActionTypes";

class AddGame extends Component {
    constructor(props) {
        super(props);
        this.setTitle = this.setTitle.bind(this);
        this.setRating = this.setRating.bind(this);
        this.setReview = this.setReview.bind(this);
        this.setLastPlayed = this.setLastPlayed.bind(this);
        this.addNewGame = this.addNewGame.bind(this);

        this.state = {
            'title': '',
            'rating': '',
            'review': '',
            'last_played': ''
        }
    }

    addNewGame(event) {
        event.preventDefault();
        const data = {
            'title': this.state.title,
            'rating': this.state.rating,
            'review': this.state.review,
            'last_played': this.state.last_played
        }
        this.props.addNewGame(data);
    }

    setTitle(event) {
        this.setState({
            ...this.state,
            'title': event.target.value
        })
    }

    setRating(event) {
        this.setState({
            ...this.state,
            'rating': event.target.value
        })
    }

    setReview(event) {
        this.setState({
            ...this.state,
            'review': event.target.value
        })
    }

    setLastPlayed(event) {
        this.setState({
            ...this.state,
            'last_played': event.target.value
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.addNewGame}>
                    <table>
                        <tr>
                            <td>Name</td>
                            <td><input type="text" name="title" onChange={this.setTitle}/></td>
                        </tr>
                        <tr>
                            <td>Rating</td>
                            <td><select name="rating" id="rating" onChange={this.setRating}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select><
                        /td>
                        </tr>
                        <tr>
                            <td>Review</td>
                            <td><textarea name="rating" id="rating" onChange={this.setReview}/></td>
                        </tr>
                        <tr>
                            <td>Last played</td>
                            <td><input
                                type="datetime-local"
                                name="last_played"
                                value="2017-06-01T08:30" onChange={this.setLastPlayed}/></td>
                        </tr>
                        <tr>
                            <td>
                                <input type="submit" value="Submit"/>
                            </td>
                        </tr>

                    </table>
                </form>
            </div>
        );
    }
}

export default connect(null,
    {addNewGame})(AddGame);
