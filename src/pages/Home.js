// src/pages/Home.js
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import QRBox from '../components/QRBox';
import PatientListBox from '../components/PatientListBox';
import styled from 'styled-components';
import { colors } from '../assets/ui/styles';

const Content = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding-top: 100px;
  letter-spacing: -0.2px;
  box-sizing: border-box;
  background-color: ${colors.gray100};

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/api/patientList.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.error('Error fetching patient list:', error));
  }, []);

  const qrUrl = `${process.env.REACT_APP_BASE_URL}${process.env.PUBLIC_URL}${process.env.REACT_APP_PATH}`;

  return (
    <div>
      <Header />
      <Content>
        <QRBox qrUrl={qrUrl} />
        <PatientListBox patients={data ? data.patientList : null} />
      </Content>
    </div>
  );
};

export default Home;
