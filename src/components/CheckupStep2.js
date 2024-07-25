import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../assets/ui/styles';
import ProgressBar from './ProgressBar';

const Container = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  margin: auto;
  position: relative;
  overflow: hidden;
`;

const Content = styled.div`
  padding: 10px 24px;
  background-color: #ffffff;
  border-radius: 8px;
  max-width: 420px;
  width: 100%;
  position: relative;
  letter-spacing: -0.3px;
  box-sizing: border-box; /* 패딩 추가 */
`;

const FormContainer = styled.div`
  padding: 0 20px;
`;

const Title = styled.h2`
  color: ${colors.darkblue};
  font-weight: 800;
  letter-spacing: -0.5px;
  margin-top: 40px;
`;

const Subtitle = styled.h3`
  color: ${colors.darkblue};
  margin-top: 40px;
  margin-bottom: 10px;
  padding-bottom: 0px;
`;

const Guide = styled.p`
  color: ${colors.gray700};
  margin-top: 2px;
  padding-left: 2px;
  margin-bottom: 10px;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  justify-content: space-between;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid ${colors.gray300};
  border-radius: 4px;
  box-sizing: border-box;
`;

const InputHeightWeight = styled.input`
  width: calc(50% - 12px); /* 패딩과 동일한 값 */
  padding: 10px;
  border: 1px solid ${colors.gray300};
  border-radius: 4px;
  box-sizing: border-box;
`;

const InputBasic = styled.input`
  width: calc(50% - 12px); /* 패딩과 동일한 값 */
  padding: 10px;
  border: 1px solid ${colors.gray300};
  border-radius: 4px;
  box-sizing: border-box;
`;

const Unit = styled.span`
  margin-left: 8px;
  font-size: 16px;
  color: ${colors.gray700};
`;

const MaskedNumbers = styled.span`
  padding-left: 4px;
  font-size: 18px;
  color: ${colors.gray900};
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: 700;
  color: ${colors.gray700};
  margin-top: 8px;
  padding-bottom: 4px;
  display: block;
`;

const LabelBasic = styled.label`
  width: 16%;
  font-size: 16px;
  margin-right: 10px;
  font-weight: 700;
  text-align: right;
  color: ${colors.gray700};
`;

const IdContainer = styled.div`
  display: flex;
  align-items: center;
`;

const IdInput = styled.input`
  width: calc(50% - 12px); /* 패딩과 동일한 값 */
  padding: 10px;
  border: 1px solid ${colors.gray300};
  border-radius: 4px;
  box-sizing: border-box;

  &:nth-child(3) {
    width: 12%;
  }
`;

const Hyphen = styled.span`
  padding: 0 10px;
  font-size: 24px;
  color: ${colors.gray700};
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

const Step2 = ({ formData, setFormData }) => {
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = () => {
    navigate('/questionnaire/step3');
  };

  const handlePrev = () => {
    navigate('/questionnaire/step1');
  };

  return (
    <Container>
      <Content>
        <ProgressBar currentStep={1} />
        <FormContainer>
          <Title>1. 기본 정보</Title>
          <Subtitle>환자 개인 정보</Subtitle>
          <Label>이름</Label>
          <Input
            type="text"
            name="name"
            placeholder="이름"
            value={formData.name || ''}
            onChange={handleChange}
          />
          <Label>주민등록번호(생년월일)</Label>
          <IdContainer>
            <IdInput
              type="text"
              name="birthdate"
              value={formData.birthdate || ''}
              onChange={handleChange}
              pattern="[0-9]*"
              inputMode="numeric"
              maxLength="6"
              onKeyDown={(e) => {
                if (!/[0-9]/.test(e.key) && e.key !== 'Backspace' && e.key !== 'Delete') {
                  e.preventDefault();
                }
              }}
            />
            <Hyphen>-</Hyphen>
            <IdInput
              type="text"
              name="genderNumber"
              pattern="[0-9]*"
              inputMode="numeric"
              maxLength="1"
              value={formData.genderNumber || ''}
              onChange={handleChange}
            />
            <MaskedNumbers>●●●●●●</MaskedNumbers>
          </IdContainer>
          <Subtitle>기초 건강 상태</Subtitle>
          <Guide>가장 최근 측정한 건강 기록을 적어주세요.</Guide>
          <InputContainer>
            <LabelBasic>키</LabelBasic>
            <InputHeightWeight
              type="text"
              name="height"
              pattern="[0-9]*"
              inputMode="numeric"
              value={formData.height || ''}
              onChange={handleChange}
            />
            <Unit>cm</Unit>
          </InputContainer>
          <InputContainer>
            <LabelBasic>몸무게</LabelBasic>
            <InputHeightWeight
              type="text"
              name="weight"
              pattern="[0-9]*"
              inputMode="numeric"
              value={formData.weight || ''}
              onChange={handleChange}
            />
            <Unit>kg</Unit>
          </InputContainer>
          <InputContainer>
            <LabelBasic>혈압</LabelBasic>
            <InputBasic
              type="text"
              name="bloodPressureSystolic"
              placeholder="수축기"
              pattern="[0-9]*"
              inputMode="numeric"
              value={formData.bloodPressureSystolic || ''}
              onChange={handleChange}
            />
            <Hyphen>/</Hyphen>
            <InputBasic
              type="text"
              name="bloodPressureDiastolic"
              placeholder="이완기"
              pattern="[0-9]*"
              inputMode="numeric"
              value={formData.bloodPressureDiastolic || ''}
              onChange={handleChange}
            />
            <Unit>mmHg</Unit>
          </InputContainer>
          <Subtitle>운동량과 생활 패턴</Subtitle>
          <Label>운동량</Label>
          <Input
            type="text"
            name="exercise"
            placeholder="주 3회, 1시간"
            value={formData.exercise || ''}
            onChange={handleChange}
          />
          <Label>음주</Label>
          <Input
            type="text"
            name="alcohol"
            placeholder="주 2회, 소주 1병"
            value={formData.alcohol || ''}
            onChange={handleChange}
          />
          <Label>담배</Label>
          <Input
            type="text"
            name="smoking"
            placeholder="하루 1 갑"
            value={formData.smoking || ''}
            onChange={handleChange}
          />
          <ButtonContainer>
            <Button onClick={handlePrev}>이전</Button>
            <Button onClick={handleNext}>다음</Button>
          </ButtonContainer>
        </FormContainer>
      </Content>
    </Container>
  );
};

export default Step2;
