import React, { forwardRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { colors } from '../assets/ui/styles';
import SideEffect from '../assets/icons/sideeffect_icon.png';

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
    box-shadow: 0 0 5px ${colors.highlightRed};
  }
  100% {
    box-shadow: 0 0 10px ${colors.red};
  }
`;

const Card = styled.div`
  background-color: ${colors.white};
  width: 210px;
  border-radius: 8px;
  border-left: 10px solid ${colors.red};
  padding: 8px 16px 6px 10px;
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

const Title = styled.h3`
  margin: 0;
  font-weight: 900;
  font-size: 16px;
  color: ${colors.gray900};
`;

const Subtitle = styled.p`
  margin: 0;
  color: ${colors.gray700};
  font-size: 12px;
`;

const Description = styled.p`
  margin: 0;
  width: 100%;
  color: ${colors.gray700};
  font-size: 12px;
`;

const Alert = styled.p`
  margin: 0;
  width: 100%;
  color: ${colors.red};
  font-weight: 800;
  font-size: 12px;
  margin-top: 10px;
`;

const Info = styled.div`
  text-align: left;
`;

const SideEffectImage = styled.img`
  height: 28px;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Details = styled.div`
  padding-left: 16px;
`;

const SideEffectCard = forwardRef(({ id, label, explain, alert, children, onClick, className }, ref) => {
  return (
    <Card ref={ref} id={id} onClick={onClick} className={className}>
      <Info>
        <TitleContainer>
          <SideEffectImage src={SideEffect} />
          <Title>{label}</Title>
        </TitleContainer>
        <Details>
          <Subtitle>발생 빈도: {explain['발생 빈도']}</Subtitle>
          <Description>증상 예시: {explain['증상 예시']}</Description>
        </Details>
        <Alert>{alert}</Alert>
        {children}
      </Info>
    </Card>
  );
});

export default SideEffectCard;
