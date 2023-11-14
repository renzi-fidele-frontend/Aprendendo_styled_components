import "./App.css";
import styled from "styled-components";

const Botao1 = styled.button`
   border: 1px solid green;
   background-color: greenyellow;
   font-size: 30px;
   margin: 1em;
   padding: 10px 1em;
`;

function App() {
   return (
      <div id="App">
         <button>Botão default</button>
         <Botao1>Botao1</Botao1>

      </div>
   );
}

export default App;
