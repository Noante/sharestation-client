import { ReactNode } from "react";
import { Link as _Link } from "react-router-dom";
import styled from "styled-components";
import { ArrowBackIos } from "@styled-icons/material";
import { product } from "../../../package.json";
import { Cloud, Folder } from "@styled-icons/material-outlined";
import _Breadcrumb from "components/Breadcrumb";
import Crumb from "components/Breadcrumb/components/Crumb";
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

type Props = {
  title: string;
  children: ReactNode;
  goBackTo?: string;
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
function NavigationContext({ title, children, goBackTo }: Props) {
  return (
    <Wrapper>
      <Header>
        <Link to={"#"} $visible={!!goBackTo}>
          <ArrowBackIos size={24} />
        </Link>
        <Title>{title}</Title>
        <span>filter by</span>
      </Header>

      <Content>{children}</Content>

      <Breadcrumb divider=">">
        <Crumb to={HOME}>
          <Cloud size={20} />
          {product}
        </Crumb>
        {folders.map(({ id, name, to }) => (
          <Crumb key={id} to={to}>
            <Folder size={20} />
            {name}
          </Crumb>
        ))}
      </Breadcrumb>
    </Wrapper>
  );
}

export default NavigationContext;
