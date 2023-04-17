import styled from "styled-components";
import {colorClaro} from "../../components/UI/variables"

const StyledCarrousel = styled.section`
    display: flex;
    flex-wrap: nowrap;
    overflow-x: scroll;
    overflow-y: hidden;
    width: 100%;

    gap: 64px;
    box-sizing: border-box;
    
    .categorias__grupo{
        display: flex;
        align-items: center;

        width: 80%;
        margin-bottom: 32px;
        color: ${colorClaro};
        
        img{
            min-width: 100px;
            max-width: 200px;
            margin-right: 8px;
        }

        div{
            width: 100%;

            display: flex;
            flex-direction: column;

            h2{
                font-weight: 600;
                font-size: 2rem;
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
                <img src="src/img/telescopio.webp" alt=""/>
                <div>
                    <h2>Telescopios</h2>
                    <h3>Descubre el cosmos y el espacio</h3>
                    <button>Ver productos</button>
                </div>
            </div>
                
            <div className="categorias__grupo">
                <img src="src/img/binoculares.webp" alt=""/>
                <div>
                    <h2>Binoculares</h2>
                    <h3>Explora el cielo y las estrellas</h3>
                    <button>Ver productos</button>
                </div>
            </div>
            
            <div  className="categorias__grupo">
                <img src="src/img/microscopio.webp" alt=""/>
                <div>
                    <h2>Microscopios</h2>
                    <h3>Conoce el reino microscopico</h3>
                    <button>Ver productos</button>
                </div>
            </div>
        </StyledCarrousel>
    );
}

export default Carrousel