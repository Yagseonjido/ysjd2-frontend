import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Step1 from '../components/ResultStep1';
import Step2 from '../components/ResultStep2';
import Step3 from '../components/ResultStep3';
import Step4 from '../components/ResultStep4';
import Step5 from '../components/ResultStep5'

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  min-height: 100vh;
  margin: auto;
  position: relative;
  overflow: auto;
`;

const Content = styled.div`
  padding: 10px 24px;
  letter-spacing: -0.3px;
  max-width: 360px;
  width: 100%;
  position: relative;
  
`;

function ResultPage() {
  const { patientId, option } = useParams();
  const [data, setData] = useState(null);
  const [step, setStep] = useState(1);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/api/simulation/patient${patientId}/result${option}.json`)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching result:', error));
  }, [patientId, option]);

  if (!data) {
    return <div>Loading...</div>;
  }

  const renderStep = () => {
    switch (step) {
      case 1:
        return <Step1 data={data} onNext={() => setStep(2)} />;
      case 2:
        return <Step2 data={data} onNext={() => setStep(3)} />;
      case 3:
        return <Step3 data={data} onNext={() => setStep(4)} />;
      case 4:
        return <Step4 data={data} onNext={() => setStep(5)} />;
      case 5:
        return <Step5 data={data} />;
      

      default:
        return <div>Invalid step</div>;
    }
  };

  return (
    <Container>
      <Content>
        {renderStep()}
      </Content>
    </Container>
  );
}

export default ResultPage;
