import { Item } from "../../@types/Item";

import { Container } from "./style";
interface IListItemProps {
  item: Item;
  onHandleTaskChange: (id: number, isComplete: boolean) => void;
}

const ListItem = ({ item, onHandleTaskChange }: IListItemProps) => {
  return (
    <Container isComplete={item.isComplete}>
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={(e) => onHandleTaskChange(item.id, e.target.checked)}
      />
      <label>{item.name}</label>
    </Container>
  );
};

export default ListItem;
