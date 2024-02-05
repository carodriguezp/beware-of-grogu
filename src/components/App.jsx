import '../style/App.scss';
import { useState } from 'react';
import Header from './Header';
import Board from './Board';
import Dice from './Dice';
import GameStatus from './GameStatus';
import RestartButton from './RestartButton';

function App() {
  const [arrayCookies, setCookies] = useState(['🍪', '🍪', '🍪']);
  const [arrayEgg, setEgg] = useState(['🥚', '🥚', '🥚']);
  const [arrayFrog, setFrog] = useState(['🐸', '🐸', '🐸']);
  // const [goods, setGoods] = useState([arrayCookies, arrayEgg, arrayFrog]);

  const [groguPosition, setGroguPosition] = useState(0);
  const [diceResult, setDiceResult] = useState(0);
  const [gameResult, setGameResult] = useState('');

  const rollDice = () => {
    const diceNumber = Math.ceil(Math.random() * 4);
    if (diceNumber === 1) {
      setCookies(arrayCookies.slice(1));
      setGameResult('Se ha descargado una galleta');
    } else if (diceNumber === 2) {
      setEgg(arrayEgg.slice(1));
      // setGoods(arrayCookies, goods[0].slice(1), arrayFrog);
      setGameResult('Se ha descargado un huevo');
    } else if (diceNumber === 3) {
      setFrog(arrayFrog.slice(1));
      // setGoods(arrayCookies, arrayFrog.slice(1));
      setGameResult('Se ha descargado una rana');
    } else if (diceNumber === 4) {
      setGameResult('Grogu avanza una casilla');
      ///movimiento del pie///

      setGroguPosition(groguPosition + 1)

    }
  };

  ///funcion restart button
  const RestartGame = () => {
    //matriz emogis

    setCookies(['🍪', '🍪', '🍪']);
    setEgg(['🥚', '🥚', '🥚']);
    setFrog(['🐸', '🐸', '🐸']);
    setGameResult('');

    //poner el pie al principio
  };

  return (
    <div className="page">
      <Header />

      <main className="page">
        <Board groguPosition={groguPosition} />
        <section className="dice-container">
          <Dice handleFunction={rollDice} />
          <GameStatus status={gameResult} />
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
          <RestartButton handleReset={RestartGame} />
        </section>
      </main>
    </div>
  );
}

export default App;
