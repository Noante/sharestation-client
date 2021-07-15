import { ReactNode } from "react";
import styled from "styled-components";

const Message = styled.figcaption`
  max-width: 285px;
  text-align: center;
  color: #707070;
  font-size: 1.25rem;
  line-height: 1.75rem;
`;

const Image = styled.img`
  width: 372px;
  height: 280px;
`;

const Figure = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > ${Message} {
    margin-top: 38px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 71.6px;

  & > ${Figure} {
    margin-bottom: 45px;
  }
`;

type Params = {
  message: string;
  illustrationSrc: string;
  children: ReactNode;
};

/**
 *
 */
function FeedbackMessage({ message, children, illustrationSrc }: Params) {
  return (
    <Wrapper>
      <Figure>
        <Image src={illustrationSrc} title={message} />
        <Message>{message}</Message>
      </Figure>
      {children}
    </Wrapper>
  );
}

export default FeedbackMessage;
