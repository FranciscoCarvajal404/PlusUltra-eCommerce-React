import styled from "styled-components";
import login from "../../img/login-bg.jpg"
import { Button } from "../../components/UI";

import { colorClaro } from "../../components/UI/variables";

const StyledLogin = styled.main`
    background-image: linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5)), url(${login});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    div{

        width: 100%;
        padding: 0 32px;

        form{
            label{
                color: ${colorClaro};
            }
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
    }
`

const ButtonLogin = styled(Button)`
    color: ${colorClaro};
    width: 100%;
`

const loginValidation = (e) =>{
    e.preventDefault()
    location.replace(`/productos`)
}

const Login = () =>{
    return(
        <StyledLogin>
            <div>
                <form onSubmit={(e)=>loginValidation(e)}>

                    <label htmlFor="user">Usuario</label>
                    <input name="user" id="user"/>

                    <label htmlFor="user">Contraseña</label>
                    <input name="user" id="user"/>

                    <ButtonLogin>Ingresar</ButtonLogin>
                </form>
            </div>
        </StyledLogin>
    );
}

export default Login