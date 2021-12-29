
const Button = (props) => {

    return (
        <>
            <button onClick={props.action} className={props.color}>{props.value}</button>
        </>
    )
}

export default Button
