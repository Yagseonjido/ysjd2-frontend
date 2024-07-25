import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function PatientResultPage() {
  return (
    <Container>
        <h1>Hello World!</h1>
        <p>This is PatientResultPage</p>
    </Container>
  );
}

export default PatientResultPage;
