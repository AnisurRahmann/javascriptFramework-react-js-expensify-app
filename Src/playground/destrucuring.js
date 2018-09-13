



///
//// objact distructuring
//

const person={
    //name:'shakil',
    age:29,
    location:{
        city:'sylhet',
        temp:25
    }
};

const {name:firstName='anonymous',age} = person;


console.log(`${firstName} is ${age}`);


const {city,temp:temperature}=person.location;

if(city && temperature){
    console.log(`its ${person.location.temp} in ${person.location.city}`);

}


const book={
    title:'ego is the enemy',
    author:'ryab holidy',
    publisher:{
        name:'penguin'
    }
};
const {name:publishername='Mr.idk'}=book.publisher.name;

console.log(publishername);


////
//array destruring
///

const address = ['akhalia-noyabajar','sylhet','bangladesh'];

const item =['coffe(hot)','$2.50','$3.50','$4.00'];
const [itemName,,mediumPrice]=item;

console.log(`a medium ${itemName} costs ${mediumPrice}`);
