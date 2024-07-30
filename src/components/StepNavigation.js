// StepNavigation.js
import React from 'react';
import styled from 'styled-components';
import { colors } from '../assets/ui/styles';
import PillIcon from '../assets/icons/pill_icon.png'; 
import EffectIcon from '../assets/icons/effect_icon.png'; 

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  margin: 0 10px;
  color: ${({ $isActive }) => ($isActive ? colors.darkblue : colors.gray500)};

  &:hover {
    color: ${colors.darkblue};
  }
`;

const NavText = styled.div`
  margin-top: 5px;
  font-size: 14px;
  font-weight: 800;
  text-align: center;
`;

const Line = styled.div`
  height: 2px;
  background-color: ${({ $isActive }) => ($isActive ? colors.darkblue : colors.gray300)};
  width: 40px;
`;

const IconImage = styled.img`
  height: 32px;
  margin-right: 5px;
`;

const StepNavigation = ({ currentStep, setStep }) => {
  const steps = [
    { label: '처방(1)', icon: PillIcon },
    { label: '부작용', icon: EffectIcon },
    { label: '처방(2)', icon: PillIcon },
    { label: '부작용', icon: EffectIcon }
  ];

  return (
    <NavContainer>
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          {index !== 0 && <Line $isActive={currentStep > index + 1} />}
          <NavItem $isActive={currentStep === index + 2} onClick={() => setStep(index + 2)}>
            <IconImage src={step.icon} alt={step.label} />
            <NavText>{step.label}</NavText>
          </NavItem>
        </React.Fragment>
      ))}
    </NavContainer>
  );
};

export default StepNavigation;
