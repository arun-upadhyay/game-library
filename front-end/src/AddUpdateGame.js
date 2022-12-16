import {Component} from "react";
import {connect} from 'react-redux';
import {addNewGame, updateGame} from "./Action/ActionTypes";

/**
 * Add or Update a Game
 */
class AddUpdateGame extends Component {
    constructor(props) {
        super(props);
        this.setTitle = this.setTitle.bind(this);
        this.setRating = this.setRating.bind(this);
        this.setReview = this.setReview.bind(this);
        this.setLastPlayed = this.setLastPlayed.bind(this);
        this.addNewGame = this.addNewGame.bind(this);
        this.clearForm = this.clearForm.bind(this);
        this.state = {
            "id": "",
            'title': '',
            'rating': '',
            'review': '',
            'last_played': '',
            'message': ''
        };
    }

    addNewGame(event) {
        event.preventDefault();
        if (this.state.id) {
            this.props.updateGame({...this.state});
            this.setState({
                ...this.state, 'message': 'Record Updated'
            })
        } else {
            this.props.addNewGame({...this.state});
            this.setState({
                "id": "",
                'title': '',
                'rating': '',
                'review': '',
                'last_played': '',
                'message': 'Record Added'
            });
        }

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

    clearForm(event) {
        event.preventDefault();
        this.setState({
            "id": "",
            'title': '',
            'rating': '',
            'review': '',
            'last_played': '',
            'message': ''
        });

    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState(nextProps.data);
    }

    render() {
        return (
            <div>
                <h1>
                    {this.state.id ? "Update Game" : "Add New Game"}
                </h1>
                <h2>{this.state.message}</h2>
                <form onSubmit={this.addNewGame}>
                    <table>
                        <tr>
                            <td>Title</td>
                            <td>

                                <input className="form-control" type="text" name="title"
                                       onChange={this.setTitle} value={this.state.title}/>
                            </td>
                        </tr>
                        <tr>
                            <td>Rating</td>
                            <td>

                                <select name="rating" id="rating" onChange={this.setRating}
                                        value={this.state.rating}>
                                    <option value="1">1</option>
                                    <option value="2" selected>2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="4">5</option>
                                </select>

                            </td>
                        </tr>
                        <tr>
                            <td>Review</td>
                            <td>
                                        <textarea name="rating" id="rating" cols="50" rows="10"
                                                  onChange={this.setReview}
                                                  value={this.state.review}/>
                            </td>
                        </tr>
                        <tr>
                            <td>Last played</td>
                            <td>

                                <input
                                    type="datetime-local"
                                    name="last_played"
                                    value={this.state.last_played} onChange={this.setLastPlayed}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button onClick={this.addNewGame}>Submit</button>
                            </td>
                            <td>
                                <button onClick={this.clearForm}>Clear</button>
                            </td>
                        </tr>

                    </table>
                </form>
            </div>
        );
    }
}

export default connect(null,
    {addNewGame, updateGame})(AddUpdateGame);

