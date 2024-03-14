import PropTypes from 'prop-types';

function Form({ userName, name }) {

  const handleChange = (ev) => {
    userName(ev.target.value)
  };


  return (
    <form >
      <input
        type="text"
        id=""
        placeholder="Escribe tu nombre..."
        value={name}
        onChange={handleChange}
        className='input-form'
      />
    </form>
  );
}

Form.propTypes = {
  userName: PropTypes.func,
  name: PropTypes.string,

};

export default Form;
