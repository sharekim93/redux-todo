import { useRef } from "react";
import { useDispatch } from "react-redux";
import "./AddContainer";

const AddContainer = () => {
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  return (
    <div>
      <input ref={inputRef} />
      <button
        onClick={() => dispatch({ type: "ADD", value: inputRef.current.value })}
      >
        Add
      </button>
    </div>
  );
};

export default AddContainer;
