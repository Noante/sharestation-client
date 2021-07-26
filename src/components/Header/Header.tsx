import styled from "styled-components";
import Avatar from "components/Avatar";
import user from "__MOCK__USER";

const Wrapper = styled.header`
  width: 100%;
  min-width: 100%;
  height: 70px;
  min-height: 70px;
  background-image: linear-gradient(90deg, #283048 0%, #859398 100%);
  padding: 15px 25px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: #fff;
`;

const Greeting = styled.span`
  font-size: 12px;
  line-height: 15px;
  margin-right: 13px;
`;

const Name = styled.abbr`
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
`;

/**
 *
 */
function Header() {
  return (
    <Wrapper>
      <Greeting>
        Bem-vindo(a), <Name title={user.name}>{user.name.split(" ")[0]}</Name>
      </Greeting>
      <Avatar src={user.profilePicture} username={user.name} />
    </Wrapper>
  );
}

export default Header;
