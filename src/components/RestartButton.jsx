function RestartButton({ handleReset }) {
  const handleClick = () => {
    handleReset();
  };

  return (
    <button className="restart-button" onClick={handleClick}>
      Reiniciar Juego
    </button>
  );
}

export default RestartButton;
