import PropTypes from 'prop-types';

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

RestartButton.propTypes = {
  handleReset: PropTypes.func,

};

export default RestartButton;
