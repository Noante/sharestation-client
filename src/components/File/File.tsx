import styled from "styled-components";
import getFileExtension from "utils/getFileExtension";
import fileBackdropUrl from "./assets/fileBackdrop.png";
import {
  Slideshow,
  Movie,
  Image,
  MusicNote,
  MoreHoriz,
} from "@styled-icons/material-outlined";
import { StyledIconBase } from "@styled-icons/styled-icon";
import getFileNameWithoutExtension from "utils/getFileNameWithoutExtension";

const Backdrop = styled.figure`
  position: relative;
  cursor: pointer;
  text-align: center;
  display: flex;
  width: 96px;
  height: 128px;
  background-image: url(${fileBackdropUrl});

  ${StyledIconBase} {
    width: 31.5px;
    height: 31.5px;
    color: rgba(95, 106, 119, 0.5);
    margin: auto;
  }
`;

const Caption = styled.figcaption`
  position: absolute;
  top: calc(100% + 5px);
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const Wrapper = styled.div``;

type Props = {
  name: string;
};

/**
 * Component for representing a file as a pdf, slideshow, video, picture, etc.
 */
function File({ name }: Props) {
  const nameWithoutExtension = getFileNameWithoutExtension(name);

  const icon = {
    mp3: <MusicNote />,
    ppt: <Slideshow />,
    mp4: <Movie />,
    jpg: <Image />,
    jpeg: <Image />,
    png: <Image />,
    other: <MoreHoriz />,
  }[getFileExtension(name) ?? "other"];

  return (
    <Wrapper>
      <Backdrop>
        {icon}
        <Caption>{nameWithoutExtension}</Caption>
      </Backdrop>
    </Wrapper>
  );
}

export default File;
