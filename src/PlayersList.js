import Player from "./Player"
import {players} from "./players"
const PlayersList=()=>{
    return(
        <div style={{display:"flex",justifyContent:"space-between"}}>
        {
         players.map((el)=>(
            <Player  el={el} />
         ))   
        }
        </div>
    )
}
export default PlayersList