import styled from "styled-components"

import * as Dialog from "@radix-ui/react-dialog";

import * as RadioGroup from "@radix-ui/react-radio-group";



export const Overlay = styled(Dialog.Overlay)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`;
export const Content = styled(Dialog.Content)`
 
  min-width: 32rem;
  background: ${(props) => props.theme["gray-800"]};
  padding: 2.5rem 3rem;
  border-radius: 6px;       
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form{
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    input {
      border: 0;
      border-radius: 6px;
      background: ${(props) => props.theme["gray-900"]};
      padding: 1rem;
      color: ${(props) => props.theme["gray-300"]};
       
        &::placeholder {
          color: ${(props) => props.theme["gray-500"]}; 
        }
  }
  
  button[type="submit"]{
    height: 58px;
    background: ${(props) => props.theme["green-500"]};
    color: ${(props) => props.theme.white};
    border: 0;
    border-radius: 6px;
    font-weight: bold;
    padding: 0 1.25rem;
    margin-top: 1.5rem;
    cursor: pointer;
   

      &:hover {
        background: ${(props) => props.theme["green-700"]};
        transition: background-color 0.2s;  
    }
  } 



}
`;
export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  border: 0;
  background: transparent;
  line-height: 0;
  cursor: pointer;

  color: ${(props) => props.theme["gray-500"]};

  &:hover {
    color: ${(props) => props.theme["gray-300"]};
    transition: color 0.2s;
  }
`;



interface TransactionTypeButtonProps {
  $variant: "income" | "outcome";
}

export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 0.5rem;
`;
export const TransactionTypeButton = styled(RadioGroup.Item)<TransactionTypeButtonProps>`
  display: flex;
  align-items: center;              
  justify-content: center;
  padding: 1rem;
  gap: 0.5rem;
  border: 0;
  border-radius: 6px;
  background: ${(props) => props.theme["gray-700"]};
  cursor: pointer;
  color: ${(props) => props.theme["gray-300"]};

  svg{
    color: ${(props) => props.$variant === "income" ? props.theme["green-300"] : props.theme["red-300"]};

  }

  
   &[data-state="checked"] {
   color: ${(props) => props.theme.white};
   background: ${(props) => props.$variant === "income" ? props.theme["green-500"] : props.theme["red-500"]};
}


    &[data-state="unchecked"]:hover {
        background: ${(props) => props.theme["gray-600"]};
        transition: background-color 0.2s;
    }   
 
 
 `;






