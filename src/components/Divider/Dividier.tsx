import styled from "styled-components";

type Props = {
  className?: string;
};

/**
 * Component for representing thematic breaks between
 * paragraph-level or sections.
 */
const Divider = styled.hr<Props>`
  width: 100%;
  min-width: 100%;
  height: 1px;
  border: 0;
  background-color: rgba(40, 48, 72, 0.15);
  margin: 15.5px 0 14.5px;
`;

export default Divider;
