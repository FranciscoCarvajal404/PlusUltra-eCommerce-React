import styled from "styled-components";

import login from "../../img/login-bg.jpg"

import { Button } from "../../components/UI";
import { colorClaro } from "../../components/UI/variables";


const StyledNewItem = styled.main`
    background-image: linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5)), url(${login});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    width: 100vw;
    height: 100vh;
    color: ${colorClaro};

    display: flex;
    justify-content: center;
    align-items: center;

    div{
        width: 100%;
        max-width: 1000px;

        padding: 0 32px;

        input{
            background: none;
            background-color: rgba(255, 255, 255, 0.2);
            background-repeat: no-repeat;
            background-position: 95%;

            width: 100%;
            padding: 0.75rem 16px;
            border-radius: 10px;

            margin-bottom: 36px;
            color: ${colorClaro};
        }
    }
`

const ButtonNewItem = styled(Button)`
    width: 100%;
`

const NewItem = () =>{
    return(
        <StyledNewItem>
            <div>
                <form>

                    <label htmlFor="user">URL de la imagen</label>
                    <input name="user" id="user"/>

                    <label htmlFor="user">Categoría</label>
                    <input name="user" id="user"/>
                    
                    <label htmlFor="user">Nombre del producto</label>
                    <input name="user" id="user"/>

                    <label htmlFor="user">Precio</label>
                    <input name="user" id="user"/>
                    
                    <label htmlFor="user">Descripción </label>
                    <input name="user" id="user"/>

                    <ButtonNewItem>Agregar</ButtonNewItem>
                    
                </form>
            </div>
        </StyledNewItem>
    );
}

export default NewItem