import * as Dialog from '@radix-ui/react-dialog'
import { useState } from 'react'
import Logo from '../../assets/Logo.svg'
import { NewTransactionModal } from '../NewTransactionModal'
import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  function openModalStateChange() {
    setIsOpen(false)
  }

  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={Logo} alt="" />

        <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova Transação</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal openModalStateChange={openModalStateChange} />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
