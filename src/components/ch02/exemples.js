/**
 * EXemple 01 fonction arrow - some des deux parametres
 */

const somme = (a,b) => a + b

// exemple somme 10 + 100 resultat 110
console.log(somme(10,100));

/**
 * exemple fonction qui retorune les deux noms a partir deux objets
 * Format objet 
 * person {
 * name: "John",
 * position: "Software engineer"
 * }
 */

const concatenate = (obj1, obj2) => {
    return {
        name1: obj1.name,
        name2: obj2.name
    }
}

// test concatenate 
const obj1 = {
    name: "Alex",
    position: "Software developer"
}
const obj2 = {
    name: "Rami",
    position: "Designer"
}
console.log(concatenate(obj1, obj2));