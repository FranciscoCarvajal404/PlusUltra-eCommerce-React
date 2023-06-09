import { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import { buscar } from "../../api/api";

import { colorClaro } from "../../components/UI/variables";

const StyledItemPage = styled.main`
    min-height: 100vh;
    width: 100%;

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

        width: 100%;
        max-width: 1054px;
        
        img{
        width: 100%;
        max-width: 800px;
        aspect-ratio: 1/1;
        align-self: center;
        margin-bottom: 16px;
        border-radius: 20px;
        }

        .info{
            width: 100%;
            display: flex;
            flex-direction: column;
            
            h1{

            font-size: 2rem;
            line-height: normal;
            margin-bottom: 16px
        }

            h2{
                font-size: 1.5rem;
                font-weight: bold;
                margin-bottom: 32px
            }

            p{
                font-size: 1.3rem;
                line-height: normal;
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
                width: 100%;
                margin-right: 64px;
            }
        }

        .info{
            align-items: flex-end;
            p{
                text-align: right;
            }
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