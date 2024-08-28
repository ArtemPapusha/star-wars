import { Link } from 'react-router-dom';

interface ItemProps {
  isLastItem: boolean;
  title: React.ReactNode;
  pathname: string | undefined;
}

const Item: React.FC<ItemProps> = ({ isLastItem, title, pathname }) => {
  if (isLastItem) {
    return <span>{title}</span>;
  }

  if (!pathname) {
    return null
  }

  return <Link to={pathname}>{title}</Link>;
};

export default Item;
