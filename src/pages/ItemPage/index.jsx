import { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import { buscar } from "../../api/api";

import { colorClaro } from "../../components/UI/variables";

const StyledItemPage = styled.main`
    min-height: 100vh;
    width: 100vw;

    display: flex;
    justify-content: center;
    align-items: flex-start;

    padding-top: 122px;

    color: ${colorClaro};
    .item{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;

        margin-bottom: 32px;
        padding: 0 32px;
        
        img{
        width: 100%;
        max-width: 500px;
        aspect-ratio: 1/1;
        align-self: center;
        margin-bottom: 16px;
        border-radius: 20px;
        }

        .info{
            width: 50%;
            display: flex;
            flex-direction: column;
            
            h1{

            font-size: 1.5rem;
            line-height: normal;
            margin-bottom: 16px
        }

            h2{
                font-size: 1.2rem;
                font-weight: bold;
                margin-bottom: 16px
            }

            p{
                text-align: left;
                font-size: 1rem;
            }
        }
    }

    @media screen and (min-width: 768px){
        min-height:auto;
        .item{
            flex-direction: row;
            justify-content: space-between;
            flex: 1 0 50%;

            text-align: right;

            img{
                width: 50%;
            }
        }

        .info{
            align-items: flex-end;
        }
    }
    
`


const ItemPage = () =>{

    const [post, setPost] = useState({})

    const {id} = useParams()

    useEffect(()=>{
        buscar(`/productos/${id}`, setPost)
    },[id])

    return(
        <StyledItemPage>
            <div className="item">
                <img src={post.imagen}/>
                <div className="info">
                    <h1>{post.titulo}</h1>
                    <h2>{post.precio}</h2>
                <p>{post.descripcion}</p>
                </div>
                
            </div>
        </StyledItemPage>
    );
}

export default ItemPage