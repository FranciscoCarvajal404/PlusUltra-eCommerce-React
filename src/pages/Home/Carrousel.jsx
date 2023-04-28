import styled from "styled-components";
import { Link } from "react-router-dom";
import {colorClaro} from "../../components/UI/variables"
import { Button } from "../../components/UI";

import telescopio from "../../img/telescopio.webp"
import binoculares from "../../img/binoculares.webp"
import microscopio from "../../img/microscopio.webp"

const StyledCarrousel = styled.section`
    display: flex;
    flex-wrap: nowrap;
    overflow-x: scroll;
    overflow-y: hidden;
    width: 100%;

    padding: 0 64px;

    gap: 128px;
    box-sizing: border-box;
    
    .categorias__grupo{
        display: flex;
        align-items: center;

        width: 80%;
        margin-bottom: 32px;
        color: ${colorClaro};
        
        img{
            width: 40%;
            min-width: 200px;
            margin-right: 16px;
        }

        div{
            width: 100%;

            display: flex;
            flex-direction: column;
            line-height: normal;

            h2{
                font-weight: 600;
                font-size: 3rem;
                margin-bottom: 8px;
            }
        }

            h3{
                font-size: 1rem;
                margin-bottom: 16px;
            }
    }
    
`

const Carrousel = () =>{
    return(
        <StyledCarrousel>
            <div className="categorias__grupo">
                <img src={telescopio} alt=""/>
                <div>
                    <h2>Telescopios</h2>
                    <h3>Descubre el cosmos y el espacio</h3>
                    <Link to='/telescopios'>
                        <Button>Ver productos</Button>
                    </Link>
                    
                </div>
            </div>
                
            <div className="categorias__grupo">
                <img src={binoculares} alt=""/>
                <div>
                    <h2>Binoculares</h2>
                    <h3>Explora el cielo y las estrellas</h3>
                    <Link to='/binoculares'>
                        <Button>Ver productos</Button>
                    </Link>
                </div>
            </div>
            
            <div  className="categorias__grupo">
                <img src={microscopio} alt=""/>
                <div>
                    <h2>Microscopios</h2>
                    <h3>Conoce el reino microscopico</h3>
                    <Link to='/microscopios'>
                        <Button>Ver productos</Button>
                    </Link>
                </div>
            </div>
        </StyledCarrousel>
    );
}

export default Carrousel