// ResultStep1.js
import React from 'react';
import styled from 'styled-components';
import { colors } from '../assets/ui/styles';
import Logo from '../assets/images/yag_logo.png';
import SideEffect from '../assets/images/sideeffect_blue.png';

const Container = styled.div`
  overflow-x: hidden;
`;

const Title = styled.h1`
  color: ${colors.darkblue};
  font-weight: 800;
  font-size: 24px;
  letter-spacing: -0.5px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  background-color: ${colors.darkblue};
  color: ${colors.white};
  border: none;
  padding: 12px 18px;
  border-radius: 24px;
  font-weight: 700;
  font-size: 16px;
  align-items: center;
  cursor: pointer;
  margin-top: 10px;
  width: 90%;

  &:hover {
    background-color: ${colors.gray700};
  }
`;

const PDFButton = styled.button`
  background-color: ${colors.skyblue};
  color: ${colors.darkblue};
  border: 2px solid ${colors.borderBlue};
  padding: 10px 20px;
  border-radius: 24px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  margin-top: 12px;
  width: 90%;

  &:hover {
    background-color: ${colors.highlightBlue};
  }
`;

const StepContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
  width: 100%;
  box-sizing: border-box;
`;

const StepNumber = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 4px;
  background-color: ${colors.darkblue};
  color: ${colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  margin-right: 10px;
`;

const StepContent = styled.div`
  background-color: ${colors.lightblue};
  padding: 4px;
  padding-left: 32px;
  border-radius: 8px;
  width: 100%;
  max-width: 400px;
  display: flex;
  align-items: center;
  flex-direction: row;
  color: ${colors.gray900};
  font-weight: 700;
  box-sizing: border-box;
`;

const StepHeader = styled.h3`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0;
  background-color: ${colors.skyblue};
  color: ${colors.darkblue};
  padding: 8px;
  border-radius: 8px;
  width: 100%;
  box-sizing: border-box;
`;

const SideEffectImage = styled.img`
  height: 28px;
`;

const SubTitle = styled.h3`
  color: ${colors.darkblue};
  padding: 6px;
  padding-left: 10px;
  border-top: 3px solid ${colors.darkblue};
  border-bottom: 3px solid ${colors.darkblue};
  margin-top: 36px;
  width: 100%;
  box-sizing: border-box;
`;

const LogoImage = styled.img`
  height: 36px;
  margin-bottom: 24px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
  max-width: 400px;
  box-sizing: border-box;
`;

const ListItem = styled.li`
  background-color: ${colors.lightblue};
  padding: 4px;
  margin-bottom: 10px;
  border-radius: 4px;
  font-size: 16px;
  box-sizing: border-box;
`;

const ButtonContainer = styled.div`
  margin-top: 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
`;

const TotalResult = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  width: 100%;
  box-sizing: border-box;
`;

const ListHeader = styled.h4`
  font-size: 18px;
  margin: 0;
  margin-bottom: 4px;
  color: ${colors.gray900};
  width: 100%;
  box-sizing: border-box;
`;

const ResultStep1 = ({ data, onNext }) => {
  const filterLabels = (reactions) => reactions.map((reaction) => reaction.label).filter(Boolean).join(', ');

  const adviceList = data.totalResult[1].advice;

  const prescriptionSteps = [
    {
      stepNumber: 1,
      drugs: data.prescription1.map(prescription => prescription.drugName).filter(Boolean).join(', '),
      sideEffects: filterLabels(data.reaction1),
    },
    {
      stepNumber: 2,
      drugs: data.prescription2.map(prescription => prescription.drugName).filter(Boolean).join(', '),
      sideEffects: filterLabels(data.reaction2),
    },
  ];

  return (
    <Container>
      <LogoImage src={Logo} alt="Logo" />
      <Title>
        {data.name}님의 <br />
        처방 연쇄 시뮬레이션 결과
      </Title>

      {prescriptionSteps.map((step, index) => (
        <StepContainer key={index}>
          <StepHeader>
            <StepNumber>{step.stepNumber}</StepNumber>
            {step.drugs}
          </StepHeader>
          <StepContent>
            <SideEffectImage src={SideEffect} />
            부작용: {step.sideEffects}
          </StepContent>
        </StepContainer>
      ))}

      <TotalResult>{data.totalResult[0].explain}</TotalResult>

      <SubTitle>처방 연쇄를 방지하기 위해서는...</SubTitle>

      <List>
        {adviceList.map((advice, index) => (
          <ListItem key={index}>
            <ListHeader>{Object.keys(advice)[0]}</ListHeader>
            {Object.values(advice)[0]}
          </ListItem>
        ))}
      </List>

      <ButtonContainer>
        <Button onClick={onNext}>더 자세한 약물∙부작용 보러가기</Button>
        <PDFButton onClick={onNext}>PDF 다운로드 받기</PDFButton>
      </ButtonContainer>
    </Container>
  );
};

export default ResultStep1;
