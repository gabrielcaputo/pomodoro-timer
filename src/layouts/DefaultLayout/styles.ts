import styled from 'styled-components';

export const LayoutContainer = styled.div`
  max-width: 74rem;
  width: calc(100vw - 5rem);
  height: calc(100vh - 5rem);
  margin: 2.5rem auto;
  padding: 2.5rem;
  background: ${props => props.theme['gray-800']};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  position: relative;

  @media screen and (max-width: 768px) {
    width: calc(100vw - 2.5rem);
    height: calc(100vh - 2.5rem);
    padding: 1.25rem;
    margin: 1.25rem auto;
  }  
`