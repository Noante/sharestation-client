import { ReactNode } from "react";

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

export default Menu;
