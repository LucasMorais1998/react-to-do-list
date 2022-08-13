import { KeyboardEvent, useState } from "react";
import { BsFillPlusSquareFill } from "react-icons/bs";

import { Container } from "./style";

interface IAddAreaProps {
  onAddTask: (taskName: string) => void;
}

const AddArea = ({ onAddTask }: IAddAreaProps) => {
  const [inputText, setInputText] = useState("");

  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.code === "Enter" && inputText !== "") {
      onAddTask(inputText);
      setInputText("");
    }
  };

  const handleClick = () => {
    if (inputText !== "") {
      onAddTask(inputText);
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
