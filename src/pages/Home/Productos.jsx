import { useState, useEffect } from "react";
import { buscar } from "../../api/api";
import styled from "styled-components";
import { colorClaro, colorAcento } from "../../components/UI/variables";

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

    .producto{
        display: flex;
        flex-wrap: wrap;
        gap: 40px;
        width: 100%;
        margin-bottom: 72px;

    .link__producto{
        margin-top: 16px;
        font-size: 1.1rem;
        font-weight: bold;

        cursor: pointer;
        transition: all ease 0.1s;

        :hover{
            color: ${colorAcento};
            font-size: 1.2rem;
            transition: all ease 0.1s;
        }
    }

        .item{
            flex: 1 0 43%;
            box-sizing: border-box;

            :nth-child(n+5){
            display: none;
        }

            
            img{
                width: 100%;
                border-radius: 20px;
                aspect-ratio: 1/1;
                margin-bottom: 16px;
            }

            h3{
                font-size: 1.5rem;
                line-height: normal;
                margin-bottom: 16px
            }

            p{
                font-size: 1.2rem;
                font-weight: bold;
            }
        }

    @media screen and (min-width: 768px){
        .item{
            flex: 1 0 20%;
        }
    }

    @media screen and (min-width: 1024px){
        .item{
            flex: 1 0 13%;
            :nth-child(n+5){
            display: block;
        }
        }
    }
        
}
`


const Productos = ({url}) =>{

    const [productos, setProductos] = useState([])

    useEffect(()=>{
        buscar(url, setProductos)
    },[url])

    let i = 0;
    let j = 0;
    let k = 0;
    return(
        <StyledProductos>
            <div className="encabezado">
                <h2>Telescopios</h2>
                <a href="#">Ver más 🠚</a>
            </div>
            
            <div className="producto">
                {
                    productos.map(productos =>{
                        const {id, categoria, titulo, precio, imagen } = productos
                        if(categoria == "telescopios" && i < 6){
                            i ++
                            return(
                                <div key={id} className="item">
                                    <img src={imagen}/>
                                    <h3>{titulo}</h3>
                                    <p>{precio}</p>
                                    <a className="link__producto">Ver producto</a>
                                </div>
                            )
                        }
                    })
                }  
            </div>
            
            <div className="encabezado">
                <h2>Binoculares</h2>
                <a href="#">Ver más 🠚</a>
            </div>
            <div div className="producto">
            {
                    productos.map(productos =>{
                        const {id, categoria, titulo, precio, imagen } = productos
                        if(categoria == "binoculares" && j < 6){
                            j++
                            return(
                                <div key={id} className="item">
                                    <img src={imagen}/>
                                    <h3>{titulo}</h3>
                                    <p>{precio}</p>
                                    <a className="link__producto">Ver producto</a>
                                </div>
                            )
                        }
                    })
                }  
            </div>
            
            <div className="encabezado">
                <h2>Microscopio</h2>
                <a href="#">Ver más 🠚</a>
            </div>
            <div div className="producto">
            {
                    productos.map(productos =>{
                        const {id, categoria, titulo, precio, imagen } = productos
                        if(categoria == "microscopios" && k < 6){
                            k++
                            return(
                                <div key={id} className="item">
                                    <img src={imagen}/>
                                    <h3>{titulo}</h3>
                                    <p>{precio}</p>
                                    <a className="link__producto">Ver producto</a>
                                </div>
                            )
                        }
                    })
                }  
            </div>
        </StyledProductos>
    );
}

export default Productos