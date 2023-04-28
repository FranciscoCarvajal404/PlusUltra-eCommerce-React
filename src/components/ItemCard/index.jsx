import { useState, useEffect } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { buscar } from "../../api/api"
import { colorAcento } from "../UI/variables"

const Producto = styled.div`
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
`

const ItemCard = ({tipo}) =>{

    const [productos, setProductos] = useState([])

    useEffect(()=>{
        buscar('/productos', setProductos)
    },['/productos'])

    let i = 0

    return(
        <Producto>
                {
                    productos.map(productos =>{
                        const {id, categoria, titulo, precio, imagen } = productos
                        if(categoria == tipo && i < 6){
                            i ++
                            return(
                                <div key={id} className="item">
                                <Link to={`/productos/${id}`} preventScrollReset={false}>
                                    <img src={imagen}/>
                                </Link>
                                    <h3>{titulo}</h3>
                                    <p>{precio}</p>
                                    <Link to={`/productos/${id}`} preventScrollReset={false} className="link__producto">Ver producto</Link>
                                </div>
                            )
                        }
                    })
                }  
            </Producto>
    )
}

export default ItemCard