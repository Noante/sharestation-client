import styled from "styled-components";

const Bar = styled.meter`
  height: 4px;
  appearance: none;
  background: none;
  border-radius: 10px;
  position: relative;
  background-color: #fff;
  &::-moz-meter-bar {
    background: var(--primary);
    border-radius: 10px;
  }
`;

const Label = styled.span`
  color: var(--primary);
  font-size: 0.8125rem;
  line-height: 1rem;
`;

const Labels = styled.p`
  display: flex;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  & > ${Bar} {
    margin-bottom: 2px;
  }
`;

type Props = {
  currentValue: number;
  max: number;
  maxLabel: string;
  minLabel: string;
};

/**
 * Component fro representing a progress between two points.
 * TODO: transform max and min labels into pseudo-elements.
 */
function Meter({ currentValue, max, maxLabel, minLabel }: Props) {
  return (
    <Wrapper>
      <Bar max={max} value={currentValue}>
        em {currentValue}/{max}
      </Bar>
      <Labels>
        <Label>{minLabel}</Label>
        <Label>{maxLabel}</Label>
      </Labels>
    </Wrapper>
  );
}

export default Meter;
