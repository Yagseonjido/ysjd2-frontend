import React from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import MedicationCard from './MedicationCard';
import { colors } from '../assets/ui/styles';
import AddIcon from '../assets/icons/add_icon.png';

const MedicationContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const AddIconImage = styled.img`
  height: 16px;
  margin-right: 4px;
`;

const ListHeader = styled.h4`
  margin: 0;
  font-size: 14px;
  text-align: start;
  color: ${colors.gray900};
  border-top: 1px solid ${colors.gray500};
  border-bottom: 1px solid ${colors.gray500};
  padding: 4px 1px;
`;

const AddMedication = styled.div`
  display: flex;
  background-color: ${colors.gray300};
  color: ${colors.gray900};
  padding: 10px 30px;
  font-size: 14px;
  font-weight: 700;
  border-radius: 8px;
  justify-content: center;
  margin-top: 12px;
  cursor: pointer;
`;

const MedicationList = ({ order, nodes, onCardClick, selectedNode }) => {
  const sortedNodes = selectedNode
    ? [...nodes.filter(node => node.id === selectedNode), ...nodes.filter(node => node.id !== selectedNode)]
    : nodes;

  return (
    <MedicationContainer>
      <ListHeader>처방({order})</ListHeader>
      {sortedNodes.map((node) => (
        <CSSTransition
          key={node.id}
          timeout={300}
          classNames="fade"
        >
          <MedicationCard 
            key={node.id} 
            id={node.id}
            labelKo={node.labelKo}
            labelEn={node.labelEn}
            drugId={node.drugId}
            drugType={node.drugType}
            efficacy={node.efficacy}
            onClick={() => onCardClick(node.id)}
            className={selectedNode === node.id ? 'highlight' : ''}
          />
        </CSSTransition>
      ))}
      <AddMedication>
        <AddIconImage src={AddIcon} />
        처방 입력하기
      </AddMedication>
    </MedicationContainer>
  );
};

export default MedicationList;
