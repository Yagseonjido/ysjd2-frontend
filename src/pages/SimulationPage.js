import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';


const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


function SimulationPage() {
    const { patientId } = useParams();
  return (
    <Container>
        <h1>Hello {patientId}!</h1>
        <p>This is SimulationPage</p>
    </Container>
  );
}

export default SimulationPage;
