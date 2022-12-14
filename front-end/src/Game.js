export function Game(props) {
    return (
        <tr>
            <td>{props.title}</td>
            <td>{props.rating}</td>
            <td>{props.review}</td>
            <td>{props.last_played}</td>
            <td>Edit</td>
            <td>Delete</td>
        </tr>
    );
}
