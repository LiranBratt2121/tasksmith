import styled from '@emotion/styled';

export const EditorOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1999; /* Below the editor, but above other content */
`;

export const EditorContainer = styled.div`
  background-color: white;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.25);
  z-index: 2000;
  width: 90%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const EditorHeader = styled.h2`
  margin: 0;
  font-size: 24px;
  color: #1f2937;
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 12px;
  margin-bottom: 16px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 20px;
  padding-top: 16px;
  border-top: 1px solid #e5e7eb;
`;

export const EditorButton = styled.button<{ primary?: boolean }>`
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  ${props => props.primary ? `
    background-color: #3b82f6;
    color: white;
    border: none;

    &:hover {
      background-color: #2563eb;
      transform: translateY(-1px);
    }

  ` : `
    background-color: #f0f4f8;
    color: #374151;
    border: 1px solid #d1d5db;

    &:hover {
      background-color: #e5e7eb;
      transform: translateY(-1px);
    }
  `}
`;

export const FieldWrapper = styled.div`
  margin-bottom: 15px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;