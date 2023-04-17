import { useState, useEffect } from "react";
import { buscar } from "../../api/api";
import styled from "styled-components";
import { colorClaro } from "../../components/UI/variables";

const StyledProductos = styled.section`
    color: ${colorClaro};
    padding: 0 32px;
    box-sizing: border-box;
    margin-top: 32px;

    h2{
        font-size: 2rem;
        font-weight: 600;
        margin-bottom: 24px;
    }

    div{
        display: flex;
        flex-wrap: wrap;
        gap: 32px;
        width: 100%;
        margin-bottom: 32px;

    .item{
        width: 43%;
        
        img{
            width: 100%;
            border-radius: 100%;
            aspect-ratio: 1/1;
        }

        h3{
            font-size: 1.5rem;
            line-height: normal;
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
            <div>
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
            <div>
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
            <div>
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