import { Item } from "../../@types/Item";

import { Container } from "./style";
interface IListItemProps {
  item: Item;
}

const ListItem = ({ item }: IListItemProps) => {
  return (
    <Container>
      <input type="checkbox" />
      <label htmlFor="">{item.name}</label>
    </Container>
  );
};

export default ListItem;
