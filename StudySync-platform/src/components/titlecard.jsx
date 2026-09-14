function titlecard(props) {
    return (
        <div className="title-card">
            <h1>{props.title}</h1>
            <p>{props.subtitle}</p>
        </div>
    );
}

export default titlecard;
