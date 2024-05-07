import styled from 'styled-components';

export const CountdownContainer = styled.div`
  font-family: "Roboto Mono", monospace;
  font-size: calc(10rem * 1 * 1);
  line-height: calc(10rem * 0.8 * 1);
  color: ${props => props.theme['gray-100']};
  display: flex;
  gap: calc(1rem * 1);

  span {
    background: ${props => props.theme['gray-700']};
    padding: calc(2rem * 1) calc(1rem * 1);
    border-radius: 8px;
  }

  @media screen and (max-width: 960px) {
    font-size: calc(10rem * 1 * 0.75);
    line-height: calc(10rem * 0.8 * 0.75);
    gap: calc(1rem * 0.75);
    width: 100%;

    span {
      padding: calc(2rem * 1) calc(1rem * 0.75);
      flex: 1;
      text-align: center;
    }
  }

  @media screen and (max-width: 768px) {
    font-size: calc(10rem * 1 * 0.325);
    line-height: calc(10rem * 0.8 * 0.5);
    
    span {
      padding: calc(2rem * 1) calc(1rem * 0.5);
    }
  }
`

export const Separator = styled.div`
  padding: calc(2rem * 1) 0;
  width: calc(4rem * 1);
  color: ${props => props.theme['green-500']};
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: calc(10rem * 0.8 * 1);

  @media screen and (max-width: 960px) {
    line-height: calc(10rem * 0.8 * 0.75);
    padding: calc(2rem * 0.75) 0;
    width: calc(4rem * 0.75);
  }

  @media screen and (max-width: 768px) {
    line-height: calc(10rem * 0.8 * 0.5);
    padding: calc(2rem * 0.5) 0;
    width: calc(4rem * 0.25);
  }
`