import { ReactNode } from "react";
import Item from "./components/Item";

type Props = {
  children: ReactNode;
  className?: string;
};

/**
 * Menu for grouping avaiables options for navigating.
 */
function Menu({ children, className }: Props) {
  return (
    <nav className={className}>
      <ul>{children}</ul>
    </nav>
  );
}

Menu.Item = Item;

export default Menu;
