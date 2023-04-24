import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { buscar } from "../../api/api";

import { colorAcento, colorClaro } from "../../components/UI/variables";

const StyledProducto = styled.main`
        display: flex;
        flex-wrap: wrap;
        gap: 40px;
        width: 100%;
        margin-bottom: 72px;
        padding: 122px 32px 0 32px;

        color: ${colorClaro};

        .item{
            flex: 1 0 43%;
            box-sizing: border-box;
        }

            
            img{
                width: 100%;
                border-radius: 20px;
                aspect-ratio: 1/1;
                margin-bottom: 16px;
            }

            h2{
                font-size: 1.5rem;
                line-height: normal;
                margin-bottom: 16px
            }

            h3{
                font-size: 1.2rem;
                font-weight: bold;
            }
        
        @media screen and (min-width: 768px){
            .item{
                flex: 1 0 20%;
            }
        }

        @media screen and (min-width: 1024px){
            .item{
                flex: 1 0 16%;
            }
        }
`

const Productos = () =>{

    const [productos, setProductos] = useState([])

    useEffect(()=>{
        buscar('/productos', setProductos)
    },['/productos'])

    return(
        <StyledProducto>
            {
                productos.map(producto =>{
                    const {id, imagen, titulo, precio} = producto
                    return(
                        <div key={id} className="item">
                            <Link to={`/productos/${id}`}>
                                <img src={imagen}/>
                            </Link>
                            <h2>{titulo}</h2>
                            <h3>{precio}</h3>
                        </div>
                    )
                })
            }
        </StyledProducto>
    );
}

export default Productos