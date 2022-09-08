import "./Status.css"
import { useEffect } from "react";
export default function StatusWindow({ game, setGame, usersUnits, setUsersUnits, user }) {
    function log(){
        console.log(game, usersUnits)
    }
    useEffect(function(){
        async function assignUnits(){
            let g = game;
            // if(false) return; 
            g.units[0] = usersUnits;
            console.log(g)
            setGame(g)
        }
        assignUnits()
    },[])
  return (
    <>
      <button
        className="btn btn-primary"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasBottom"
        aria-controls="offcanvasBottom"
        onClick={log}
      >
        Status
      </button>

      <div
        className="offcanvas h-50 offcanvas-bottom"
        tabIndex="-1"
        id="offcanvasBottom"
        aria-labelledby="offcanvasBottomLabel"
      >
        <div className="offcanvas-header  dark-background light-text">
          <h5 className="h-75" id="offcanvasBottomLabel">
            Status
          </h5>
          <button
            type="button"
            className="btn-close btn-close-white btn btn-outline-warning"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body row large light-background dark-text">
            <div className="col-2 mx-3 light-backgroundg unit-wrap">
            <h5 className="text-dark mx-auto my-1">{usersUnits[0].name}</h5>
            <div className="selector" style={{ backgroundImage: `url(${usersUnits[0].image}`}} ></div>
            </div>
            <div className="col-2 mx-3 light-backgroundg unit-wrap">
            <h5 className="text-dark mx-auto my-1">{usersUnits[1].name}</h5>
            <div className="selector"  style={{ backgroundImage: `url(${usersUnits[1].image}`}} ></div>
            </div>
            <div className="col-2 mx-3 light-backgroundg unit-wrap">
            <h5 className="text-dark mx-auto my-1">{usersUnits[2].name}</h5>
            <div className="selector"  style={{ backgroundImage: `url(${usersUnits[2].image}`}} ></div>
            </div>
            <div className="col-4 mx-auto">
                <h5>
                    Add Player: 
                    </h5>
                    <input></input>
                    <button className="btn dark-background btn-warning btn-outline-warning mx-1">Add</button>
            
            
            </div>
        </div>
      </div>
    </>
  );
}
