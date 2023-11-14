import styled from "styled-components";

const Botao1 = styled.button`
   border: 1px solid green;
   background-color: ${(props) => props.variant === "semFundo" ? "transparent" : "green"};
   font-size: 30px;
   color: ${(props) => props.variant === "semFundo" ? "white" : "black"};
   margin: 1em;
   padding: 10px 1em;
`;

export default Botao1;
