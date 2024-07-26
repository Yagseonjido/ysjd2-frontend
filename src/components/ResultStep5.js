// ResultStep5.js
import React from 'react';
import styled from 'styled-components';
import { colors } from '../assets/ui/styles';
import HeaderBar from '../assets/images/header_bar4.png';
import ThumbUpIcon from '../assets/icons/thumb_up.png'; 
import ThumbDownIcon from '../assets/icons/thumb_down.png'; 

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

const HeaderBarImage = styled.img`
  height: 100px;
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

const DataList = ({ title, icon, data }) => (
  <>
    <EffectTitle>
      <Icon src={icon} />
      {title}
    </EffectTitle>
    <List>
      {data.map((item, index) => (
        <ListItem key={index}>
          <ListHeader>{Object.keys(item)[0]}</ListHeader>
          {Object.values(item)[0]}
        </ListItem>
      ))}
    </List>
  </>
);

const ResultStep5 = ({ data }) => {
  return (
    <>
      <HeaderBarImage src={HeaderBar} />
      {data.reaction2.map((reaction, index) => (
        <div key={index}>
          <SubTitle>부작용. {reaction.label}</SubTitle>
          <List>
            {reaction.symptom.map((symptom, symIndex) => (
              <ListItem key={symIndex}>
                <ListHeader>{Object.keys(symptom)[0]}</ListHeader>
                {Object.values(symptom)[0]}
              </ListItem>
            ))}
          </List>
          <Description>{reaction.explain}</Description>
          <DataList title="이렇게 하면 좋아요" icon={ThumbUpIcon} data={reaction.goodHabit} />
          <DataList title="이렇게 하면 안돼요" icon={ThumbDownIcon} data={reaction.badHabit} />
        </div>
      ))}
      <ButtonContainer>
        <Button>PDF로 다운로드</Button>
      </ButtonContainer>
    </>
  );
};

export default ResultStep5;
