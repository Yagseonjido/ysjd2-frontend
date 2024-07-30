// ResultStep3.js
import React from 'react';
import styled from 'styled-components';
import { colors } from '../assets/ui/styles';
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

const ResultStep3 = ({ data, onNext }) => {
  return (
    <>
      {data.reaction1 && data.reaction1.length > 0 ? (
        data.reaction1.map((reaction, index) => (
          <div key={index}>
            <SubTitle>부작용. {reaction.label}</SubTitle>
            {reaction.symptom && reaction.symptom.length > 0 && (
              <List>
                {reaction.symptom.map((symptom, symptomIndex) => (
                  <ListItem key={symptomIndex}>
                    <ListHeader>{Object.keys(symptom)[0]}</ListHeader>
                    {Object.values(symptom)[0]}
                  </ListItem>
                ))}
              </List>
            )}
            <Description>{reaction.explain}</Description>
            {reaction.goodHabit && reaction.goodHabit.length > 0 && (
              <>
                <EffectTitle>
                  <Icon src={ThumbUpIcon} />
                  이렇게 하면 좋아요
                </EffectTitle>
                <List>
                  {reaction.goodHabit.map((habit, habitIndex) => (
                    <ListItem key={habitIndex}>
                      <ListHeader>{Object.keys(habit)[0]}</ListHeader>
                      {Object.values(habit)[0]}
                    </ListItem>
                  ))}
                </List>
              </>
            )}
            {reaction.badHabit && reaction.badHabit.length > 0 && (
              <>
                <EffectTitle>
                  <Icon src={ThumbDownIcon} />
                  이렇게 하면 안돼요
                </EffectTitle>
                <List>
                  {reaction.badHabit.map((habit, habitIndex) => (
                    <ListItem key={habitIndex}>
                      <ListHeader>{Object.keys(habit)[0]}</ListHeader>
                      {Object.values(habit)[0]}
                    </ListItem>
                  ))}
                </List>
              </>
            )}
          </div>
        ))
      ) : (
        <p>부작용 정보가 없습니다.</p>
      )}
      <ButtonContainer>
        <Button onClick={onNext}>다음 단계</Button>
      </ButtonContainer>
    </>
  );
};

export default ResultStep3;
