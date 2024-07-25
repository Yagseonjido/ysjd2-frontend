import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../assets/images/yag_logo.png';
import Landing from '../assets/images/landing_image.png';
import LandingBG from '../assets/images/landing_bg_image.png';
import { colors } from '../assets/ui/styles';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  margin: auto;
  position: relative;
  overflow: auto;
  overflow-x: hidden;
`;

const Content = styled.div`
  padding: 10px 24px;
  border-radius: 8px;
  max-width: 360px;
  width: 100%;
  position: relative;
`;

const LogoImage = styled.img`
  height: 36px;
  margin-bottom: 20px;
`;

const LandingImage = styled.img`
  height: 150px;
  margin-bottom: 30px;
  margin-left: auto; 
  display: block;
`;

const LandingBGImage = styled.img`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Title = styled.h2`
  color: ${colors.darkblue};
  font-weight: 800;
  letter-spacing: -0.5px;
  margin-bottom: 20px;
`;

const Description = styled.p`
  color: ${colors.gray900};
  margin-bottom: 20px;
  line-height: 1.4;
  letter-spacing: -0.5px;
`;

const Button = styled.button`
  background-color: ${colors.darkblue};
  color: white;
  border: none;
  width: 80%;
  padding: 12px;
  border-radius: 24px;
  cursor: pointer;
  font-weight: 700;
  font-size: 16px;
  margin: auto; /* 버튼을 가운데 정렬 */
  display: block; /* 버튼을 블록 요소로 설정 */
`;

const Step1 = ({ formData, setFormData }) => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/questionnaire/step2');
  };

  return (
    <Container>
      <LandingBGImage src={LandingBG}/>
      <Content>
        <LogoImage src={Logo} alt="Logo" />
        <Title>맞춤형 처방<br />시뮬레이션 서비스</Title>
        <Description>
          환자분의 건강 상태를 가장 잘 이해하고 최적의 치료 계획을 제공하기 위해, 
          간단한 문진표를 작성해 주세요. 
        </Description>
        <Description>
          미리 작성된 문진표를 통해 진료 시간을 
          단축하고, 더 정확한 진단과 맞춤형 처방을 받을 수 있습니다. 또한, 잠재적인 약물 
          부작용을 미리 예측하여 안전한 치료를 
          도와드립니다.
        </Description>
        <Description>
          문진표의 내용은 철저히 보호되며, 진료 외의 다른 용도로는 사용되지 않습니다. 지금 바로 시작해 보세요!
        </Description>
      
        <LandingImage src={Landing} alt="LandingImage" />
        <Button onClick={handleNext}>문진표 작성하기</Button>
      </Content>
    </Container>
  );
};

export default Step1;
