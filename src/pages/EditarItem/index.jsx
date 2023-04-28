import { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
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

const EditarItem = () =>{

    const navigate = useNavigate()

    const detalleItem = async (id) =>{
        const response = await fetch(`http://localhost:3000/productos/${id}`);
        return await response.json();
    }

    const InfoItem = async() =>{
        const url = new URL(window.location)
        const id = url.searchParams.get("id")

        detalleItem(id).then( item => {
            const imagen = document.querySelector('#imagen')
            const categoria = document.querySelector('#categoria')
            const titulo = document.querySelector('#titulo')
            const precio = document.querySelector('#precio')
            const descripcion = document.querySelector('#descripcion')

            imagen.value = item.imagen
            categoria.value = item.categoria
            titulo.value = item.titulo
            precio.value = item.precio
            descripcion.value = item.descripcion
        })
    }
    InfoItem()

    const actualizarItem = async (imagen, categoria, titulo, precio, descripcion, id) =>{
        try {
            const response = await fetch(`http://localhost:3000/productos/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ imagen, categoria, titulo, precio, descripcion })
            });
            return console.log(response);
        } catch (response_1) {
            return console.log(response_1);
        }
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        const url = new URL(window.location)
        const id = url.searchParams.get("id")

        const imagen = document.querySelector('#imagen').value
        const categoria = document.querySelector('#categoria').value
        const titulo = document.querySelector('#titulo').value
        const precio = document.querySelector('#precio').value
        const descripcion = document.querySelector('#descripcion').value

        actualizarItem(imagen, categoria, titulo, precio, descripcion, id)

        return navigate('/edit-exitoso')
    }


    return(
        <StyledNewItem>
            <div>
                <form onSubmit={(e) => handleSubmit(e)} >

                    <label htmlFor="imagen">URL de la imagen</label>
                    <input name="imagen" id="imagen"/>

                    <label htmlFor="categoria">Categoría</label>
                    <input name="categoria" id="categoria"/>
                    
                    <label htmlFor="titulo">Nombre del producto</label>
                    <input name="titulo" id="titulo"/>

                    <label htmlFor="precio">Precio</label>
                    <input name="precio" id="precio"/>
                    
                    <label htmlFor="descripcion">Descripción</label>
                    <input name="descripcion" id="descripcion"/>

                    <ButtonNewItem>Editar</ButtonNewItem>
                    
                </form>
            </div>
        </StyledNewItem>
    )
}

export default EditarItem