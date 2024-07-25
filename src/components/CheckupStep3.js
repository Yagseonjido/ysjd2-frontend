import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../assets/ui/styles';
import ProgressBar from './ProgressBar';

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  margin: auto;
  position: relative;
  overflow: auto;
`;

const Content = styled.div`
  padding: 10px 24px;
  background-color: #ffffff;
  border-radius: 8px;
  max-width: 360px;
  width: 100%;
  position: relative;
  letter-spacing: -0.3px;
`;

const Title = styled.h2`
  color: ${colors.darkblue};
  font-weight: 800;
  letter-spacing: -0.5px;
  margin-top: 40px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid ${colors.gray300};
  border-radius: 4px;
  box-sizing: border-box;
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: 700;
  color: ${colors.gray700};
  margin-top: 24px;
  padding-bottom: 4px;
  display: block;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const Button = styled.button`
  background-color: ${colors.darkblue};
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 24px;
  cursor: pointer;
  font-weight: 700;
  font-size: 16px;
  flex: 1;
  margin: 0 5px;

  &:first-child {
    margin-right: 10px;
  }
  &:last-child {
    margin-left: 10px;
  }
`;

const Step3 = ({ formData, setFormData }) => {
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = () => {
    navigate('/questionnaire/step4');
  };

  const handlePrev = () => {
    navigate('/questionnaire/step2');
  };

  return (
    <Container>
      <Content>
        <ProgressBar currentStep={2} />
        <Title>2. 과거 병력</Title>
        
        <Label>과거에 앓았던 질환이 있으신가요?</Label>
        <Input
          type="text"
          name="pastDiseases"
          placeholder="고혈압, 당뇨병 등"
          value={formData.pastDiseases || ''}
          onChange={handleChange}
        />
        
        <Label>현재 복용 중인 약물이 있나요?</Label>
        <Input
          type="text"
          name="currentMedications"
          placeholder="고혈압 약, 하루 1회"
          value={formData.currentMedications || ''}
          onChange={handleChange}
        />
        
        <Label>특정 약물에 알레르기가 있으신가요?</Label>
        <Input
          type="text"
          name="allergies"
          placeholder="페니실린, 아스피린 등"
          value={formData.allergies || ''}
          onChange={handleChange}
        />
        
        <Label>가족 중에 유전성 질환이나 만성 질환을 앓고 있는 분이 있으신가요?</Label>
        <Input
          type="text"
          name="familyHistory"
          placeholder="고혈압, 당뇨병 등"
          value={formData.familyHistory || ''}
          onChange={handleChange}
        />
        
        <ButtonContainer>
          <Button onClick={handlePrev}>이전</Button>
          <Button onClick={handleNext}>다음</Button>
        </ButtonContainer>
      </Content>
    </Container>
  );
};

export default Step3;
