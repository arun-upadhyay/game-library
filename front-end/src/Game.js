export function Game(props) {
    return (
        <div>
            <span>{props.title}</span>
            <span>{props.rating}</span>
            <span>{props.review}</span>
            <span>{props.last_played}</span>
        </div>
    );
}
