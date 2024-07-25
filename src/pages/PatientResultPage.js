import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import Logo from '../assets/images/yag_logo.png';
import LandingBG from '../assets/images/landing_bg_image_blue.png';
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
`;

const LogoImage = styled.img`
  height: 36px;
  margin-bottom: 20px;
`;

const LandingBGImage = styled.img`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Content = styled.div`
  padding: 10px 24px;
  border-radius: 18px;
  letter-spacing: -0.3px;
  max-width: 360px;
  width: 100%;
  position: relative;
  border: 2px solid ${colors.white};
  background-color: rgba(255, 255, 255, 0.5);
`;

const Description = styled.p`
  color: ${colors.gray900};
  margin-bottom: 20px;
  line-height: 1.4;
  letter-spacing: -0.5px;
`;

const Title = styled.h2`
  color: ${colors.darkblue};
  font-weight: 800;
  letter-spacing: -0.5px;
  margin-bottom: 20px;
`;

const Option = styled.div`
  background: linear-gradient(to bottom, #F2F9F8, #E3EAF7);
  padding: 16px;
  border-radius: 10px;
  margin-bottom: 8px;
  font-size: 14px;
  border: 2px solid ${colors.borderBlue};
  color: ${colors.gray900};
  cursor: pointer;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
`;

const OptionHeader = styled.h2`
  margin: 0;
  margin-bottom: 6px;
  color: ${colors.darkblue};
  font-size: 16px;
`;

const StaticDescription = styled.p`
  margin: 0;
`;

const AnimatedDescription = styled.div`
  margin: 0;
  white-space: pre-wrap;
  overflow: hidden;
`;

const options = [
  {
    header: "간단한 정보만 주세요",
    description: "복용 시에 부종을 일으킬 수 있어요",
    value: 1
  },
  {
    header: "쉽고 친절하게 설명해줘요",
    description: "이 약을 먹으면 발이나 손이 붓는 부작용이 생길 수 있어요. 예를 들어, 발이 퉁퉁 붓거나 손가락이 빵빵해지는 느낌이 들 수 있어요.",
    value: 2
  },
  {
    header: "전문적이고 깊이 있는 정보를 원해요.",
    description: "이 약은 전해질 불균형으로 인한 부종을 유발할 수 있습니다. 이러한 부작용시에 전해질 수치 검사를 통해 이상 여부를 확인하고, 필요시 전해질 보충이나 이뇨제 처방 등 적절한 의료 조치를 받아야 합니다.",
    value: 3
  }
];

function PatientResultPage() {
  const navigate = useNavigate();
  const { patientId } = useParams();
  const [hoveredOption, setHoveredOption] = useState(null);

  const handleOptionClick = (optionValue) => {
    const url = `/result/${patientId}/${optionValue}`;
    navigate(url);
  };

  return (
    <Container>
      <LandingBGImage src={LandingBG} />
      <Content>
        <LogoImage src={Logo} alt="Logo" />
        <Title>결과 공유</Title>
        <Description>
          시뮬레이션 결과를 확인하는 페이지는 환자의 건강 리터러시 수준에 맞춰 다르게 구성될 것입니다. <br /><br />
          아래 세 가지 예시 중 하나를 선택해주세요:
        </Description>
        {options.map((option) => (
          <Option
            key={option.value}
            onClick={() => handleOptionClick(option.value)}
            onMouseEnter={() => setHoveredOption(option.value)}
            onMouseLeave={() => setHoveredOption(null)}
          >
            <OptionHeader>{option.header}</OptionHeader>
            {hoveredOption === option.value ? (
              <AnimatedDescription>
                <Typewriter
                  options={{
                    strings: [option.description],
                    autoStart: true,
                    delay: 30,
                    cursor: ""
                  }}
                />
              </AnimatedDescription>
            ) : (
              <StaticDescription>{option.description}</StaticDescription>
            )}
          </Option>
        ))}
      </Content>
    </Container>
  );
}

export default PatientResultPage;
