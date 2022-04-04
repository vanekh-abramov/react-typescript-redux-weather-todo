import { ChangeEvent, useRef, useState, KeyboardEvent } from "react";
import { useDispatch } from "react-redux";
import { INPUT_MAX_LENGTH_WARNING } from "../../constants/warnings";
import { addTodo } from "../../store/actions/todos/actions";
import { fetchWeather } from "../../store/actions/weather/actions";
import Input from "../UI/Input/Input";
import classes from "./TextField.module.css";

const TextField = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState<string>("");
  const [inputError, setInputError] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const maxInputLength = 300;

  enum KeyCodes {
    ENTER = "Enter",
  }

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > maxInputLength) {
      setInputError(INPUT_MAX_LENGTH_WARNING);
    } else {
      setInputError("");
    }
    setInputValue(e.target.value);
  };

  const onAddTodo = (e: KeyboardEvent<HTMLInputElement>) => {
    if (inputError) {
      return;
    }
    if (e.code === KeyCodes.ENTER) {
      setInputValue("");
      inputRef.current?.focus();
      dispatch(addTodo(inputValue));
      dispatch(fetchWeather());
    }
  };

  return (
    <div className={classes.textfield_wrapper}>
      <h2 className={classes.textfield_title}>Add note</h2>
      <Input
        ref={inputRef}
        onKeyDown={onAddTodo}
        inputError={inputError}
        placeholder="Add note..."
        value={inputValue}
        onChange={onChange}
      />
      {inputError && <span className={classes.error}>{inputError}</span>}
    </div>
  );
};

export default TextField;
