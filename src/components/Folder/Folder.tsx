import styled from "styled-components";
import { Folder as _Folder } from "@styled-icons/material";
import { generatePath } from "react-router-dom";
import { DOCUMENT } from "router/routes";

const Icon = styled(_Folder)`
  color: var(--folder-bgcolor);
`;

const Caption = styled.figcaption`
  color: #5f6a77;
  font-size: 0.875rem;
  line-height: 1.125rem;
  font-weight: 600;
`;

const Content = styled.figure`
  width: 128px;
  text-align: center;
  cursor: pointer;
`;

const Wrapper = styled.a``;

type Props = {
  id: string;
  title: string;
};

/**
 * Represents an available folder to user go into.
 */
function Folder({ title, id }: Props) {
  return (
    <Wrapper href={generatePath(DOCUMENT, { documentId: id })}>
      <Content>
        <Icon />
        <Caption>{title}</Caption>
      </Content>
    </Wrapper>
  );
}

export default Folder;
