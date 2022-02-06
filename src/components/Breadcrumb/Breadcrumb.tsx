import { ReactNode } from "react";
import styled from "styled-components";
import Crumb from "./components/Crumb";

const Crumbs = styled.ol<{ $divider: string }>`
  height: 100%;
  display: flex;
  padding: 0 15px;
  align-items: center;
  overflow-x: auto;

  & > * + * {
    &::before {
      content: "${({ $divider }) => $divider}";
      margin: 0 7px;
    }
  }
`;

const Wrapper = styled.nav`
  height: 40px;
  background-color: #fff;
  border-top: solid 1px #707070;
`;

type Props = {
  divider?: string;
  className?: string;
  children: ReactNode;
};

/**
 * Display all browsed routes until arriving at the current
 * one, making it possible to return to any previous route.
 */
function Breadcrumb({ divider = "/", children, className }: Props) {
  return (
    <Wrapper aria-label="breadcrumb" className={className}>
      <Crumbs $divider={divider}>{children}</Crumbs>
    </Wrapper>
  );
}

Breadcrumb.Crumb = Crumb;

export default Breadcrumb;
