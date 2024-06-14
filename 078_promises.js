// Prommises
function walkDog(){  
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const dogWalked = true;
            if (dogWalked) {
                resolve("You walk the dog..! 🐕")
            }
            else {
                reject("You didn't walked the dog...!")
            }
        } , 2000);
    }) ;
}

function cleanKitchen(){ 
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            const kitechenCleaned = true;
            if(kitechenCleaned){
                resolve("You clean the kitchen 🧹")
            }
            else {
                reject("You didn't cleaned the kitchen")
            }
        } , 3000); 
    }); 
}

function takeOutTrash(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const trashTaken = false;
            if (trashTaken) {
                resolve("You take out the trash 🗑")
            }
            else {
                reject("You didn't taken out the trash...!")
            }
        } , 1000);   
    });
}

walkDog().then(value => {console.log(value); return cleanKitchen()})
.then(value => {console.log(value); return takeOutTrash()})
.then(value => {console.log(value); console.log("You fininshed all chores..!")})
.catch(error => console.error(error));