import styled from 'styled-components';

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${props => props.theme['gray-100']};
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    font-size: 0.875rem;
    gap: 0.25rem;
  }
`

const BaseInput = styled.input`
  background: transparent;
  height: 2.5rem;
  border: 0;
  border-bottom: 2px solid ${props => props.theme['gray-500']};
  font-weight: bold;
  font-size: 1.125rem;
  padding: 0 0.5rem;
  color: ${props => props.theme['gray-100']};

  @media screen and (max-width: 768px) {
    font-size: 0.875rem;
  }  

  &::placeholder {
    color: ${props => props.theme['gray-500']};
  }

  &:focus {
    box-shadow: none;
    border-color: ${props => props.theme['green-500']};
  }
`

export const TaskInput = styled(BaseInput)`
  width: 17rem;

  @media screen and (max-width: 768px) {
    width: 13.5rem;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    text-align: center;
  }

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const MinutesAmountInput = styled(BaseInput)`
  width: 3.5rem;
  text-align: center;
`