import PropTypes from 'prop-types';

function GameStatus({ status }) {
  return <div className="game-status">{status}</div>;
}

GameStatus.propTypes = {
  status: PropTypes.string,

};

export default GameStatus;
