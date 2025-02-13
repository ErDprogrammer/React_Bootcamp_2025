 const object = {
    artist: "eminem",
    bestTrack: "Rap God",
    numberOfStreams: "1 billion",
    upvote: "70,600,000",
    downvote: "7,600,000",
 }

 for(const key in object){
    console.log(`${key}  : ${object[key]}`);
    
 }