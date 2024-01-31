import PropTypes from 'prop-types';

function Dice({ handleFunction }) {
  const handleClick = () => {
    handleFunction();
  };
  return (
    <button className="dice" onClick={handleClick}>
      Lanzar Dado
    </button>
  );
}

Dice.propTypes = {
  handleFunction: PropTypes.func.isRequired,
};
export default Dice;
