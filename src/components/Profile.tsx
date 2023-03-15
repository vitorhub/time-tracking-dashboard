import React, { useContext } from "react";
import { UserContext } from "./Context";
import './Profile.css'
import foto from '../images/image-jeremy.png'

function Profile() {

  const { periodo, setPeriodo } = useContext(UserContext); /* usa contexto e desestrutura */

  return (
    < div className="secaoperfil" >
      <div className="tituloefoto">
        <img src={foto} className={"foto"} alt="foto" />
        <div className="reportenome">
          <h1>Report for</h1>
          <div className="nome">
            <h2 className="nomeum">Jeremy</h2>
            <h2 className="nomedois">Robson</h2>
          </div>
        </div>
      </div>
      <div className="secaobotoes">
        <button className="choose" onClick={() => setPeriodo("day")}> Daily </button>
        <button className="choose" onClick={() => setPeriodo("week")}> Weekly </button>
        <button className="choose" onClick={() => setPeriodo("month")}> Monthly </button>
      </div>
    </div >
  );
}

export default Profile;