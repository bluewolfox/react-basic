const { useState, useRef } = require("react");
const React = require("react");

const WordRelay = () => {
  const [word, setWord] = useState("김원석");
  const [value, setValue] = useState("김원석");
  const [result, setResult] = useState("김원석");
  const inputEl = React.useRef(null);

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (word[word.length - 1] === value[0]) {
      setWord(value);
      setResult("딩동댕");
      setValue("");
    } else {
      setResult("땡");
      setValue("");
    }

    inputEl.current.focus();
  };

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <div>{word}</div>
      <form onSubmit={onSubmitForm}>
        <input
          type="text"
          ref={inputEl}
          value={value}
          onChange={onChangeInput}
        />
        <button type="submit">입력!</button>
      </form>
      <div>{result}</div>
    </>
  );
};

module.exports = WordRelay;
