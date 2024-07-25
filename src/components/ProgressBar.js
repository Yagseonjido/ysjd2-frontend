import React from 'react';
import styled from 'styled-components';
import { colors } from '../assets/ui/styles';

const ProgressBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Step = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`;

const StepNumber = styled.div`
  background-color: ${props => props.$active ? colors.darkblue : colors.gray300};
  color: ${props => props.$active ? 'white' : colors.white};
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  margin-bottom: 5px;
`;

const StepLabel = styled.div`
  letter-spacing: -0.6px;
  color: ${props => props.$active ? colors.darkblue : colors.gray500};
  font-size: 12px;
  font-weight: 800;
`;

const StepLine = styled.div`
  height: 2px;
  width: 80px;
  background-color: ${props => props.$active ? colors.darkblue : colors.gray300};
  margin: 0px 5px;
`;

const ProgressBar = ({ currentStep }) => {
  return (
    <ProgressBarContainer>
      <Step>
        <StepNumber $active={currentStep >= 1}>1</StepNumber>
        <StepLabel $active={currentStep >= 1}>기본 정보</StepLabel>
      </Step>
      <StepLine $active={currentStep >= 2} />
      <Step>
        <StepNumber $active={currentStep >= 2}>2</StepNumber>
        <StepLabel $active={currentStep >= 2}>과거 병력</StepLabel>
      </Step>
      <StepLine $active={currentStep >= 3} />
      <Step>
        <StepNumber $active={currentStep >= 3}>3</StepNumber>
        <StepLabel $active={currentStep >= 3}>증상 입력</StepLabel>
      </Step>
    </ProgressBarContainer>
  );
};

export default ProgressBar;
