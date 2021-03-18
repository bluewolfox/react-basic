const React = require('react');

const Gugudan = () => {
  const [first, setFirst] = React.useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = React.useState(
    Math.ceil(Math.random() * 9)
  );
  const [value, setValue] = React.useState("");
  const [result, setResult] = React.useState("");

  const inputEl = React.useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();
    if (parseInt(value) === first * second) {
      setResult("정답: " + value);
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
      setValue("");
    } else {
      setResult("땡");
      setValue("");
    }
    inputEl.current.focus()
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <div>
        {first}곱하기{second}는?
      </div>
      <form onSubmit={onSubmit}>
        <input
          type="number"
          ref={inputEl}
          value={value}
          onChange={onChange}
        />
        <button id="submit" type="submit">입력!</button>
        <label htmlFor="submit">입력!</label>
      </form>
      <div>{result}</div>
    </>
  );
};

module.exports = Gugudan