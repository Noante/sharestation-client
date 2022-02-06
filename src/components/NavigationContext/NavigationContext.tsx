import { ReactNode } from "react";
import { Link as _Link } from "react-router-dom";
import styled from "styled-components";

import { ArrowBackIos, Refresh } from "@styled-icons/material";
import { Cloud, Folder } from "@styled-icons/material-outlined";
import { Breadcrumb as _Breadcrumb } from "components";
import { HOME } from "router/routes";

const Breadcrumb = styled(_Breadcrumb)`
  position: sticky;
  bottom: 0;
`;

const Link = styled(_Link)<{ $visible?: boolean }>`
  visibility: ${({ $visible = true }) => ($visible ? "visible" : "hidden")};
`;

const Title = styled.b`
  font-size: 16px;
  line-height: 19px;
  color: var(--primary);
  font-weight: 700;
`;

const Header = styled.div`
  width: 100%;
  height: 50px;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 19px;
  border-bottom: solid 1px #707070;
  background-color: #fff;
`;

const Content = styled.div`
  flex: 1 100%;
  display: grid;
  grid-gap: 20px;
  grid-auto-flow: row;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  padding: 16.5px 0 20px 20px;
  overflow-y: auto;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ActionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

type Props = {
  title: string;
  children: ReactNode;
  goBackTo?: string;
  listDir?: any;
};

const folders = [
  { id: "uuid-1", name: "University", to: "#" },
  { id: "uuid-2", name: "University", to: "#" },
  { id: "uuid-3", name: "University", to: "#" },
];

/**
 * Component for displaying the available documents while allowing to browse
 * between them using a breadcrumb.
 */
function NavigationContext({ title, children, goBackTo, listDir }: Props) {
  return (
    <Wrapper>
      <Header>
        <Link to={"#"} $visible={!!goBackTo}>
          <ArrowBackIos size={24} />
        </Link>
        <Title>{title}</Title>
        <ActionContainer>
            <Refresh size={20} onClick={listDir}></Refresh>
            {/* <span>filter by</span> */}
        </ActionContainer>
      </Header>

      <Content>{children}</Content>

      <Breadcrumb divider=">">
        <Breadcrumb.Crumb to={HOME}>
          <Cloud size={20} />
          {product}
        </Breadcrumb.Crumb>
        {folders.map(({ id, name, to }) => (
          <Breadcrumb.Crumb key={id} to={to}>
            <Folder size={20} />
            {name}
          </Breadcrumb.Crumb>
        ))}
      </Breadcrumb>
    </Wrapper>
  );
}

export default NavigationContext;
