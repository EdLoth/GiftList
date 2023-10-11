import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus{
        outline: 0;
        box-shadow: 0 0 0 2px ${props => props.theme['green-500']};
    }

    body{
        background: #121214;
        color: ${props => props.theme['gray-300']};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button{
        font-family: 'Roboto', sans-serif !important;
        font-weight: 400;
        font-size: 1rem;
    }

    body::-webkit-scrollbar {
        width: 8px;               /* width of the entire scrollbar */
    }

    body::-webkit-scrollbar-track {
    background: #121214;        /* color of the tracking area */
    }

    body::-webkit-scrollbar-thumb {
    background-color: white;    /* color of the scroll thumb */
    border-radius: 20px;       /* roundness of the scroll thumb */
    }

    /* Efeitos Fade IN */

    @keyframes fadeTop {
  0% { opacity: 0; transform: translateY(-10%); }
  100% { opacity: 1; transform: translateY(0); }
}

#fadeTop {
  animation: fadeTop 2s ease-in-out;
}


.all-center{
  display: flex;
  justify-content: center;
  align-items: center;
}

@-webkit-keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; } 
  }
  @-moz-keyframes fadeIn {
  0% { opacity: 0;}
  100% { opacity: 1; }
  }
  @-o-keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
  }
  @keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
  }

  

  #fadeIn {
    -webkit-animation: fadeIn 2s ease-in-out;
    -moz-animation: fadeIn 2s ease-in-out;
    -o-animation: fadeIn 2s ease-in-out;
    animation: fadeIn 2s ease-in-out;
    }

`