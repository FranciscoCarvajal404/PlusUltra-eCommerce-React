import { useState } from "react";
import styled from "styled-components";
import axios from "axios";

import login from "../../img/login-bg.jpg"

import { Button } from "../../components/UI";
import { colorClaro } from "../../components/UI/variables";

const StyledNewItem = styled.main`
    background-image: linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5)), url(${login});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    width: 100vw;
    height: 100vh;
    color: ${colorClaro};

    display: flex;
    justify-content: center;
    align-items: center;

    div{
        width: 100%;
        max-width: 1000px;

        padding: 0 32px;

        input{
            background: none;
            background-color: rgba(255, 255, 255, 0.2);
            background-repeat: no-repeat;
            background-position: 95%;

            width: 100%;
            padding: 0.75rem 16px;
            border-radius: 10px;

            margin-bottom: 36px;
            color: ${colorClaro};
        }
    }
`

const ButtonNewItem = styled(Button)`
    width: 100%;
`

const NewItem = () =>{

    const [item, setItem] = useState({
        id: '',
        imagen: "",
        categoria: "",
        titulo: "",
        descripcion: "",
        precio: ""
    })

    const handleInput = (e) =>{
        setItem({...item, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault()

        axios({
            method: 'post',
            url: 'http://localhost:3000/productos',
            data: {
                id: item.id,
                imagen: item.imagen,
                categoria: item.categoria,
                titulo: item.titulo,
                descripcion: item.descripcion,
                precio: item.precio,
            }
        })
    }

    return(
        <StyledNewItem>
            <div>
                <form onSubmit={(e) => handleSubmit(e)} data-form>

                    <label htmlFor="imagen">URL de la imagen</label>
                    <input name="imagen" id="imagen" onChange={(e)=>handleInput(e)}/>

                    <label htmlFor="categoria">Categoría</label>
                    <input name="categoria" id="categoria" onChange={(e)=>handleInput(e)}/>
                    
                    <label htmlFor="titulo">Nombre del producto</label>
                    <input name="titulo" id="titulo" onChange={(e)=>handleInput(e)}/>

                    <label htmlFor="precio">Precio</label>
                    <input name="precio" id="precio" onChange={(e)=>handleInput(e)}/>
                    
                    <label htmlFor="descripcion">Descripción</label>
                    <input name="descripcion" id="descripcion" onChange={(e)=>handleInput(e)}/>

                    <ButtonNewItem>Agregar</ButtonNewItem>
                    
                </form>
            </div>
        </StyledNewItem>
    );
}

export default NewItem