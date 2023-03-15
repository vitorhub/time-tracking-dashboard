import React, { useContext, useEffect } from "react";
import { UserContext } from "./Context";
import './Cards.css'
import data from '../data/data.json'
import work from '../images/icon-work.svg'
import play from '../images/icon-play.svg'
import study from '../images/icon-study.svg'
import exercise from '../images/icon-exercise.svg'
import social from '../images/icon-social.svg'
import selfcare from '../images/icon-self-care.svg'
import ellipsis from '../images/icon-ellipsis.svg'


export interface ICards {
  value?: string; // entrada do props com work etc. Mas não precisa pois basta uma renderização
}

function Cards({ value }: ICards) {

  const { stateArray, setStateArray } = useContext(UserContext); /* usa contexto e desestrutura */
  const { periodo, setPeriodo } = useContext(UserContext); /* usa contexto e desestrutura */
  useEffect(
    () => {
      setStateArray(data)
    }, [periodo]
  )

  function MountComponent(periodo: any): any {

    function retornaVar(): any {
      if (periodo === 'Day') {
        return 'daily'
      } else if (periodo === 'week') {
        return 'weekly'
      } else if (periodo === 'month') {
        return 'monthly'
      } else {
        return 'daily'
      }
    } // escolhe o retorno para o json dentro do map -> day week month
    function retornaFrase(): any {
      if (periodo === 'Day') {
        return 'Yesterday'
      } else if (periodo === 'week') {
        return 'Last Week'
      } else if (periodo === 'month') {
        return 'Last Month'
      } else {
        return 'Yesterday'
      }
    } // retorna frase yesterday last week e last month

    function escolheLogo(e: any): any {
      if (e === 'Work') { return work }
      else if (e === 'Play') { return play }
      else if (e === 'Study') { return study }
      else if (e === 'Exercise') { return exercise }
      else if (e === 'Social') { return social }
      else if (e === 'Self Care') { return selfcare }
    } // Retorna a logo de acordo com o status

    return ( // monta o componente
      <>
        {stateArray.map((item: any, index: number) => (
          <div key={index} className={"card"+" "+(item.title.replace(" ", "-"))}>
            <div className="colorido">
              <img src={escolheLogo(item.title)} className={"icone"} alt="icones" />
            </div>

            <div className="secaoinfo">
              <div className="statusellipsis">
                <h2>{item.title} {/* Work */}</h2>
                <img src={ellipsis} className="ellipsis" alt="ellipsis" />{/* ... */}
              </div>
              <div className="periodos">
                <h2>{item.timeframes[retornaVar()].current}hrs</h2>
                <small>{retornaFrase()}  {item.timeframes[retornaVar()].previous}hrs</small>
              </div>
            </div>

          </div>
        ))}
      </>
    );
  }

  return (
    <>
      {stateArray ? MountComponent(periodo) : MountComponent(periodo)}
    </>
  );
}

export default Cards;