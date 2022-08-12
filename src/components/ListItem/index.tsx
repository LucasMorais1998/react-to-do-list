import { Item } from "../../@types/Item";

interface IListItemProps {
  item: Item;
}

const ListItem = ({ item }: IListItemProps) => {
  return (
    <div>
      <h1>ListItem</h1>
    </div>
  );
};

export default ListItem;
