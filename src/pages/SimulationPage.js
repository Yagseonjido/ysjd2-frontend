import React, { useEffect, useState } from 'react';
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
  const [simulationData, setSimulationData] = useState(null);
  const [patientInfo, setPatientInfo] = useState(null);

  useEffect(() => {
    const fetchSimulationData = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/simulation/result`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id: patientId, name: patientName }),
        });

        const text = await response.text(); // 응답을 텍스트 형식으로 받기
        console.log('Server response (simulation result):', text);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = JSON.parse(text); // 받은 텍스트를 JSON으로 파싱
        setSimulationData(data);
      } catch (error) {
        console.error('Error fetching simulation data:', error);
      }
    };

    const fetchPatientInfo = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/simulation/info/${patientId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const text = await response.text(); // 응답을 텍스트 형식으로 받기
        console.log('Server response (patient info):', text);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = JSON.parse(text); // 받은 텍스트를 JSON으로 파싱
        setPatientInfo(data);
      } catch (error) {
        console.error('Error fetching patient info:', error);
      }
    };

    fetchSimulationData();
    fetchPatientInfo();
  }, [patientId, patientName]);

  if (!simulationData || !patientInfo) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <LeftProfileBar patientInfo={patientInfo} />
      <StimulationSheet data={simulationData} />
      <RightProfileBar patientInfo={patientInfo} simulationData={simulationData}/>
    </Container>
  );
}

export default SimulationPage;
