import styled from "styled-components";
import { colorClaro, colorAcento } from "./variables";

export const FlexBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    box-sizing: border-box;
`

export const Button = styled.button`
    border: 2px solid ${colorClaro};
    padding: 8px 32px;
    border-radius: 10px;

    cursor: pointer;

    :hover{
        border-color: ${colorAcento};
        color: ${colorAcento};

        transition: all ease 0.1s;
    }
`