import { EmptyFeedback } from "components/FeedbackMessage";
import Header from "components/Header";
import Button from "components/Button";
import styled from "styled-components";
import Sidebar from "components/Sidebar";

const Wrapper = styled.div``;

const Content = styled.main``;

/**
 *
 */
function Home() {
  return (
    <>
      <Sidebar />
      <Wrapper>
        <Header />
        <Content>
          <EmptyFeedback>
            <Button>Enviar arquivo</Button>
          </EmptyFeedback>
        </Content>
      </Wrapper>
    </>
  );
}

export default Home;
