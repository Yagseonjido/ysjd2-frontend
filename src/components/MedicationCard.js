import React, { forwardRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { colors } from '../assets/ui/styles';

const slideIn = keyframes`
  0% {
    transform: translateY(20px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const glow = keyframes`
  0% {
    box-shadow: 0 0 5px ${colors.highlightBlue};
  }
  100% {
    box-shadow: 0 0 10px ${colors.darkblue};
  }
`;

const Card = styled.div`
  background-color: ${colors.white};
  width: 200px;
  border-radius: 8px;
  border-left: 10px solid ${colors.darkblue};
  padding: 8px;
  margin: 10px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  animation: ${slideIn} 0.3s ease-out;
  cursor: pointer;

  &.highlight {
    animation: ${glow} 1s infinite alternate;
  }
`;

const Info = styled.div`
  text-align: left;
`;

const Title = styled.h3`
  margin: 0px;
  margin-top: 8px;
  font-weight: 900;
  color: ${colors.darkblue};
`;

const Subtitle = styled.p`
  margin: 0;
  color: ${colors.gray700};
  font-size: 12px;
  margin-left: 4px;
  padding-bottom: 4px;
`;

const DrugId = styled.p`
  margin: 0;
  color: ${colors.gray700};
  font-size: 12px;
`;

const Code = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: ${colors.gray900};
`;

const DrugType = styled.span`
  font-size: 10px;
  font-weight: 700;
  background-color: ${colors.highlightBlue};
  padding: 4px 8px;
  color: ${colors.darkblue};
  border-radius: 18px;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: end;
`;

const MedicationCard = forwardRef(({ id, labelKo, labelEn, drugType, drugId, efficacy, onClick, className }, ref) => {
  return (
    <Card ref={ref} id={id} onClick={onClick} className={className}>
      <Info>
        <DrugType>{drugType}</DrugType>
        <TitleContainer>
          <Title>{labelKo}</Title>
          <Subtitle>{labelEn}</Subtitle>
        </TitleContainer>
        <DrugId>{drugId}</DrugId>
        <Code>{efficacy.join(', ')}</Code>
      </Info>
    </Card>
  );
});

export default MedicationCard;