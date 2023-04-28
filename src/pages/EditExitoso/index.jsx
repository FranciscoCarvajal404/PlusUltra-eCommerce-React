import styled from "styled-components"
import { useNavigate } from "react-router-dom";
import {AiFillCheckCircle} from 'react-icons/ai';
import { colorClaro } from "../../components/UI/variables";

import { Button } from "../../components/UI";

const StyledEdit = styled.main`
    width: 100%;
    height: 100vh;

    color: ${colorClaro};

    display: flex;
    align-items: center;
    justify-content: center;

    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        width: 80%;
        max-width: 1000px;
        height: 100%;

        .check{
            width: 80%;
            height: auto;
            filter: invert(60%) sepia(10%) saturate(2792%) hue-rotate(68deg) brightness(97%) contrast(91%);
        }

        h1{
            font-weight: bold;
            font-size: 3rem;
            line-height: normal;
            text-align: center;
        }
    }
`

const ButtonEdit = styled(Button)`
    color: ${colorClaro};
    width: 100%;

    margin-top: 32px;
`

const EditExitoso = () =>{

    const navigate = useNavigate()

    return(
        <StyledEdit>
            <div>
                <AiFillCheckCircle className="check"/>
                <h1>Producto editado de manera exitosa</h1>
                <ButtonEdit onClick={(e)=>{
                    e.preventDefault()
                    return navigate('/productos')
                }}>Regresar al menú de productos</ButtonEdit>
            </div>
        </StyledEdit>
    )
}

export default EditExitoso