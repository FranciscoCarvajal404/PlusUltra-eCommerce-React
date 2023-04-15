import styled from "styled-components";

const StyleHeader = styled.header`
    width: 100%;
    height: 70px;
    box-sizing: border-box;

    background: none;

    display: flex;
    align-items: center;
    justify-content: space-around;

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
        background-image: url(src/img/lupa.svg);
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
                display: block;
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

const Header = () =>{
    return(
        <StyleHeader>
            <h1>
                <img src="src/img/logo.svg" alt="Plus Ultra logo"/>
                <span><b>Plus</b>Ultra</span>
            </h1>

            <input type="text" placeholder="¿Qué deseas buscar?"/>

            <div>
                <a href="#">
                    <button>Login</button>
                </a>
            </div>

            <div className="lupa">
                <img src="src/img/lupa.svg" alt="Lupa"/>
            </div>
        </StyleHeader>
    );
}

export default Header;