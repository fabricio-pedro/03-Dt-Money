import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import logo from '../../assets/images/dtMoney.svg'
export function Header() {
  return (
     <HeaderContainer>
        <HeaderContent>
         <img src={logo} alt="" />   
         <NewTransactionButton>Nova Transação</NewTransactionButton>
        
        </HeaderContent>

        </HeaderContainer>
      
   
  )
}