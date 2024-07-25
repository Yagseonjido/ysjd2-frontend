import React from 'react';
import styled from 'styled-components';
import { colors } from '../assets/ui/styles';
import LogoOnly from '../assets/images/logo_only.png';

const ConclusionWrapper = styled.div`
  background-color: ${colors.white};
  color: ${colors.gray900};
  display: flex;
  flex-direction: column;
  align-items: start;
  text-align: start;
  width: 60%;
  margin-left: 20px;
  font-size: 12px;
  border-radius: 12px;
  padding: 16px 20px;
  @media (max-width: 1200px) {
    width: 90%;
  }
`;

const ConclusionTitle = styled.h2`
  color: ${colors.darkblue};
  margin: 4px 0px;
  display: flex;
  align-items: center;
`;

const LogoOnlyImage = styled.img`
  height: 20px;
  margin-right: 8px;
`;

const Conclusion = ({ review }) => {
  return (
    <ConclusionWrapper>
      <ConclusionTitle>
        <LogoOnlyImage src={LogoOnly} />
        종합적 판단과 이유
      </ConclusionTitle>
      {review}
    </ConclusionWrapper>
  );
};

export default Conclusion;
