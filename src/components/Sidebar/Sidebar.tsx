import _Divider from "components/Divider";
import styled from "styled-components";
import _Menu, { Item } from "components/Menu";
import { version } from "../../../package.json";
import convertStorageUnit from "utils/convertStorageUnit";
import {
  Folder,
  Schedule,
  Delete,
  Cloud,
} from "@styled-icons/material-outlined";
import { HOME, RECENTS, RECOVERY, STORAGE } from "router/routes";
import Meter from "components/Meter";
import user from "__MOCK__USER";

const Divider = styled(_Divider)<{ $position?: "bottom" }>`
  ${({ $position }) => $position === "bottom" && `margin-top: auto;`}
`;

const Title = styled.b`
  font-size: 1.125rem;
  line-height: 1.375rem;
  font-weight: 700;
  color: #283048;
`;

const Version = styled.span`
  font-size: 0.75rem;
  line-height: 0.9375rem;
  color: rgba(40, 48, 72, 0.4);
`;

const StorageMenu = styled(_Menu)`
  margin-bottom: 4px;
`;

const Menu = styled(_Menu)`
  & > * > * {
    margin-bottom: 10px;
  }
`;

const Wrapper = styled.aside`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 1;
  width: 280px;
  min-width: 280px;
  height: 100vh;
  backdrop-filter: blur(5px);
  box-shadow: 5px 5px 6px rgba(0, 0, 0, 0.02);
  background-color: rgba(233, 232, 231, 0.85);
  padding-bottom: 11px;

  & > :not(${Divider}) {
    margin-left: 15px;
    margin-right: 19px;
  }
  & > ${Title} {
    margin-top: 25px;
    margin-bottom: 40px;
  }
`;

/**
 * Sidebar responsible for providing navigation through the whole app,
 * grouping all available routes (menu options).
 */
function Sidebar() {
  return (
    <Wrapper>
      <Title>Sharestation</Title>

      <Menu>
        <Item to={HOME} icon={<Folder size={20} />}>
          Meus arquivos
        </Item>
        <Item to={RECENTS} icon={<Schedule size={20} />}>
          Recentes
        </Item>
        <Item to={RECOVERY} icon={<Delete size={20} />}>
          Lixeira
        </Item>
      </Menu>

      <Divider />

      <StorageMenu>
        <Item to={STORAGE} icon={<Cloud size={20} />}>
          Armazenamento
        </Item>
      </StorageMenu>

      <Meter
        max={user.storage.maxCapacity}
        currentValue={user.storage.currentUsage}
        minLabel="0 GB"
        maxLabel={convertStorageUnit({
          to: "GB",
          value: user.storage.maxCapacity,
        })}
      />

      <Divider $position="bottom" />

      <Version>Versão {version}</Version>
    </Wrapper>
  );
}

export default Sidebar;
