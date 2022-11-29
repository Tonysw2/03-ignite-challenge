import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'
import styled from 'styled-components'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
`
export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background: ${(props) => props.theme['gray-800']};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {
    margin-top: 2rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      border-radius: 6px;
      background: ${(props) => props.theme['gray-900']};
      color: ${(props) => props.theme['gray-300']};
      padding: 1rem;
      border: none;

      &::placeholder {
        color: ${(props) => props.theme['gray-500']};
      }

      &:focus {
        outline: 1px solid ${(props) => props.theme['green-300']};
      }
    }

    button[type='submit'] {
      height: 58px;
      border: none;
      border-radius: 6px;
      padding: 0 1.25rem;
      background: ${(props) => props.theme['green-500']};
      color: ${(props) => props.theme.white};
      margin-top: 1.5rem;
      cursor: pointer;

      font-weight: 700;
      line-height: 1.6;

      &:hover {
        background: ${(props) => props.theme['green-700']};
        transition: all 0.2s;
      }
    }
  }
`

export const CloseButton = styled(Dialog.Close)`
  position: absolute;

  background: transparent;
  border: none;

  cursor: pointer;
  top: 1.5rem;
  right: 1.5rem;

  color: ${(props) => props.theme.white};

  &:hover {
    color: ${(props) => props.theme['red-300']};
    transition: all 0.2s;
  }
`

export const TransactionType = styled(RadioGroup.Root)`
  margin-top: 0.5rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  gap: 1rem;
`

interface TransactionTypeButtonProps {
  variant: 'income' | 'outcome'
}

// eslint-disable-next-line prettier/prettier
export const TransactionTypeButton = styled(RadioGroup.Item)<TransactionTypeButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  height: 58px;
  padding: 1rem 1.5rem;
  border: none;
  border-radius: 6px;
  background: ${(props) => props.theme['gray-700']};
  color: ${(props) => props.theme['gray-300']};
  cursor: pointer;

  svg {
    color: ${(props) =>
      props.variant === 'income'
        ? props.theme['green-300']
        : props.theme['red-300']};
  }

  &[data-state='checked'] {
    color: ${(props) => props.theme.white};
    background: ${(props) =>
      props.variant === 'income'
        ? props.theme['green-500']
        : props.theme['red-500']};

    svg {
      color: ${(props) => props.theme.white};
    }
  }

  &[data-state='unchecked']:hover {
    transition: all 0.2s;
    background: ${(props) => props.theme['gray-600']};
  }
`
