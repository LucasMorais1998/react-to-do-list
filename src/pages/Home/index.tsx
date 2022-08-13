import { useState } from "react";
import { Item } from "../../@types/Item";

import Header from "../../components/Header";
import AddArea from "../../components/AddArea";
import ListItem from "../../components/ListItem";

import { Container, MainContent } from "./style";

const Home = () => {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: "Pedir almoço", isComplete: false },
    { id: 2, name: "Limpar a casa", isComplete: false },
  ]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];

    newList.push({
      id: list.length++,
      name: taskName,
      isComplete: false,
    });

    setList(newList);
  };

  return (
    <Container>
      <MainContent>
        <Header />
        
        <AddArea onHandleAddTask={handleAddTask} />

        {list.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </MainContent>
    </Container>
  );
};

export default Home;
