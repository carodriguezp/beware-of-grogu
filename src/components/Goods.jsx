import PropTypes from 'prop-types';

function Goods({ array }) {
  return (
    <section className="goods-container">
      <div className="goods-item">{array}</div>
    </section>
  );
}

Goods.propTypes = {
  array: PropTypes.array,
};

export default Goods;
