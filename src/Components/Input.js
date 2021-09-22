import { forwardRef, useImperativeHandle, useRef } from "react";

const Input = forwardRef((_, ref) => {
  const directRef = useRef();
  const notDirectRef = useRef();
  function logText() {
    console.log(directRef.current.value);
  }
  function printText() {
    console.log("Forward", notDirectRef.current.value);
  }
  useImperativeHandle(ref, () => ({ print: printText }));
  return (
    <>
      <input ref={directRef} placeholder="Direct" onChange={logText} />
      <input ref={notDirectRef} placeholder="Forward" />
    </>
  );
});
export default Input;
