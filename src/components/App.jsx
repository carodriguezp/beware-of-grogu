import '../style/App.scss';
import { useState } from 'react';

function App() {


  const [arrayCookies, setCookies] = useState(['🍪', '🍪', '🍪']);
  const [arrayEgg, setEgg] = useState(['🥚', '🥚', '🥚']);
  const [arrayFrog, setFrog] = useState(['🐸', '🐸', '🐸']);
  // const [goods, setGoods] = useState([arrayCookies, arrayEgg, arrayFrog]);

  const [groguMove, setGroguMove] = useState(0);
  const [diceResult, setDiceResult] = useState(0);
  const [gameResult, setGameResult] = useState('');


  const rollDice = () => {
    const diceNumber = Math.ceil(Math.random() * 4);

    if (diceNumber === 1) {
      setCookies(arrayCookies.slice(1));
      setGameResult('Se ha descargado una galleta');
    }
    else if (diceNumber === 2) {
      setEgg(arrayEgg.slice(1));
      // setGoods(arrayCookies, goods[0].slice(1), arrayFrog);
      setGameResult('Se ha descargado un huevo');
    }
    else if (diceNumber === 3) {
      setFrog(arrayFrog.slice(1));
      // setGoods(arrayCookies, arrayFrog.slice(1));
      setGameResult('Se ha descargado una rana');
    }
    else if (diceNumber === 4) {
      setGameResult('Grogu avanza una casilla');
      ///movimiento del pie///


    }
  }

  ///funcion restart button
  const RestartGame = () => {
    //matriz emogis

    setCookies(['🍪', '🍪', '🍪']);
    setEgg(['🥚', '🥚', '🥚']);
    setFrog(['🐸', '🐸', '🐸']);

    //poner el pie al principio

  }


  return (
    <div className="page">
      <header>
        <h1>¡Cuidado con Grogu!</h1>
      </header>

      <main className="page">
        <section className="board">
          <div className="cell">
            <div className="grogu">👣</div>
          </div>
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
        </section>

        <section className='dice-container'>
          <button className="dice" onClick={rollDice}>
            Lanzar Dado
          </button>
          <div className="game-status">{gameResult}</div>
        </section>

        <section className="goods-container">
          <div className="goods-item">{arrayCookies}</div>
          {/* <div className="goods-item">{goods[1]}</div>
          <div className="goods-item">{goods[1]}</div> */}
        </section>
        <section className="goods-container">
          <div className="goods-item">{arrayEgg}</div>
          {/* <div className="goods-item">{goods[0]}</div>
          <div className="goods-item">{goods[0]}</div> */}
        </section>
        <section className="goods-container">
          <div className="goods-item">{arrayFrog}</div>
          {/* <div className="goods-item">{goods[2]}</div>
          <div className="goods-item">{goods[2]}</div> */}
        </section>
        <section>
          <button className="restart-button" onClick={RestartGame}>Reiniciar Juego</button>
        </section>
      </main>
    </div>
  );

}

export default App;
