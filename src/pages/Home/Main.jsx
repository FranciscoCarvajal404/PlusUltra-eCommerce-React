import styled from "styled-components";
import { colorClaro } from "../../components/UI/variables";
import { Button } from "../../components/UI"

import mainBg from "../../img/main-bg.jpg"

const StyledMain = styled.main`
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${mainBg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    box-sizing: border-box;

    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 35px;

    color: ${colorClaro};

    line-height: normal;

    width: 100%;
    height: 100vh;

    margin-bottom: 32px;

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

const ButtonMain = styled(Button)`
    padding: 16px 32px;
`

const Main = () =>{
    return(
        <StyledMain>
            <div>
                <h2>Siempre hay algo más allá</h2>
                <h3>30% de descuento en telescopios seleccionados</h3>
                <ButtonMain>Ver telescopios</ButtonMain>
            </div>
        </StyledMain>
    );
}

export default Main