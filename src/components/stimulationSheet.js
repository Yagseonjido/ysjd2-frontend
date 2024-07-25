import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Xarrow from 'react-xarrows';
import { colors } from '../assets/ui/styles';
import Conclusion from './Conclusion';
import MedicationList from './MedicationList';
import SideEffectList from './SideEffectList';

const Section = styled.div`
  flex: 4;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.gray100};
  height: 100vh;
  overflow: auto;
`;

const Content = styled.div`
  text-align: center;
  letter-spacing: -0.5px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Title = styled.h1`
  text-align: start;
  color: ${colors.gray700};
  font-weight: 500;
  font-size: 24px;
  letter-spacing: -1px;
`;

const HighlightTitle = styled.span`
  color: ${colors.darkblue};
  font-weight: 700;
  font-size: 40px;
  align-items: center;
  justify-content: center;
`;

const Headers = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px 50px;
  box-sizing: border-box;

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

const Body = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: start;
  position: relative;
`;

const Column = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin: 20px 0;
`;

const StimulationSheet = ({ patientId, patientName }) => {
  const [data, setData] = useState(null);
  const [activeEdges, setActiveEdges] = useState([]);
  const [selectedNode, setSelectedNode] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/api/simulation/patient${patientId}/simulationResult.json`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        highlightEdges('prescription1-1', data.edges);
      })
      .catch((error) => console.error('Error fetching simulationResult info:', error));
  }, []);

  const highlightEdges = (startNodeId, edges) => {
    const visited = new Set();
    const edgesToHighlight = [];
    const nodesToHighlight = new Set([startNodeId]);
    const stack = [startNodeId];

    while (stack.length > 0) {
      const node = stack.pop();
      if (!visited.has(node)) {
        visited.add(node);
        const outgoingEdges = edges.filter(edge => edge.from === node);
        outgoingEdges.forEach(edge => {
          edgesToHighlight.push(edge);
          nodesToHighlight.add(edge.to);
          stack.push(edge.to);
        });
      }
    }

    setActiveEdges(edgesToHighlight);
    setSelectedNode(startNodeId);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  const { nodes, edges, review } = data;

  return (
    <Section>
      <Content>
        <Headers>
          <div>
            <Title>
              Prescribing Cascades <br />
              <HighlightTitle>Simulation</HighlightTitle>
            </Title>
          </div>
          <Conclusion nodes={nodes.filter((node) => node.id.startsWith('reaction'))} review={review} />
        </Headers>
        <Body>
          <Column>
            <MedicationList 
              order={1}
              nodes={nodes.filter((node) => node.id.startsWith('prescription1'))}
              onCardClick={(nodeId) => highlightEdges(nodeId, edges)}
              selectedNode={selectedNode}
            />
            <SideEffectList 
              nodes={nodes.filter((node) => node.id.startsWith('reaction1'))}
              onCardClick={(nodeId) => highlightEdges(nodeId, edges)}
              selectedNode={selectedNode}
            />
          </Column>
          <Column>
            <MedicationList 
              order={2}
              nodes={nodes.filter((node) => node.id.startsWith('prescription2'))}
              onCardClick={(nodeId) => highlightEdges(nodeId, edges)}
              selectedNode={selectedNode}
            />
            <SideEffectList 
              nodes={nodes.filter((node) => node.id.startsWith('reaction2'))}
              onCardClick={(nodeId) => highlightEdges(nodeId, edges)}
              selectedNode={selectedNode}
            />
          </Column>
          {!isModalOpen && edges.map((edge) => {
            const startNode = nodes.find(node => node.id === edge.from);
            const endNode = nodes.find(node => node.id === edge.to);
            let color = colors.highlightRed; 

            if (startNode.id.startsWith('reaction') && endNode.id.startsWith('prescription')) {
              color = colors.highlightBlue;
            }

            if (activeEdges.some(activeEdge => activeEdge.from === edge.from && activeEdge.to === edge.to)) {
              if (startNode.id.startsWith('reaction') && endNode.id.startsWith('prescription')) {
                color = colors.darkblue;
              } else {
                color = colors.red;
              }
            }

            return (
              <Xarrow
                key={`${edge.from}-${edge.to}`}
                start={edge.from}
                end={edge.to}
                color={color}
                strokeWidth={2}
                headSize={6}
                startAnchor="right"
                endAnchor="left"
                monitorDOMchanges={true}
                zIndex={isModalOpen ? -1 : (activeEdges.some(activeEdge => activeEdge.from === edge.from && activeEdge.to === edge.to) ? 1 : 0)}
              />
            );
          })}
        </Body>
      </Content>
    </Section>
  );
};

export default StimulationSheet;
