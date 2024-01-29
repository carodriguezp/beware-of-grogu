import '../style/App.scss';
import { useState } from 'react';

function App() {
  const arrayEgg = ['🥚', '🥚', '🥚'];
  const arrayCockies = ['🍪', '🍪', '🍪'];
  const arrayFrog = ['🐸', '🐸', '🐸'];
  const [groguMove, setGroguMove] = useState(0);
  const [goods, setGoods] = useState([arrayEgg, arrayCockies, arrayFrog]);
  const [diceResult, setDiceResult] = useState(0);
  const [gameResult, setGameResult] = useState('');
  console.log(goods);

  const rollDice = () => {
    const diceNumber = Math.ceil(Math.random() * 4);

    if (diceNumber === 1) {
      setGoods(arrayCockies.slice(1), arrayEgg, arrayCockies);
      setGameResult('Se ha descargado una galleta');
    }
    if (diceNumber === 2) {
      setGoods(arrayCockies, goods[0].slice(1), arrayFrog);
      setGameResult('Se ha descargado una huevo');
      if (diceNumber === 3) {
        setGoods(arrayCockies, arrayFrog.slice(1));
        setGameResult('Se ha descargado una rana');
      }
      if (diceNumber === 4) {
        setGameResult('Grogu avanza una casilla');
      }
    }
  };

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

        <section>
          <button className="dice" onClick={rollDice}>
            Lanzar Dado
          </button>
          <div className="game-status">{gameResult}</div>
        </section>

        <section className="goods-container">
          <div className="goods-item">{goods[1]}</div>
          {/* <div className="goods-item">{goods[1]}</div>
          <div className="goods-item">{goods[1]}</div> */}
        </section>
        <section className="goods-container">
          <div className="goods-item">{goods[0]}</div>
          {/* <div className="goods-item">{goods[0]}</div>
          <div className="goods-item">{goods[0]}</div> */}
        </section>
        <section className="goods-container">
          <div className="goods-item">{goods[2]}</div>
          {/* <div className="goods-item">{goods[2]}</div>
          <div className="goods-item">{goods[2]}</div> */}
        </section>
        <section>
          <button className="restart-button">Reiniciar Juego</button>
        </section>
      </main>
    </div>
  );
}

export default App;
