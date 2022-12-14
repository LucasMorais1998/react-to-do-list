import { Item } from "../../@types/Item";

import { Container } from "./style";
interface IListItemProps {
  item: Item;
  onTaskChange: (id: number, isComplete: boolean) => void;
}

const ListItem = ({ item, onTaskChange }: IListItemProps) => {
  return (
    <Container isComplete={item.isComplete}>
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={(e) => onTaskChange(item.id, e.target.checked)}
      />
      <label>{item.name}</label>
    </Container>
  );
};

export default ListItem;
