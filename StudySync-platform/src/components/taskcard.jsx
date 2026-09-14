function taskcard(props) {
    return(
        <div>
            
            <h3>{props.task}</h3>
            <p>{props.status}</p>
        </div>
    );
}
export default taskcard;