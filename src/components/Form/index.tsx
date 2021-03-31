import { FormEvent, useRef } from "react";
import "./Form.css";

export function Form() {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  //react hooks - 16

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();

    console.log(nameRef.current?.value);
    console.log(emailRef.current?.value);
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="name">Nome:</label>
        <input type="text" id="name" ref={nameRef} />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" ref={emailRef} />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
}
