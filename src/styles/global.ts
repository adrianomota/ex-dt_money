import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #F8F2F5;
        --red: #e52e4d;
        --blue: #5429cc;
        --green: #33cc95;
        --blue-light: #6933ff;

        --text-title: #363f5f;
        --text-body: #969cb3;
        --shape: #ffffff;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    /* font-size: 16px no (Desltop) */
    /* Rem = font-size = 16px */
    /* Necessário utilizar rem pois ajuda no redimensionamento do documento HTML
       para o usuário final dependendo do tamanho de tela que ele utilizar
    */
    html {
        @media (max-width: 1080px) {
            font-sie: 93.75%;  /* 15px */
        }

        @media (max-width: 720px) {
            font-size: 87.5%; /* 14px */
        }
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, button, input, textarea { /* esses elementos não importam a font por padrão */
        font-family: 'Poppins', sans-serif;
        font-weight: 400;

        /*por padrão a font poppins é 400  e no HTMlé 500  */
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .react-modal-overlay {
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0, 0, 0, 0.5);
      position: fixed;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
    }

    .react-modal-content {
      width: 100%;
      max-width: 576px;
      background: var(--background);
      padding: 3rem;
      position: relative;
      border-radius: 0.24rem;
    }

    .react-modal-close {
      position: absolute;
      right: 1.5rem;
      top: 1.5rem;
      border: 0;
      background: transparent;

      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.8);
      }
    }
`
