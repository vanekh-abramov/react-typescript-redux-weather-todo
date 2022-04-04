import {
  ChangeEvent,
  forwardRef,
  RefObject,
  KeyboardEventHandler,
} from "react";
import classes from "./Input.module.css";

interface InputProps {
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  ref: RefObject<HTMLInputElement>;
  inputError: string;
  onKeyDown: KeyboardEventHandler<HTMLInputElement>;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, inputError, value, onChange, onKeyDown }, ref) => {
    const inputClass = [classes.input];

    if (inputError) {
      inputClass.push(classes.error);
    }

    return (
      <input
        className={inputClass.join(" ")}
        type="text"
        placeholder={placeholder}
        ref={ref}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
    );
  }
);

export default Input;
