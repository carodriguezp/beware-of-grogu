import PropTypes from 'prop-types';

function Dice({ handleFunction, style }) {
  const handleClick = () => {
    handleFunction();
  };
  return (
    <button
      className={`dice ${style ? 'dice-hidden' : ''}`}
      onClick={handleClick}
    >
      Lanzar Dado
    </button>
  );
}

Dice.propTypes = {
  handleFunction: PropTypes.func.isRequired,
};
export default Dice;
