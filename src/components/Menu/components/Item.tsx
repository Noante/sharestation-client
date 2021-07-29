import { ReactElement } from "react";
import styled from "styled-components";

const Link = styled.a`
  color: var(--primary);
  font-size: 0.8125rem;
  line-height: 1rem;
  text-decoration: none;
`;

const Wrapper = styled.li`
  display: flex;
  align-items: center;

  & > ${Link} {
    margin-left: 11px;
  }
`;

type Props = {
  children: string;
  icon: ReactElement;
  to: string;
};

/**
 * Item for composing the menu.
 */
function Item({ icon, children, to }: Props) {
  return (
    <Wrapper>
      {icon}
      <Link href={to}>{children}</Link>
    </Wrapper>
  );
}

export default Item;
