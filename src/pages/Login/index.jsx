import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import login from "../../img/login-bg.jpg"
import { Button } from "../../components/UI";

import { colorClaro } from "../../components/UI/variables";
import axios from "axios";

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

const Login = ({handleLog}) =>{

    const [user, setUser] = useState(null)
    const [log, setLog] = useState(null)

    const handleInput = (e) =>{
        setUser({...user, [e.target.name]: e.target.value})
    }

    const url = 'http://localhost:3000/usuarios'
    const navigate = useNavigate()

    const loginValidation = async (e) =>{
        e.preventDefault()
        try {
            const response = await axios.get(url)
            for (let i = 0; i < response.data.length; i++) {
                if (JSON.stringify(user) === JSON.stringify(response.data[i])) {
                    console.log("adelante");
                    setLog(user)
                    setUser(user)
                    handleLog(user)
                    return navigate('/productos')
                }else{
                    console.log("incorrecto");
                }
            }
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <StyledLogin>
            <div>
                <form onSubmit={(e)=>loginValidation(e)}>

                    <label htmlFor="usuario">Usuario</label>
                    <input name="usuario" id="usuario" type="text" onChange={(e)=>handleInput(e)}/>

                    <label htmlFor="password">Contraseña</label>
                    <input name="password" id="password" type="password" onChange={(e)=>handleInput(e)}/>

                    <ButtonLogin>Ingresar</ButtonLogin>
                </form>
            </div>
        </StyledLogin>
    );
}

export default Login