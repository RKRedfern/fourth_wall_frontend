
//an action creator looks like a function 

export function fetchGhosts(){
    //what we return or dispatch from this function is an action object. 
    //it is then sent to the reducer which updates state based on this information


    fetch('http://localhost:3000/api/v1/ghosts')
    .then(r => r.json())
    .then(json => console.log(json))

}