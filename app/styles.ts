// styles.ts
import styled from '@emotion/styled';

export const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f3f4f6;
  overflow: hidden;
  user-select: none;
`;

export const Toolbar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background-color: #1f2937;
  display: flex;
  align-items: center;
  padding: 0 20px;
  gap: 10px;
  z-index: 1000;
`;

export const ToolbarButton = styled.button`
  padding: 8px 16px;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  
  &:hover {
    opacity: 0.9;
  }
`;

export const AddTaskButton = styled(ToolbarButton)<{ color: string }>`
  background-color: ${(props) => props.color};
`;

export const SharePrintContainer = styled.div`
  margin-left: auto;
  color: white;
  display: flex;
  gap: 10px;
`;

export const ShareButton = styled(ToolbarButton)`
  background-color: #8b5cf6;
`;

export const PrintButton = styled(ToolbarButton)`
  background-color: #6b7280;
`;

export const ClearButton = styled(ToolbarButton)`
  background-color: #c90b0bff;
`;

export const CanvasContainer = styled.div`
  padding-top: 60px;
  height: 100%;
  position: relative;
`;