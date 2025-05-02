import { MagnifyingGlass } from "@phosphor-icons/react";
import { SearchFormContainer } from "./styles";
import { useForm } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { useContextSelector } from "use-context-selector";
import { memo } from "react";



/* 
*  Por que um componente é renderizado ?
* *  1. Quando o pai renderiza
* *  2. Quando o hook mudam (estado, contexto, etc)
* *  3. Quando as props do componente mudam
* 
* Qual é fluxo de renderização do React ?
* * 1O react crir o html virtual, depois ele compara com o html real
* * 2  depois ele aplica as mudanças necessárias.
* 
* Os problemas de performance acontecem quando o react tem que fazer muitas comparações
* 
* * O que é memo ?
* *   O memo é uma função que serve para memorizar o resultado de um componente
* *   e evitar que ele seja renderizado novamente.
* 
* * o fluxo de renderização quando se usa o memo é o seguinte:
* * 1  compara a versão anterior dos hooks e props com a versão atual
* * 2  se as props e hooks não mudaram, o react não renderiza o componente novamente
* * 3  se as props e hooks mudaram, o react renderiza o componente novamente
* 
*  O memo só deve ser usado em componentes que não mudam com frequência e componentes complexos
*  Nesse componente foi usado so para efeito ditático.
*
*
*/




const searchFormSchema = zod.object({
  query: zod.string(),
});

type SearchFormInputs = zod.infer<typeof searchFormSchema>;

  function SearchFormComponent() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  });
  const findTransactions  = useContextSelector(TransactionsContext,(context)=>{
    return context.findTransactions
  });

  async function handleSearchTransactions(data: SearchFormInputs) {
    findTransactions(data.query);
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Busque por transações"
        {...register("query")}
      />

      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  );
}
//

export const SearchForm = memo(SearchFormComponent);