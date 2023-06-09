import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { colorClaro } from "../UI/variables";
import { Button } from "../UI";

import logo from "../../img/logo.svg"
import lupa from "../../img/lupa.svg"

const StyleHeader = styled.header`
    width: 100%;
    height: 90px;
    box-sizing: border-box;

    color: ${colorClaro};

    background: none;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    position: fixed;
    top: 0;

    transition: all ease 0.4s;

    z-index: 1;

    h1{
        display: flex;
        align-items: center;
        justify-content: center;

        span{
            display: none;
        }
    }

    input{
        display: none;

        background: none;
        background-color: rgba(255, 255, 255, 0.2);
        background-image: url(${lupa});
        background-repeat: no-repeat;
        background-position: 95%;

        width: 30%;
        padding: 0.75rem 16px;
        border-radius: 10px;

        &::placeholder{
            color: rgba(238, 238, 238, 0.9);
        }
    }

    @media screen and (min-width: 768px){
    
        h1{
            span{
                margin-left: 8px;
                display: block;
                font-size: 1.8rem;
            }
        }

        input{
            display: block;
        }

        .lupa{
            display: none;
        }
    
}
`

const animateHeader = (e) =>{
    e.preventDefault();
    const header = document.querySelector(".header");

    const windowHeight = window.scrollY;
    header.classList.toggle("header--active", windowHeight>0);
}

window.addEventListener("scroll", animateHeader);

const Header = ({user, handleLog}) =>{

    const [log, setLog] = useState(null)
    
    const logout = (e) => {
        e.preventDefault()
        setLog(null)
        handleLog(null)
    }
        

    return(
        <StyleHeader className="header">
            <h1>
                <Link to={`/`}>
                    <img src={logo} alt="Plus Ultra logo"/>
                </Link>
                <span><b>Plus</b>Ultra</span>
            </h1>

            <input type="text" placeholder="¿Qué deseas buscar?"/>

            <div>
                    {
                        user ? (<Button onClick={(e)=>logout(e)}>Logout</Button>)
                            :( 
                                <Link to={'/login'}><Button>Login</Button></Link>
                                
                            )
                    }
            </div>

            <div className="lupa">
                <img src={lupa} alt="Lupa"/>
            </div>
        </StyleHeader>
    );
}

export default Header;