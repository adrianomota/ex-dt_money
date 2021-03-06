import styled from 'styled-components'

export const Container = styled.header`
  background-color: var(--blue)
`
export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1120px; /* para o logo e o botao ficarem alinahados ao centro */
  margin: 0 auto;
  padding: 2rem 1rem 12rem; /*1rem nas laterais 10rem no top e embaixo = 1rem = font-size do root 16px*/


  button {
    font-size: 1rem;
    color: #FFF;
    background: var(--blue-light);
    border: 0;
    padding: 0 2rem; /* 32px na direta e na esquerda */
    border-radius: 0.25rem;
    height: 3rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9)
    }
  }
`
