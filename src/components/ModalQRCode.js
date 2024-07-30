import React from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import { colors } from '../assets/ui/styles';
import QRCode from 'qrcode.react';
import Logo from '../assets/images/yag_logo.png';

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px;
  box-sizing: border-box;
  z-index: 2000; 
  width: 60vw;
  height: 90vh;
  background-color: ${colors.white};
  border-radius: 36px;
  letter-spacing: -0.5px;
  overflow-y: auto; /* Added to allow vertical scrolling if content overflows */
`;

const Title = styled.h2`
  color: ${colors.darkblue};
  margin-bottom: 20px;
  font-weight: 800;
  font-size: 28px;
`;

const QRCodeContainer = styled.div`
  margin-bottom: 20px;
`;

const Description = styled.div`
  padding: 0px 160px;
  font-size: 18px;
  color: ${colors.gray900};
  margin-bottom: 36px;

  @media (max-width: 1200px) {
    padding: 0px 12px;
  }
`;

const Alert = styled.div`
  padding: 0px 160px;
  font-size: 22px;
  color: ${colors.gray900};
  margin-bottom: 44px;
  text-decoration: underline;

  @media (max-width: 1200px) {
    padding: 0px 12px;
  }
`;

const CloseButton = styled.button`
  background-color: ${colors.darkblue};
  color: ${colors.white};
  font-size: 18px;
  border: none;
  padding: 10px 20px;
  border-radius: 44px;
  cursor: pointer;
  width: 160px;
  font-weight: 800;

  &:hover {
    background-color: ${colors.highlightBlue};
  }
`;

const LogoImage = styled.img`
  height: 40px;
  margin-right: auto; 
`;

const ModalQRCode = ({ isOpen, onRequestClose, qrValue }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="QR Code Modal"
      ariaHideApp={false}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 2000
        },
        content: {
          position: 'relative',
          inset: 'auto',
          padding: 0,
          border: 'none',
          background: 'none',
          overflow: 'visible',
          borderRadius: '8px',
          width: 'auto',
          height: 'auto',
        },
      }}
    >
      <ModalContainer>
        <LogoImage src={Logo} />
        <Title>환자 처방 시뮬레이션 QR 생성</Title>
        <Description>
          QR 코드를 스캔하면, 시뮬레이션 결과 데이터가 포함된 웹 페이지로 이동합니다. 이 웹 페이지에서 상세한 시뮬레이션 결과를 확인할 수 있으며, 필요한 경우 데이터를 저장하거나 인쇄할 수 있습니다.
        </Description>
        <QRCodeContainer>
          <QRCode value={qrValue} size={180} />
        </QRCodeContainer>
        <Alert>
          궁금한 점이나 문제가 발생하면 의료진에게 문의하여 도움을 받으세요.
        </Alert>
        <CloseButton onClick={onRequestClose}>닫기</CloseButton>
      </ModalContainer>
    </Modal>
  );
};

export default ModalQRCode;
