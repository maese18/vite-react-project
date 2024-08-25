export default {
    shuffle<T>(list: T[]){
        console.log("shuffle list")
       const shuffled= list.sort(()=>0.5 - Math.random()) 
       console.log(`shuffled ${JSON.stringify(shuffled,null,2)}`)
       return shuffled
    }
}