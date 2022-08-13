import { useState } from "react";
import { Item } from "../../@types/Item";

import Header from "../../components/Header";
import AddArea from "../../components/AddArea";
import ListItem from "../../components/ListItem";

import { Container, MainContent } from "./style";

const Home = () => {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: "Pedir almoço", isComplete: false },
    { id: 2, name: "Limpar a casa", isComplete: true },
  ]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];

    newList.push({
      id: list.length + 1,
      name: taskName,
      isComplete: false,
    });

    setList(newList);
  };

  const handleTaskChange = (id: number, isComplete: boolean) => {
    let newList = [...list];

    for (let i in newList) {
      if (newList[i].id === id) newList[i].isComplete = isComplete;
    }

    setList(newList);
  };

  return (
    <Container>
      <MainContent>
        <Header />

        <AddArea onAddTask={handleAddTask} />

        {list.map((item, index) => (
          <ListItem
            key={index}
            item={item}
            onTaskChange={handleTaskChange}
          />
        ))}
      </MainContent>
    </Container>
  );
};

export default Home;
