import styled from "styled-components";
import { Folder as _Folder } from "@styled-icons/material";
import { generatePath } from "react-router-dom";
import { DOCUMENT } from "router/routes";

const Icon = styled(_Folder)`
  color: var(--folder-bgcolor);
`;

const Caption = styled.figcaption`
  color: var(--secondary);
  font-size: 0.875rem;
  line-height: 1.125rem;
  font-weight: 600;
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const Content = styled.figure`
  width: 128px;
  text-align: center;
  cursor: pointer;
`;

const Wrapper = styled.a``;

type Props = {
  id: string;
  name: string;
};

/**
 * Represents an available folder to user go into.
 */
function Folder({ name, id }: Props) {
  return (
    <Wrapper href={generatePath(DOCUMENT, { documentId: id })}>
      <Content>
        <Icon />
        <Caption>{name}</Caption>
      </Content>
    </Wrapper>
  );
}

export default Folder;
