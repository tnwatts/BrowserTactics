import { createGame } from '../../utilities/games-api';
import { useState, useEffect } from "react"
import { getProfile } from '../../utilities/users-api';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { getUsersList } from '../../utilities/archetypes-api';

export default function Profile({user}) {
    const [profile,setProfile] = useState({})
    let navigate = useNavigate();
    
   

    useEffect(function() {
        console.log(user, 'test')
        async function loadProfile(id){
            const prof = await getProfile(id);
            setProfile(prof);
        }
        loadProfile(user._id);
    },[user])
    
    async function handleNewGame (evt) {
        evt.preventDefault();
        await createGame(user._id);
        navigate('/Game', { replace: true })
    }
    


    return(
        <div className="profile-shell position-relative lifted rounded-pill dark-background">
            <div className="position-absolute lighten-area fs-4 light-lifted rounded-3 ms-5 px-4 mt-2 py-1 darkest-text light-background col12">Hello {profile.name}</div>
        { (!profile.gameStatus  ) &&  <button className="btn btn-info bg-dark  lighten-area btn-outline-warning" onClick={handleNewGame}>NEW GAME</button>}
        
   
<div class="profile light-lifted light-background rounded-pill container px-4 ">
    <div class="row gx-4 gx-lg-5 align-items-center rounded-3  my-5">
        <div class="col-8 pb-1 border border-2 border-danger light-lifted mx-auto rounded-pill" style={{ backgroundImage: `url("https://w0.peakpx.com/wallpaper/815/367/HD-wallpaper-fortnite-shadow-archetype-skin-fortnite-main-characters-gray-stone-background-shadow-archetype-fortnite-skins-shadow-archetype-skin-shadow-archetype-fortnite.jpg ")`}}>
        <div className="col-8 mx-auto rounded-pill light-text darken-area my-1 text-light"> Game Status: {profile.gameStatus ?  (`You are player ${profile.gameStatus===1 ? 'one' : 'two'}`) : "You are not in a game"}</div>
            {profile.gameStatus && <Link className='btn btn-danger dark-background light-text bg-info' to={'/game'}>To Game!</Link>}
            <img class="img-fluid rounded-4 mb-4 mb-lg-0" src="" alt="..." />
            <h1 class="font-weight-light light-text text-danger border border-2 border-info rounded-5 mb-5 light-background mt-2 light-lifted">Prepare to fight!</h1>
            </div>
       
        
     
    </div>
        <div className="col-9  mx-auto my-3  light-lifted light-text text-light darken-area my-2"> Game Record: {profile.wins}/{profile.losses}</div>
    <div class="card text-primary lighter-background mb-2 border-2 border lifted border-warning text-center">
    </div>
    <div class="row my-3 mx-auto w-75 light-lifted light-background p-2 pt-2 pb-0 border border-3 border-info p-5 rounded-5 gx-lg-5">
    <div class="col-3 mx-auto light-lifted dark-background rounded-5 p-3 mb-5">
            <div class="card darker-background shadow-lg lifted rounded-5 h-100">
                <div class="card-body lifted rounded-5 border border-1 border-info light-background">
                <img class="border light-lifted border-1 border-info dark-backgroundg lighten-area lifted rounded-5 lighten-area img-fluid rounded-4 mb-4 mb-lg-0" src={`https://i.imgur.com/rq39A3m.png`} alt="..." />
                    
                </div>
                <div class="card-footer m-2  rounded-3 border-1   border-info light-backgroundg lighten-area light-lifted"><a class="light-lifted dark-background btn btn-outline-info rounded-3 btn-sm" href="#!">More Info</a></div>
            </div>
        </div>
        <div class="col-3 mx-auto light-lifted dark-background rounded-5 p-3 mb-5">
            <div class="card darker-background shadow-lg light-lifted rounded-5 h-100">
                <div class="card-body lifted rounded-5 light-background">
                <img class=" dark-backgroundg p-2 light-lifted rounded-5 img-fluid rounded-4 mb-4 mb-lg-0" src={`https://i.imgur.com/w7y4lXj.png`} alt="..." />
                    
                </div>
                <div class="card-footer m-2  rounded-3 border-1   border-info light-backgroundg lighten-area light-lifted"><a class="light-lifted dark-background btn btn-outline-info rounded-3 btn-sm" href="#!">More Info</a></div>
            </div>
        </div>
        <div class="col-3 mx-auto light-lifted dark-background rounded-5 p-3 mb-5">
            <div class="card darker-background shadow-lg lifted rounded-5 h-100">
                <div class="card-body lifted rounded-5 border border-1 border-info light-background">
                <img class="border light-lifted border-1 border-info dark-backgroundg lighten-area light-lifted rounded-5 lighten-area img-fluid rounded-4 mb-4 mb-lg-0" src={`https://i.imgur.com/uFcF0FK.png`} alt="..." />
                </div>
                <div class="card-footer m-2  rounded-3 border-1   border-info light-backgroundg lighten-area light-lifted"><a class="light-lifted dark-background btn btn-outline-info rounded-3 btn-sm" href="#!">More Info</a></div>
            </div>
        {/* <div class="card-body "><p class="text-primary ">This call to action card is a great place to showcase some important information or display a clever tagline!</p></div> */}
        </div>
    </div>
</div>
<footer class="py-5  bg-dark">
</footer>
    
        </div>
    
    
    
    )
}