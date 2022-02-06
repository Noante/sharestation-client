import styled from "styled-components";
import { convertStorageUnit } from "utils";
import { Progress as _Progress } from "components";

const Progress = styled(_Progress)`
  margin-bottom: 3px;
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
`;

type Props = {
  currentValue: number;
  max: number;
  maxLabel: string;
  minLabel: string;
};

/**
 * Component for representing a progress between two points.
 */
function Meter({ currentValue, max, maxLabel, minLabel }: Props) {
  const formattedMaxValue = convertStorageUnit({
    value: max,
    to: "GB"
  });

  const formattedCurrentValue = convertStorageUnit({
    value: currentValue,
    to: "GB"
  });

  const accessibleLabel = `resumo de armazenamento: ${formattedCurrentValue} de ${formattedMaxValue} utiliados`;

  const progressBarFilling = (currentValue * 100) / max;

  return (
    <Wrapper>
      <Progress value={progressBarFilling} />
      <Labels aria-label={accessibleLabel}>
        <Label>{minLabel}</Label>
        <Label>{maxLabel}</Label>
      </Labels>
    </Wrapper>
  );
}

export default Meter;
