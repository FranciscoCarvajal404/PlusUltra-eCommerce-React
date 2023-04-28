import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiFillDelete, AiFillEdit } from "react-icons/ai"
import { buscar } from "../../api/api";

import { colorAcento, colorClaro, colorSecundario} from "../../components/UI/variables";
import {Button} from "../../components/UI"

const ProductoBox = styled.main`
    display: flex;
    flex-direction: column;
    color: ${colorClaro};

    padding: 122px 32px 0 32px;

    .titulo{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 32px;

        h1{
            font-size: 2rem;
            font-weight: bold;
        }
    }
`

const ButtonProductos = styled(Button)`
    color: ${colorClaro};
`

const StyledProducto = styled.div`
        display: flex;
        flex-wrap: wrap;
        gap: 40px;
        width: 100%;
        margin-bottom: 72px;

        .item{
            position: relative;
            flex: 1 0 43%;
            box-sizing: border-box;

            .trash{
                z-index: 1;
                position: absolute;
                top: 5%;
                right: 20%;
                width: 10%;
                height: auto;

                :hover{
                    filter: invert(60%) sepia(96%) saturate(729%) hue-rotate(351deg) brightness(101%) contrast(98%);
                    transition: all ease 0.2s;
                    cursor: pointer;
                }
            }

            .edit{
                z-index: 1;
                position: absolute;
                top: 5.1%;
                right: 5%;
                width: 10%;
                height: auto;
                :hover{
                filter: invert(60%) sepia(96%) saturate(729%) hue-rotate(351deg) brightness(101%) contrast(98%);
                    transition: all ease 0.2s;
                    cursor: pointer;
                }
            }
        }

            
            img{
                background-color: black;
                opacity: 0.6;
                width: 100%;
                border-radius: 5px;
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

    const eliminarItem = async (id) =>{
        console.log("eliminado", id);
        try {
            const response = await fetch(`http://localhost:3000/productos/${id}`, {
                method: "DELETE"
            });
            const newItems = productos.filter((item) => item.id != id)
            setProductos(newItems)
            return console.log(response);
        } catch (e) {
            return console.log(e);
        }
    }

    return(
        <ProductoBox>
            <div className="titulo">
                <h1>Todos los productos</h1>
                <Link to={`/add-item`}>
                    <ButtonProductos>Agregar producto</ButtonProductos>
                </Link>
                
            </div>
            <StyledProducto>

                {
                    productos.map(producto =>{
                        const {id, imagen, titulo, precio} = producto
                        return(
                            <div key={id} className="item">
                                <AiFillDelete className="trash" onClick={()=>eliminarItem(id)}/>
                                <Link to={`/edit-item?id=${id}`}>
                                    <AiFillEdit className="edit"/>
                                </Link>
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
        </ProductoBox>
    );
}

export default Productos