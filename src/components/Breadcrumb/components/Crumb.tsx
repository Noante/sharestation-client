import { ReactNode } from "react";
import styled from "styled-components";
import { Link as _Link } from "react-router-dom";

const Link = styled(_Link)`
  display: flex;
  align-items: center;

  & > * {
    margin-right: 6px;
  }
`;
const Wrapper = styled.li`
  display: flex;
  align-items: center;
  font-size: 0.75rem;
  line-height: 0.9375rem;
  color: var(--primary);
`;

type Props = {
  children: ReactNode;
  to: string;
};

/**
 * Crumb for composing the breadcrumb.
 */
function Crumb({ children, to }: Props) {
  return (
    <Wrapper>
      <Link to={to}>{children}</Link>
    </Wrapper>
  );
}

export default Crumb;
