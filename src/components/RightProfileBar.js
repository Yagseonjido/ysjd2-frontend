import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from '../assets/ui/styles';
import ModalQRCode from './ModalQRCode';

const Section = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  background-color: ${colors.white};
  border-left: 1px solid ${colors.gray300};
  min-width: 180px;
  height: 100vh;
  overflow-x: hidden;
`;

const Content = styled.div`
  text-align: left;
  letter-spacing: -0.5px;
  width: 100%;
  padding: 16px;
  height: 50%;
  overflow: scroll;
  overflow-x: hidden;
`;

const Header = styled.h1`
  font-size: 18px;
  letter-spacing: -0.5px;
  padding-left: 16px;
  padding-bottom: 8px;
  width: 100%;
  text-align: start;
  color: ${colors.darkblue};
  border-bottom: 1px solid ${colors.gray300};
`;

const PrescriptionButton = styled.div`
  display: flex;
  align-items: center;
  background-color: ${colors.white};
  color: ${colors.gray900};
  padding: 4px 16px;
  margin: 8px 0;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  width: 100%;
  text-align: left;

  &:hover {
    background-color: ${colors.gray100};
  }
`;

const Checkbox = styled.input`
  margin-right: 8px;
`;

const SideEffectList = styled.div`
  background-color: ${colors.gray100};
  padding: 2px;
  margin-left: 16px;
  font-size: 12px;
  border-radius: 4px;
  width: 100%;
`;

const SideEffectItem = styled.div`
  display: flex;
  align-items: center;
  color: ${colors.gray700};
  margin: 2px 0;
`;

const SendButton = styled.button`
  background-color: ${colors.darkblue};
  color: ${colors.white};
  border: none;
  padding: 12px 16px;
  border-radius: 4px;
  cursor: pointer;
  margin: 16px;
  width: 82%;

  &:hover {
    background-color: ${colors.highlightBlue};
  }
`;

const RightProfileBar = ({ patientInfo, simulationData }) => {
  const [selectedPrescriptions, setSelectedPrescriptions] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [qrValue, setQrValue] = useState('');

  const handlePrescriptionClick = (prescriptionId) => {
    const newSelectedPrescriptions = { ...selectedPrescriptions };
    newSelectedPrescriptions[prescriptionId] = !newSelectedPrescriptions[prescriptionId];

    if (newSelectedPrescriptions[prescriptionId]) {
      const expandNestedPrescriptions = (nodeId) => {
        const relevantEdges = simulationData.edges.filter(edge => edge.from === nodeId);
        relevantEdges.forEach(edge => {
          newSelectedPrescriptions[edge.to] = true;
          expandNestedPrescriptions(edge.to);
        });
      };
      expandNestedPrescriptions(prescriptionId);
    }

    setSelectedPrescriptions(newSelectedPrescriptions);
  };

  const handleSideEffectClick = (sideEffectId) => {
    const newSelectedPrescriptions = { ...selectedPrescriptions };
    newSelectedPrescriptions[sideEffectId] = !newSelectedPrescriptions[sideEffectId];
    setSelectedPrescriptions(newSelectedPrescriptions);
  };

  const renderSideEffectsAndPrescriptions = (node) => {
    const relevantEdges = simulationData.edges.filter(edge => edge.from === node.id);
    return relevantEdges.map(edge => {
      const targetNode = simulationData.nodes.find(n => n.id === edge.to);
      return (
        <div key={targetNode.id}>
          <SideEffectItem>
            <Checkbox
              type="checkbox"
              checked={selectedPrescriptions[targetNode.id] || false}
              onChange={() => handleSideEffectClick(targetNode.id)}
            />
            {targetNode.labelKo ? `${targetNode.labelKo} (${targetNode.labelEn})` : targetNode.label}
          </SideEffectItem>
          {selectedPrescriptions[targetNode.id] && (
            <SideEffectList>
              {renderSideEffectsAndPrescriptions(targetNode)}
            </SideEffectList>
          )}
        </div>
      );
    });
  };

  const handleSendClick = () => {
    const selectedScenario = {
      prescription1: [],
      reaction1: [],
      prescription2: [],
      reaction2: []
    };

    Object.keys(selectedPrescriptions).forEach(key => {
      if (selectedPrescriptions[key]) {
        const node = simulationData.nodes.find(n => n.id === key);
        if (node.id.startsWith('prescription1')) {
          selectedScenario.prescription1.push(node);
        } else if (node.id.startsWith('reaction1')) {
          selectedScenario.reaction1.push(node);
        } else if (node.id.startsWith('prescription2')) {
          selectedScenario.prescription2.push(node);
        } else if (node.id.startsWith('reaction2')) {
          selectedScenario.reaction2.push(node);
        }
      }
    });

    console.log('Selected Scenario:', selectedScenario);

    // 선택된 처방과 부작용만 필터링
    const filteredScenario = {
      prescription1: selectedScenario.prescription1.filter(prescription => selectedPrescriptions[prescription.id]),
      reaction1: selectedScenario.reaction1.filter(reaction => selectedPrescriptions[reaction.id]),
      prescription2: selectedScenario.prescription2.filter(prescription => selectedPrescriptions[prescription.id]),
      reaction2: selectedScenario.reaction2.filter(reaction => selectedPrescriptions[reaction.id]),
    };

    console.log('Filtered Scenario:', filteredScenario);

    if (patientInfo) {
      setQrValue(`${process.env.REACT_APP_API_BASE_URL}/result/${patientInfo.patientId}`);
      setIsModalOpen(true);

      const payload = { id: patientInfo.patientId, scenario: filteredScenario };
      console.log('Sending payload:', payload);
      fetch(`${process.env.REACT_APP_API_BASE_URL}${process.env.REACT_APP_API_POST_SIMULATION_SELECTED}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })
        .then(response => response.text())
        .then(result => {
          console.log('Successfully sent prescription:', result);
          if (result === 'Success') {
            // Handle success
          }
        })
        .catch(error => {
          console.error('Error sending prescription:', error);
        });
    }
  };

  return (
    <Section>
      <Content>
        <Header>처방 내역 선택</Header>
        {simulationData && simulationData.nodes
          .filter(node => node.id.startsWith('prescription1'))
          .map(node => (
            <div key={node.id}>
              <PrescriptionButton
                onClick={() => handlePrescriptionClick(node.id)}
              >
                <Checkbox
                  type="checkbox"
                  checked={selectedPrescriptions[node.id] || false}
                  onChange={() => handlePrescriptionClick(node.id)}
                />
                {node.labelKo} ({node.labelEn})
              </PrescriptionButton>
              {selectedPrescriptions[node.id] && (
                <SideEffectList>
                  {renderSideEffectsAndPrescriptions(node)}
                </SideEffectList>
              )}
            </div>
          ))}
      </Content>
      <SendButton onClick={handleSendClick}>환자에게 전송</SendButton>
      <ModalQRCode 
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        qrValue={qrValue}
      />
    </Section>
  );
};

export default RightProfileBar;
