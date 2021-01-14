console.log("____1____");
// Exercice 1
// 1.1 while
// let prenom = ['ayhan', 'andre', 'nicolas', 'elias']
// let i = 0;
// while (i < prenom.length) {
//     console.log(`Bonjour ${prenom[i].charAt(0).toUpperCase()}${prenom[i].substr(1).toLowerCase()}`);
//     i++
// }

// 1.2 do while
// do {
//     let prenom = ['ayhan', 'andre', 'nicolas', 'elias']
//     console.log(`bonjour ${prenom[i]}`);
//     i++
// } while (i < 4);


console.log("____2____");
// Exercice 2
// let fruits = ["orange", "pomme", "poire", "melon", "peche", "mandarine"];
// 2.1
// while(fruits.length > 0) {
//     fruits.pop();
//     console.log(fruits);
//     console.log(`Le tableau a ${fruits.length} elements`);
// };
// console.log(`Le tableau a ${fruits.length} elements. Il est vide`);

// 2.2
// do {
//     console.log(fruits);
//     fruits.pop()
// } while (fruits.length > 0);
// console.log(fruits);


console.log("____3____");
// Exercice 3
// let panierLegumes = ["courgette", "carotte", "salade", "ongion"];
// let caisseLegumes = [];
// let taille = panierLegumes.length;
// let a = 0;

// //3.1 
// while (a <= taille) {
//     panierLegumes.shift();
//     caisseLegumes.push(panierLegumes[0]);
//     console.log(panierLegumes);
//     a++;
// };

//3.2do while
// do {
//     console.log(panierLegumes);
//     caisseLegumes.push(panierLegumes[0])
//     panierLegumes.splice(0, 1)
//     var taille = panierLegumes.length;

//     // i--
// } while (taille > 0);
// console.log(panierLegumes);


console.log("____4____");
// Exercice 4
// let enigme = prompt('enigme?')

// while (enigme != "test") {
//     enigme = prompt('enigme?')
//     if (enigme == 'test') {
//         console.log('bravo');
//     } else {
//         console.log('faux');
//     }
// }

console.log("____5____");
// exercice 5
// do {
//     var enigme = prompt('enigme?')
//     if (enigme == 'test') {
//         console.log('bravo');
//     } else {
//         console.log('faux');
//     }
// } while (enigme != "test");


console.log("____6____");
// Exercice 6
// let annee = 2020; 
// let random = Math.floor(Math.random() * (2020 - 1970)) + 1970;
// console.log(random);
// let result = annee - random;
// let ask;
// let x = 0;
// do {
//      ask = prompt(`Si je suis née en ${random}, quel age ai-je aujourd’hui ?`)
//     if (ask ==result) {
//             alert('bravo')
//     } else if(x == 2) {
//         alert('plus de chance')
//     } else {
//         "dommage"
//     }
//     x++
// } while (x <= 2 && ask != result);

console.log("____7____");
// Exercice 7
let pannierFruits = [];
let addFruit;
while (pannierFruits.length < 8) {
    addFruit = prompt("Entrez un fruit dans le pannier");
    addFruit = addFruit.charAt(0).toUpperCase()+addFruit.substr(1).toLowerCase();
    pannierFruits.push(addFruit);
};
console.log(pannierFruits);

let delFruit = prompt("Voulez-vous retirer un fruit du pannier? Entrez le nom du fruit que vous voulez retirer: ");
delFruit = delFruit.charAt(0).toUpperCase()+delFruit.substr(1).toLowerCase();

if (pannierFruits.includes(delFruit)) {
    while ( pannierFruits.includes(delFruit) ) {
        console.log('test');
        delFruit = delFruit.charAt(0).toUpperCase()+delFruit.substr(1).toLowerCase();
        pannierFruits.splice(pannierFruits.indexOf(delFruit), 1);
        console.log(pannierFruits);
        delFruit = prompt("Voulez-vous retirer un autre fruit du pannier? Entrez le nom du fruit que vous voulez retirer: ");
        delFruit = delFruit.charAt(0).toUpperCase()+delFruit.substr(1).toLowerCase();
    };
} else {
    console.log('merci bon app');
}


