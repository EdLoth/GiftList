import { styled } from "styled-components";

import bg from '../../../../assets/bg.jpg'


export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1440px;
    margin: auto;

    width: 100%;
    height: 100vh;
    padding-top: 10px;
`

export const ContentForm = styled.div`
    background: #202024;
    width: 80%;
    border-radius: 28px;
`;

export const Background = styled.div`
    background-image: url(${bg});
    background-size: cover; /* Você pode ajustar esta propriedade conforme necessário */
    background-repeat: no-repeat;
    background-position: center center;
`;

export const FormContent = styled.form`
 display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 80%;
    margin: 0 auto;
`

export const Title = styled.h1`
    font-size: 2rem;
    color: white;
    font-weight: bold;
    font-family: 'Baloo 2', cursive;

`
export const FormInputAndLabel = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f5f5f5;
    padding: 0px 10px;
    border-radius: 8px;
    transition: 0.5s;
    border: 2px solid #f5f5f5; /* Estilo da borda da div quando o input ou seus filhos têm foco */

    margin-top: 12px;

    &:focus-within {
       border: 2px solid #eb8a21; /* Estilo da borda da div quando o input ou seus filhos têm foco */
   }

    & input{
        background: transparent;
        width: 100%;
        border: none;
        padding: 6px;
        border-radius: 8px;
        margin: 6px 0px;
        font-size: 16px;
        padding-left: 12px;
        outline: none;
        text-decoration: none;
    }

    & input:focus {
        border: none; /* Cor da borda quando o input está em foco */
        outline: none;
        text-decoration: none;
        box-shadow: none;
    }

    & svg {
        fill: #121214;
    }

    &:focus-within {
       border: 2px solid #eb8a21; /* Estilo da borda da div quando o input ou seus filhos têm foco */

       & svg {
           fill: #eb8a21; /* Cor do ícone quando o input ou seus filhos têm foco */
       }
   }
`

export const ButtonRegister = styled.button`
        width: 100%;
        background-color: #a65f13;
        border-radius: 8px;
        padding: 12px 0px;
        border: none;
        margin-top: 16px;
        color: white;
        transition: all 0.5s;

        &:hover {
            background-color: #eb8a21;
        }

        &:focus {
            background-color: #eb8a21;
        }
`

export const LabelLogin = styled.span`
    color: white;
    margin-top: 12px;
    font-size: 16px;
    font-weight: 300;

    & a {
        color: #a65f13;
        transition: all 0.5s;
        font-weight: 600;
        text-decoration: none;
        font-family: 'Baloo 2', cursive;
        font-size: 18px;
    }

    & a:hover {
            color: #eb8a21;
        }

    & a:focus {
            color: #eb8a21;
        }
` 
