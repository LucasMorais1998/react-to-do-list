import { KeyboardEvent, useState } from "react";
import { BsFillPlusSquareFill } from "react-icons/bs";

import { Container } from "./style";

interface IAddAreaProps {
  onHandleAddTask: (taskName: string) => void;
}

const AddArea = ({ onHandleAddTask }: IAddAreaProps) => {
  const [inputText, setInputText] = useState("");

  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.code === "Enter" && inputText !== "") {
      onHandleAddTask(inputText);
      setInputText("");
    }
  };

  const handleClick = () => {
    if (inputText !== "") {
      onHandleAddTask(inputText);
      setInputText("");
    }
  };

  return (
    <Container>
      <div className="add-icon">
        <BsFillPlusSquareFill onClick={handleClick} />
      </div>
      <input
        type="text"
        placeholder="Adicione uma tarefa a lista"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyUp={handleKeyUp}
      />
    </Container>
  );
};

export default AddArea;
