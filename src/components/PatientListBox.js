// src/components/PatientListBox.js
import React from 'react';
import styled from 'styled-components';
import { colors } from '../assets/ui/styles';
import Profile from '../assets/images/profile_image.png';

const Container = styled.div`
  width: 55%;
  height: 80%;
  background-color: ${colors.white};
  display: flex;
  flex-direction: column;
  padding: 16px 24px;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 80%;
    box-sizing: border-box;
    margin-top: 20px;
  }
`;

const Title = styled.h1`
  color: ${colors.darkblue};
  font-weight: 800;
  font-size: 24px;
  text-align: center;
  margin: 10px 0;
`;

const ProfileImage = styled.img`
    height: 36px;
`

const Description = styled.p`
  color: ${colors.gray900};
  font-size: 16px;
  margin-bottom: 20px;
  padding: 0 20px; 
`;

const PatientItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${colors.white};
  padding: 10px 40px;
  margin: 5px 0;
  border-radius: 10px;
  border: 1px solid ${colors.gray300};
`;

const Name = styled.p`
  color: ${colors.gray900};
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 3px;
  margin-left: 20px;
`;

const Birth = styled.p`
  color: ${colors.gray700};
  padding-left: 20px;
`;

const Sex = styled.p`
  color: ${colors.gray700};
  padding-left: 20px;
`;


const PatientListContainer = styled.div`
  overflow: scroll;
`;

const anonymizeName = (name) => {
    if (name.length <= 2) return name.charAt(0) + 'O';
    return name.charAt(0) + 'O' + name.slice(2);
  };

const PatientListBox = ({ patients }) => {
  return (
    <Container>
      <Title>환자리스트</Title>
      <Description>
        의사는 환자의 문진표를 기반으로 생성된 처방 시뮬레이션을 확인할 수 있습니다.
      </Description>
      <PatientListContainer>
        {patients ? (
          patients.map((patient) => (
            <PatientItem key={patient.id}>
                <ProfileImage src={Profile}/>
              <Name>{anonymizeName(patient.name)}</Name>
              <Sex>{patient.sex}</Sex>
              <Birth>{patient.birthdate}</Birth>
            </PatientItem>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </PatientListContainer>
    </Container>
  );
};

export default PatientListBox;
