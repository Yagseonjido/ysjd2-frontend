// src/components/QRBox.js
import React from 'react';
import styled from 'styled-components';
import QrCodeGenerator from './QrCodeGenerator';
import { colors } from '../assets/ui/styles';

const Container = styled.div`
  width: 30%;
  height: 80%;
  background-color: ${colors.white};
  display: flex;
  flex-direction: column;
  padding: 16px;
  box-sizing: border-box;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 80%;
    flex-direction: row;
  }
`;

const BoxHeader = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  color: ${colors.darkblue};
  font-weight: 800;
  font-size: 24px;
  margin: 10px 0;
`;

const Description = styled.p`
  color: ${colors.gray900};
  font-size: 16px;
  margin-bottom: 20px;
  text-align: start;
  padding: 0 20px; /* Padding to ensure the text doesn't touch the edges */
`;

const QrContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const QRBox = ({ qrUrl }) => {
  return (
    <Container>
      <BoxHeader>
        <Title>환자 문진표 작성하기</Title>
        <Description>
          해당 서비스는 데모 버전이며, 작성하는 문진표와 제공되는 환자 정보는 실제 개인 정보가 아닙니다.
        </Description>
      </BoxHeader>
      <QrContainer>
        <QrCodeGenerator url={qrUrl} size="mid" />
      </QrContainer>
    </Container>
  );
};

export default QRBox;
