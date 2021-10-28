let dogs=[]

class Dog{
    constructor(name,Breed,picture,age){
        this.name=name;
        this.Breed=Breed
        this.picture=picture
        this.age=age
    }
}
function setupDogs(){
    dogs.push(new Dog("Fluffy","Poodle","/Images/","5 yr"))
    dogs.push(new Dog("Otto","Chiwowa","/Images/","7 yr"))
    dogs.push(new Dog("Alfie","French Bulldog","/Images/","4 yr"))
    dogs.push(new Dog("Lucifer","Siberian husky","/Images/","7yr"))
    dogs.push(new Dog("Stella","Golden retreiver","/Images/","4 yr"))
    dogs.push(new Dog("Sora","Japanese akita","/Images/","8 yr"))
}

function dogdetail(){
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
    
        let dogAge=document.createElement("h2")
        card.appendChild(dogAge)
        dogAge.innerHTML=dogs[i].age

        let dogPicture=document.createElement("img")
        dogPicture.classList.add("dogpicture")
        card.appendChild(dogPicture)
        dogPicture.src=dogs[i].picture+dogs[i].name+".jpg" // dogPicture.src=/Images/Fluffy.jpg

        let adoptNow=document.createElement("button")
        adoptNow.classList.add("button")
        adoptNow.innerHTML="Adopt Now"
        card.appendChild(adoptNow)



}
}

setupDogs()

dogdetail()
