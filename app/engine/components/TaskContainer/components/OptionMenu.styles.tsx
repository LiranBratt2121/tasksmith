import styled from "@emotion/styled";

export const OptionMenu = styled.div`
  cursor: pointer;
  font-size: 28px;
  font-weight: bolder;
  transition: transform 0.3s ease-in-out; 
  z-index: 100;
  position: relative;

  &:hover {
    opacity: 0.9;
  }
`

export const Dropdown = styled.div`
  position: absolute;
  top: 30px;
  right: -10px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.15);
  
  display: flex;
  flex-direction: column;
  z-index: 200;
`;

export const DropdownItem = styled.div<{ operation?: string }>`
  padding: 8px 12px;
  font-size: 14px;
  text-align: center; 
  cursor: pointer;

  &:hover {
    transform: scale(1);
    background: ${props => props.operation === 'delete' ? '#ff0026' : '#f5f5f5'};
  }
`;