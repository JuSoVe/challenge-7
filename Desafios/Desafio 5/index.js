
var cantidadDeGatos = 10;
var emoji = ``;
var counter = 1;

console.log("Ejercicio 1")
console.log("")

for (let i = 1; i <= cantidadDeGatos; i++) {

    const cat = "Gato #:";
    const catNum = cat.concat(i);


    if (counter == 1) {
        emoji = `😺`;

    }
    else if (counter == 2) {
        emoji = `😸`;
    }
    else {
        emoji = `😹`
        counter = 0;
    }

    counter++;

    console.log(`${catNum} ${emoji}`);
}

console.log("")
console.log("Ejercicio 2")
console.log("")

var cantidadDeGatos = 2;
var cantidadDePasos = 8;

for (let i = 1; i <= cantidadDeGatos; i++) {

    const cat = "Gato #:";
    const catNum = cat.concat(i + ` 🐈`);
    let catSteps = catNum;
    for (let y = 1; y <= cantidadDePasos; y++) {

        catSteps = catSteps.concat(`🐾`)

    }

    console.log(`${catSteps} `);
}

console.log("")
console.log("Ejercicio 3")
console.log("")

var cantidadDeGatos = 10;
var cantidadDePasos = 4;

for (let i = 1; i <= cantidadDeGatos; i++) {

    if (i % 2 == 0) {

        const cat = "Gato #:";
        const catNum = cat.concat(i + ` 🐈‍⬛`);
        let catSteps = catNum;
        for (let y = 1; y <= cantidadDePasos; y++) {

            catSteps = catSteps.concat(`🐾`)

        }

        console.log(`${catSteps} `);

    } else {

        const cat = "Gato #:";
        const catNum = cat.concat(i + ` 🐈`);
        let catSteps = catNum;
        for (let y = 1; y <= cantidadDePasos; y++) {

            catSteps = catSteps.concat(`🐾`)

        }

        console.log(`${catSteps} `);

    }




}

