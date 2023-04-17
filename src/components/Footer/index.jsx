import styled from "styled-components";
import { colorClaro, colorSecundario } from "../UI/variables";

const StyledFooter = styled.footer`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: ${colorSecundario};
    color: ${colorClaro};

    padding: 16px;

    .logo{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;

        margin-bottom: 16px;

        img{
            filter: sepia(5%) saturate(498%) hue-rotate(326deg) brightness(118%) contrast(87%);
        }
    }

    .footer__div{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        h2{
        margin-bottom: 16px;

        font-size: 1.1rem;
        font-weight: 400;
        }
    }

    .redes{
        display: flex;
        gap: 16px;

        .redes__img{
            filter: invert(100%) sepia(5%) saturate(498%) hue-rotate(326deg) brightness(118%) contrast(87%);

            &:hover{
                filter: invert(59%) sepia(87%) saturate(491%) hue-rotate(352deg) brightness(102%) contrast(98%);
                transition: all ease 0.1s;
            }
        }
}
`

const Footer = () =>{
    return(
        <StyledFooter>
            <div className="logo">
                <img src="src/img/logo.svg" alt="PlusUltra logo"/>
                <span><b>Plus</b>Ultra</span>
            </div>

            <div className="footer__div">
                <h2>Nosotros</h2>
                <h2>Politica de privacidad</h2>
                <h2>Programa de fidelidad</h2>
                <h2>Nuestras tiendas</h2>
                <h2>Quiero ser franquiciatario</h2>
                <h2>Anuncie aquí</h2>
            </div>

            <div className="redes">
                <a href="https://github.com/FranciscoCarvajal404" target="_blank"><img src="src/img/github.svg" alt="GitHub" className="redes__img"/></a>
                <a href="https://www.linkedin.com/in/francisco-carvajal-villegas/" target="_blank"><img src="src/img/linkedin.svg" alt="LinkedIn" className="redes__img"/></a>
            </div>
        </StyledFooter>
    );
}

export default Footer;