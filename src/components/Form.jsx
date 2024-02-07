function Form({ userName, name }) {

  const handleChange = (ev) => {
    userName(ev.target.value)
  };


  return (
    <form>
      <input
        type="text"
        id=""
        placeholder="Escribe tu nombre..."
        value={name}
        onChange={handleChange}
      />
    </form>
  );
}

export default Form;
