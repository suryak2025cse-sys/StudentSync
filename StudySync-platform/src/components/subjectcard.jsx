function subjectcard(props) {
    return(
        <div>
            <h3>{props.subject}</h3>
            <p>{props.progress}</p>
        </div>
    );
}
export default subjectcard;