import styled, { keyframes } from "styled-components";

export const Botao1 = styled.button`
   border: 1px solid yellowgreen;
   background-color: ${(props) => (props.colorido ? "yellowgreen" : "transparent")};
   font-size: 30px;
   color: ${(props) => (props.colorido ? "white" : "black")};
   margin: 1em;
   padding: 10px 1em;
   text-align: center;
`;

//  Extendendo o estilo para outro componente
export const Botao2 = styled(Botao1)`
   box-shadow: 1px 1px 5px pink;
`;

// Utitizando Pseudo-classses
export const BotaoHover = styled(Botao2)`
   &:hover {
      cursor: pointer;
   }
`;

// Utilizando attributos
export const BotaoComAtributo = styled(Botao1).attrs({
   type: "submit",
})``;

export const LinkComAtributo = styled(Botao2).attrs({
   href: "/#Leitor",
})``;

// Utilizando animações
export const girar = keyframes`
from {opacity: 0} to {opacity: 1}`;

export const BotaoAnimado = styled(Botao2)`
transition: opacity 0.5s ease-in-out ;
   animation: ${girar} 0.5s ease-in-out;
`
