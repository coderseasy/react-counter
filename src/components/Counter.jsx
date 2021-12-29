import Button from "./Button";
import { useState } from "react";
const Counter = (props) => {
    //variables de estado
    const [contador, setContador] = useState(props.inicio);
    
    const aumentarContador = () => {
        setContador(contador+1);
    };
    const disminuirContador = () => {
        setContador(contador-1);
    };
    return (
        <>
            <h2>contador: {contador}</h2>
            <Button color="btn btn-success" action={aumentarContador} value="+"/>
            <Button color="btn btn-danger" action={disminuirContador} value="-"/>
        </>
    )
}

export default Counter
