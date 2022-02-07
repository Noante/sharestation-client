import styled from "styled-components";

const ContainmentBar = styled.div`
  height: 4px;
  width: 100%;
  border-radius: 10px;
  background-color: rgba(var(--primary-in-rgb), 0.12);
`;

const CurrentProgress = styled.div<{ $width: number | string }>`
  width: ${({ $width }) => $width}%;
  height: 100%;
  border-radius: 10px;
  background-color: #fff;
`;

type Props = {
  value: number | string;
  className?: string;
};

/**
 * Represents progress of a task, using a filled bar.
 */
function Progress({ value, className }: Props) {
  const width = value > 100 ? 100 : value;

  return (
    <ContainmentBar className={className}>
      <CurrentProgress $width={width} />
    </ContainmentBar>
  );
}

export default Progress;
