import styled from "styled-components";
import Sidebar from "components/Sidebar";
import Header from "components/Header";
import { ReactNode } from "react";

const Content = styled.main`
  flex: 1;
  min-width: calc(100% - var(--sidebar-width));
  width: calc(100% - var(--sidebar-width));
  margin-left: auto;
  overflow-y: auto;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

type Props = {
  children: ReactNode;
};

/**
 * Template with sidebar, header, and the default styles and
 * behavior for the common private browsing.
 */
function PrivateTemplate({ children }: Props) {
  return (
    <>
      <Sidebar />
      <Wrapper>
        <Header />
        <Content>{children}</Content>
      </Wrapper>
    </>
  );
}

export default PrivateTemplate;
