import styled from "styled-components";

const StyledMain = styled.main`
    background-image:  url(src/img/main-bg.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    box-sizing: border-box;

    width: 100%;
    height: 100vh;

    margin-bottom: 64px;

    div{
        width: 100%;
        height: 100%;
        box-sizing: border-box;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;

        text-align: left;

        padding: 0 32px;

        h2{
            font-weight: 600;
            font-size: 3rem;
            margin-bottom: 16px;
        }

        h3{
            font-size: 1.5rem;
            margin-bottom: 16px;
        }
    }
`

const Main = () =>{
    return(
        <StyledMain>
            <div>
                <h2>Siempre hay algo más allá *(WIP)*</h2>
                <h3>30% de descuento en telescopios seleccionados</h3>
                <button>Ver telescopios</button>
            </div>
        </StyledMain>
    );
}

export default Main