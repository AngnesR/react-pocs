import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <p>
          site do renan
        </p>
      </header >

      <div className="app-content">
        <div className='sidebar'>
          <p>
            sidebar
          </p>

        </div>
        <div className='content'>
          <div className='article'>
            <h3>
              Aposto que você não sabia.....
            </h3>
            <ul>
              <li>É impossível para a maioria das pessoas lamber o próprio cotovelo. (tente!)</li>
              <li>Um crocodilo não consegue colocar sua língua para fora.</li>
              <li>O coração de um camarão está em sua cabeça.</li>
              <li>É fisicamente impossível para os porcos olharem para o céu.</li>
              <li>Acredita-se que o "sexto xeque doente, a sexta ovelha doente" seja o trava-línguas mais difícil da língua inglesa.</li>
              <li>Se você espirrar com muita força, pode fraturar uma costela.</li>
              <li>Usar fones de ouvido por apenas uma hora pode aumentar as bactérias no ouvido em 700 vezes.</li>
              <li>No decorrer de uma vida média, enquanto dorme, você pode comer cerca de 70 insetos variados e 10 aranhas, ou mais.</li>
            </ul>

          </div>
          <div className='article'>
            <h3>
              Piadas curtas engraçadas que garantem uma risada
            </h3>
            <ul>
              <li>Que tipo de exercício os preguiçosos fazem? Agachamentos.</li>
              <li>Como você chama um pônei com tosse? Um cavalinho!</li>
              <li>Qual é a senha de Forrest Gump? 1Forrest1.</li>
              <li>Por que o M&M foi para a escola? Ele queria ser um Smartie.</li>
              <li>O que um semáforo disse para o outro? Pare de olhar para mim, estou mudando!</li>
              <li>O que você chama de ursos sem orelhas? B.</li>
              <li>O que é um pé de comprimento e escorregadio? Um chinelo!</li>
              <li>Por que os franceses comem caracóis? Eles não gostam de fast food!</li>
            </ul>

          </div>
        </div>
      </div>

      <footer className="App-footer">

        <p>
          esse site foi feito no react
        </p>
      </footer>
    </div >
  );
}

export default App;
