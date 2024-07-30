// ResultStep4.js
import React from 'react';
import styled from 'styled-components';
import { colors } from '../assets/ui/styles';
import IdeaIcon from '../assets/icons/idea_icon.png'; 

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

const ButtonContainer = styled.div`
  margin-top: 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


const SubTitle = styled.h3`
  color: ${colors.darkblue};
  padding: 6px;
  padding-left: 10px;
  border-top: 3px solid ${colors.darkblue};
  border-bottom: 3px solid ${colors.darkblue};
  margin-top: 36px;
`;

const EffectTitle = styled.h4`
  color: ${colors.darkblue};
  padding: 10px;
  padding-left: 12px;
  background-color: ${colors.skyblue};
  margin-top: 36px;
  border-radius: 10px;
  display: flex;
  align-items: center;
`;

const Description = styled.div`
  color: ${colors.gray900};
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
  max-width: 400px;
`;

const ListItem = styled.li`
  background-color: ${colors.lightblue};
  padding: 4px;
  margin-bottom: 10px;
  border-radius: 4px;
  font-size: 16px;
  color: ${colors.gray900};
`;

const ListHeader = styled.h4`
  font-size: 18px;
  margin: 0;
  margin-bottom: 4px;
  color: ${colors.gray900};
`;

const Icon = styled.img`
  height: 22px;
  margin-right: 4px;
`;

const EffectList = ({ effects }) => (
  <List>
    {effects.map((effect, index) => (
      <ListItem key={index}>
        <ListHeader>{Object.keys(effect)[0]}</ListHeader>
        {Object.values(effect)[0]}
      </ListItem>
    ))}
  </List>
);

const ResultStep4 = ({ data, onNext }) => {
  return (
    <>
      {data.prescription2.map((prescription, index) => (
        <div key={index}>
          <SubTitle>{index + 1}. {prescription.drugName}</SubTitle>
          <Description>{prescription.explain}</Description>
          <EffectTitle>
            <Icon src={IdeaIcon} />
            복약 후 기대되는 효과
          </EffectTitle>
          <EffectList effects={prescription.effects} />
        </div>
      ))}
      <ButtonContainer>
        <Button onClick={onNext}>다음 단계</Button>
      </ButtonContainer>
    </>
  );
};

export default ResultStep4;
