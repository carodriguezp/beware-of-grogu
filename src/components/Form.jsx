function Form({ userName }) {
  const handleChange = (ev) => {};
  return (
    <form>
      <input
        type="text"
        id=""
        placeholder="Escribe tu nombre..."
        value={userName}
        onChange={handleChange}
      />
    </form>
  );
}

export default Form;
