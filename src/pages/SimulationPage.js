// src/pages/SimulationPage.js
import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import LeftProfileBar from '../components/LeftProfileBar';
import RightProfileBar from '../components/RightProfileBar';
import StimulationSheet from '../components/stimulationSheet';

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

function SimulationPage() {
  const { patientId } = useParams();
  const location = useLocation();
  const { patientName } = location.state || {};

  return (
    <Container>
      <LeftProfileBar patientId={patientId} patientName={patientName} />
      <StimulationSheet patientId={patientId} patientName={patientName} />
      <RightProfileBar patientId={patientId} patientName={patientName} />
    </Container>
  );
}

export default SimulationPage;
