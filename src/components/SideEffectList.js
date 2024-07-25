import React from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import SideEffectCard from './SideEffectCard';
import { colors } from '../assets/ui/styles';

const SideEffectContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ListHeader = styled.h4`
  margin: 0;
  font-size: 14px;
  text-align: start;
  color: ${colors.gray900};
  border-top: 1px solid ${colors.gray500};
  border-bottom: 1px solid ${colors.gray500};
  padding: 4px 16px;
`

const SideEffectList = ({ nodes, onCardClick, selectedNode }) => {
  const sortedNodes = selectedNode
    ? [...nodes.filter(node => node.id === selectedNode), ...nodes.filter(node => node.id !== selectedNode)]
    : nodes;

  return (
    <SideEffectContainer>
      <ListHeader>예상 부작용</ListHeader>
      {sortedNodes.map((node) => (
        <CSSTransition
          key={node.id}
          timeout={300}
          classNames="fade"
        >
          <SideEffectCard 
            key={node.id} 
            id={node.id}
            label={node.label}
            explain={node.explain}
            alert={node.alert}
            onClick={() => onCardClick(node.id)}
            className={selectedNode === node.id ? 'highlight' : ''}
          />
        </CSSTransition>
      ))}
    </SideEffectContainer>
  );
};

export default SideEffectList;
