import { BsFillPlusSquareFill } from "react-icons/bs";

import { Container } from "./style";

const AddArea = () => {
  return (
    <Container>
      <div className="add-icon">
        <BsFillPlusSquareFill />
      </div>
      <input 
        type="text"
        placeholder="Adicione uma tarefa a lista" 
      />
    </Container>
  );
};

export default AddArea;
