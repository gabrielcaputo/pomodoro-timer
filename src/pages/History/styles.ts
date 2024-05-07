import styled from 'styled-components';

export const HistoryContainer = styled.main`
  flex: 1;
  padding: 3.5rem;
  display: flex;
  flex-direction: column;
  height: 100%;

  @media screen and (max-width: 960px) {
    padding: 2.5rem 0;
  }

  h1 {
    font-size: 1.5rem;
    color: ${props => props.theme['gray-100']}
  }
`

export const HistoryList = styled.main`
  flex: 1;
  overflow: auto;
  margin-top: 2rem;
  height: 100%;

  table {
    width: 100%;
    border-collapse: collapse;

    thead {
      position: sticky;
      top: 0;
    }

    th {
      background-color: ${props => props.theme['gray-600']};
      padding: 1rem;
      text-align: left;
      color: ${props => props.theme['gray-100']};
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
      }
      
      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1.5rem;
      }
    }

    td {
      background-color: ${props => props.theme['gray-700']};
      border-top: 4px solid ${props => props.theme['gray-800']};
      font-size: 0.875rem;
      line-height: 1.6;
      padding: 1rem;

      &:first-child {
        width: 50%;
        padding-left: 1.5rem;
      }
      
      &:last-child {
        padding-right: 1.5rem;
      }
    }
  }

  @media screen and (max-width: 900px) {
    table {
      display: block;
      width: 100%;
      min-width: initial;
      thead {
        display: none;
      }
      tbody {
        display: block;

        tr {
          display: block;
          padding: 1rem;
          border-radius: 8px;
          background: ${props => props.theme['gray-700']};
          margin-bottom: 1rem;
          
          &:nth-of-type(odd) {
          }

          td {
            display: block;
            width: 100% !important;
            background: none;
            padding: 0 !important;
            border: 0 !important;

            &:nth-child(1) {
              &::before {
                content: "Tarefa: ";
                font-weight: bold;
              }
            }
            &:nth-child(2) {
              &::before {
                content: "Duração: ";
                font-weight: bold;
              }
            }
            &:nth-child(3) {
              &::before {
                content: "Início: ";
                font-weight: bold;
              }
            }
          }
        }
      }
    }
  }
`

const STATUS_COLORS = {
  yellow: 'yellow-500',
  green: 'green-500',
  red: 'red-500',
} as const

interface StatusProps {
  $statusColor: keyof typeof STATUS_COLORS
}

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: "";
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background: ${props => props.theme[STATUS_COLORS[props.$statusColor]]};
  }
`

export const NoHistory = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: ${props => props.theme['gray-700']};
  margin-top: 2rem;
  border-radius: 8px;
  gap: 1rem;
  color: ${props => props.theme['gray-500']};
`