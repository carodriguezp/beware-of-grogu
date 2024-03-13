import '../style/App.scss';
import { useEffect, useState } from 'react';
import { Route, Routes } from "react-router-dom";
import Header from './Header';
import Board from './Board';
import Dice from './Dice';
import GameStatus from './GameStatus';
import RestartButton from './RestartButton';
import Goods from './Goods';
import Form from './Form';
import Footer from './Footer';
import Instructions from './Instructions';


function App() {
  const [arrayCookies, setCookies] = useState(['🍪', '🍪', '🍪']);
  const [arrayEgg, setEgg] = useState(['🥚', '🥚', '🥚']);
  const [arrayFrog, setFrog] = useState(['🐸', '🐸', '🐸']);
  const [groguPosition, setGroguPosition] = useState(0);
  const [gameResult, setGameResult] = useState('');
  const [hidden, setHidden] = useState(false);
  const [name, setName] = useState('');

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
      setGroguPosition(groguPosition + 1);
    }
  };

  const userName = (value) => {
    setName(value);
  };

  useEffect(() => {
    if (
      arrayCookies.length === 0 &&
      arrayEgg.length === 0 &&
      arrayFrog.length === 0
    ) {
      setGameResult('Ganaste ' + name + ', Mando completa la misión');
      setHidden(!hidden);
    } else if (groguPosition === 6) {
      setGameResult('¡¡Grogu se ha comido el cargamento!! ' + name + ', has perdido');
      setHidden(!hidden);
    }
  }, [arrayCookies, arrayEgg, arrayFrog, groguPosition]);

  ///funcion restart button
  const RestartGame = () => {
    //matriz emogis

    setCookies(['🍪', '🍪', '🍪']);
    setEgg(['🥚', '🥚', '🥚']);
    setFrog(['🐸', '🐸', '🐸']);
    setGameResult('');
    setGroguPosition(0);
    setHidden(!hidden);
    setName('');

    //poner el pie al principio
  };

  return (
    <div className="container">
      <Header />

      <main className="page">
        {/*INTRUCTIONS */}
        <Routes>
          <Route path='/instructions' element={<Instructions />} />

        </Routes>

        <Board groguPosition={groguPosition} />
        <section className="dice-container">
          <Dice handleFunction={rollDice} style={hidden} />
          <GameStatus status={gameResult} name={name} />
        </section>
        <Goods array={arrayCookies} />
        <Goods array={arrayEgg} />
        <Goods array={arrayFrog} />

        <section>
          <RestartButton handleReset={RestartGame} />
        </section>
        <Form name={name} userName={userName} />
      </main>
      {/*OPTIONS */}
      <Footer />
    </div>
  );
}

export default App;
