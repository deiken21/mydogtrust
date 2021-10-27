"use strict"

let dogs=[]

dogs.push({name:"Fluffy",Breed:"Poodle",picture:"/Images/",age:5})
dogs.push({name:"Otto",Breed:"Chiwowa",picture:"/Images/",age:7})
dogs.push({name:"Alfie",Breed:"French Bulldog",picture:"/Images/",age:4})
dogs.push({name:"Lucifer",Breed:"Siberian husky",picture:"/Images/",age:7})
dogs.push({name:"Stella",Breed:"Golden retreiver",picture:"/Images/",age:4})
dogs.push({name:"Sora",Breed:"Japanese akita",picture:"/Images/",age:8})


//6 dogs - on 300*400 pixel cards (with nice padding and margins, and a nice background colour)
// An image for each dog
// Display Breed
// Add an age property for every dog
// add an 'Adopt Now' button on each dog

for(let i=0;i<dogs.length;i++){

    let card = document.createElement("div")
    card.classList.add("card")
    document.getElementById("cardholder").appendChild(card)

    //create dogname
    let dogName=document.createElement("h1")
    card.appendChild(dogName)
    dogName.innerHTML=dogs[i].name

    let dogBreed=document.createElement("h2")
    card.appendChild(dogBreed)
    dogBreed.innerHTML=dogs[i].Breed

    let dogPicture=document.createElement("img")
    dogPicture.classList.add("dogpicture")
    card.appendChild(dogPicture)
    dogPicture.src=dogs[i].picture+dogs[i].name +".jpg" // dogPicture.src=/Images/Fluffy.jpg

    let adoptNow=document.createElement("button")
    adoptNow.classList.add("button")
    adoptNow.innerHTML="Adopt Now"
    card.appendChild(adoptNow)


}

