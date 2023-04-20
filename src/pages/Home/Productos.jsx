import styled from "styled-components";
import { colorClaro, colorAcento } from "../../components/UI/variables";

import ItemCard from "../../components/ItemCard";

const StyledProductos = styled.section`
    color: ${colorClaro};
    padding: 0 32px;
    width: 100%;
    height: fit-content;
    box-sizing: border-box;
    margin-top: 64px;
    

    h2{
        font-size: 3rem;
        font-weight: 600;
        margin-bottom: 32px;
    }

    .encabezado{
        display: flex;
        justify-content: space-between;

        a{
            font-size: 1rem;
            color: ${colorAcento};
            transition: all ease 0.1s;

            :hover{
            font-size: 1.1rem;
            transition: all ease 0.1s;
        }
        }
    }
`


const Productos = () =>{

    return(
        <StyledProductos>
            <div className="encabezado">
                <h2>Telescopios</h2>
                <a href="#">Ver más 🠚</a>
            </div>
            <ItemCard tipo='telescopios'/>

            <div className="encabezado">
                <h2>Binoculares</h2>
                <a href="#">Ver más 🠚</a>
            </div>
            <ItemCard tipo='binoculares'/>

            <div className="encabezado">
                <h2>Microscopios</h2>
                <a href="#">Ver más 🠚</a>
            </div>
            <ItemCard tipo='microscopios'/>
            
        </StyledProductos>
    );
}

export default Productos