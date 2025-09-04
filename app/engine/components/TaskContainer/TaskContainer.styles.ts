import styled from '@emotion/styled';

export const StyledTaskContainer = styled.div<{
  top: number,
  left: number,
  color: string,
  isDragging: boolean
}>`
  position: absolute;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  min-width: 280px;
  border: 3px solid ${(props) => props.color};
  border-radius: 12px;
  padding: 16px;
  background-color: white;
  box-shadow: ${(props) =>
    props.isDragging ? '0 8px 25px rgba(0,0,0,0.3)' : '0 4px 12px rgba(0,0,0,0.1)'};
  cursor: ${(props) => (props.isDragging ? 'grabbing' : 'grab')};
  z-index: ${(props) => (props.isDragging ? 1000 : 1)};
  transform: ${(props) => (props.isDragging ? 'scale(1.02)' : 'scale(1)')};
  transition: ${(props) => (props.isDragging ? 'none' : 'all 0.2s ease')};
`;

export const StyledTaskHeader = styled.div<{ color: string }>`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  padding-bottom: 8px;
  border-bottom: 2px solid ${(props) => props.color}20;
`;

export const ColorCircle = styled.div<{ color: string }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin-right: 8px;
`;

export const TaskTitle = styled.h3<{ color: string }>`
  margin: 0;
  font-size: 16px;
  font-weight: bold;
  color: ${(props) => props.color};
`;

export const ValidateButton = styled.button<{ color: string }>`
  margin-top: 12px;
  background-color: ${(props) => props.color};
  color: white;
  border: none;
  border-radius: 6px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;

  &:hover {
    opacity: 0.9;
    transform: scale(1.05);
  }
`;



