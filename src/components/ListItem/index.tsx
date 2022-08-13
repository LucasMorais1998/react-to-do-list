import { useState } from "react";
import { Item } from "../../@types/Item";

import { Container } from "./style";
interface IListItemProps {
  item: Item;
}

const ListItem = ({ item }: IListItemProps) => {
  const [isChecked, setIsChecked] = useState(item.isComplete);

  const handleChecked = () => {
    setIsChecked(!isChecked);
  };

  return (
    <Container isComplete={isChecked}>
      <input type="checkbox" checked={isChecked} onChange={handleChecked} />
      <label htmlFor="">{item.name}</label>
    </Container>
  );
};

export default ListItem;
