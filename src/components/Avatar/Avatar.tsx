import styled from "styled-components";

const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

type Params = {
  className?: string;
  src: string;
  username: string;
};

/**
 *
 */
function Avatar({ src, username, className }: Params) {
  return (
    <figure className={className}>
      <Image src={src} alt={username} />
    </figure>
  );
}

export default Avatar;
