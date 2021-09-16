import LogoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface HeaderProps {
  onOpenNewTransactionmodal: () => void
}

export function Header ({ onOpenNewTransactionmodal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={LogoImg} alt='ex money' />
        <button type='button' onClick={onOpenNewTransactionmodal}>
          Nova transação
        </button>

      </Content>
    </Container>
  )
}
