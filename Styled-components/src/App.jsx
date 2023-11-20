import "./App.css";
import { Botao1, Botao2, BotaoAnimado, BotaoComAtributo, BotaoHover, LinkComAtributo } from "./components/buttons";
import { Titulo1 } from "./components/texts";

function App() {
   return (
      <div id="App">
         <Titulo1>Aprendendo styled componets</Titulo1>
         <br />
         <div>
            <Botao1>Botao1</Botao1>
            <Botao1 colorido>Botao1</Botao1>
            <Botao2>Botao extendido</Botao2>
            {/*Utilizando o componento como outro Elemento */}
            <Botao1 as={"p"}>Botão reutilizado para texto</Botao1>
            <Botao2 as={"a"}>Botão reutilizado para texto</Botao2>

            {/*Utilizando componento com PseudoClasses */}
            <BotaoHover colorido>Entre com o mouse</BotaoHover>

            {/*Utitlizando componente com attributo */}
            <BotaoComAtributo>Botao de submit</BotaoComAtributo>
            <LinkComAtributo colorido as="a">
               Link
            </LinkComAtributo>

            {/*Utitlizando componente com animacão */}
            <BotaoAnimado>Botao animado</BotaoAnimado>
         </div>
      </div>
   );
}

export default App;
