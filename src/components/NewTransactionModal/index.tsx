import * as Dialog from '@radix-ui/react-dialog'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import {
  CloseButton,
  Content,
  Overlay,
  TransactionType,
  TransactionTypeButton,
} from './styles'

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Nova transação</Dialog.Title>

        <CloseButton>
          <X size={24} weight="bold" />
        </CloseButton>

        <form action="">
          <input type="text" placeholder="Descrição" required />
          <input type="number" placeholder="Preço" required />
          <input type="text" placeholder="Categoria" required />

          <TransactionType>
            <TransactionTypeButton variant="income" value="income">
              <ArrowCircleUp size={24} />
              <p>Entrada</p>
            </TransactionTypeButton>

            <TransactionTypeButton variant="outcome" value="outcome">
              <ArrowCircleDown size={24} />
              <p>Saída</p>
            </TransactionTypeButton>
          </TransactionType>

          <button type="submit">Cadrastrar</button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
