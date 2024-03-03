const person={
    name:'Deepak Reddy',
    address:{
        line1:'123',
        city:'London',
        Country:'UK',
    },
    profiles :['twitter','fb','ig'],
    printProfile:()=>{
        console.log(person.profiles[2]) 
    }
}

// function printProfile(){
//     console.log(person.profiles[0])
// }

export default function LearnJavaScript(){
    return(
        <div className="LearnJavaScript">
        <div>{person.name}</div>
        <div>{person.address.Country}</div>
        <div>{person.profiles[0]}</div>
        <div>{person.printProfile()}</div>
        </div>
    )
}