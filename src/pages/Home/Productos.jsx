import { useState, useEffect } from "react";
import { buscar } from "../../api/api";
import styled from "styled-components";
import { colorClaro } from "../../components/UI/variables";

const StyledProductos = styled.section`
    color: ${colorClaro};
    padding: 0 32px;
    width: 100%;
    height: fit-content;
    box-sizing: border-box;
    margin-top: 32px;
    

    h2{
        font-size: 2rem;
        font-weight: 600;
        margin-bottom: 32px;
    }

    .producto{
        display: flex;
        flex-wrap: wrap;
        gap: 40px;
        width: 100%;
        margin-bottom: 32px;

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


    return(
        <StyledProductos>
            <h2>Telescopios</h2>
            <div className="producto">
                {
                    productos.map(productos =>{
                        const {id, categoria, titulo, precio, imagen } = productos
                        if(categoria == "telescopios"){
                            return(
                                <div key={id} className="item">
                                    <img src={imagen}/>
                                    <h3>{titulo}</h3>
                                    <p>{precio}</p>
                                </div>
                            )
                        }
                    })
                }  
            </div>
            
            <h2>Binoculares</h2>
            <div div className="producto">
            {
                    productos.map(productos =>{
                        const {id, categoria, titulo, precio, imagen } = productos
                        if(categoria == "binoculares"){
                            return(
                                <div key={id} className="item">
                                    <img src={imagen}/>
                                    <h3>{titulo}</h3>
                                    <p>{precio}</p>
                                </div>
                            )
                        }
                    })
                }  
            </div>
            
            <h2>Microscopios</h2>
            <div div className="producto">
            {
                    productos.map(productos =>{
                        const {id, categoria, titulo, precio, imagen } = productos
                        if(categoria == "microscopios"){
                            return(
                                <div key={id} className="item">
                                    <img src={imagen}/>
                                    <h3>{titulo}</h3>
                                    <p>{precio}</p>
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