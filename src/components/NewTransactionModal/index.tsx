import * as Dialog from "@radix-ui/react-dialog";
import { Overlay, Content, CloseButton, TransactionType, TransactionTypeButton } from "./styles";
import { ArrowCircleDown, ArrowCircleUp, X } from "@phosphor-icons/react";


export function NewTransactionModal() {
  return (
    <Dialog.Portal>
            <Overlay />


           <Content>   
                <Dialog.Title>Nova transação</Dialog.Title>
                <CloseButton >
                  <X size={24} aria-label="Fechar" />   
                 </CloseButton>  
                <form action="">
                    <input type="text" placeholder="Descrição" required />
                    <input type="number" placeholder="Preço" required />
                    <input type="text" placeholder="Categoria" required />

                     <TransactionType>
                        
                       <TransactionTypeButton $variant={"income"} value="income" >
                        <ArrowCircleUp size={24} />
                        <span>Entrada</span>
                          
                        </TransactionTypeButton> 
                         
                        <TransactionTypeButton $variant={"outcome"} value="outcome">
                        <ArrowCircleDown size={24} />
                        <span>Saída</span>
                        </TransactionTypeButton>
                      
                     </TransactionType> 


                    <button type="submit">Cadastrar</button>      

                </form>

               
            </Content>

          </Dialog.Portal>
  );
}