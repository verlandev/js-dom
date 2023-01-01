// 2.1 Inserta dinamicamente en un html un div vacio con javascript.

const miNuevoDiv$$ = document.createElement("div");
console.log(miNuevoDiv$$);

// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

const miDivConP$$ = document.createElement("p");
miNuevoDiv$$.appendChild(miDivConP$$);
console.log(miDivConP$$)

// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

const miDivConLoop$$ = [];

for (i = 0; i < 6; i++){
    miDivConLoop$$.push("p");
}
console.log(miDivConLoop$$);


// 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

const soyPDinamico$$ = document.createElement("p");
soyPDinamico$$.textContent = "Soy dinámico!";
console.log(soyPDinamico$$);


// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

const wubbaLubba$$ = document.createElement("p");
wubbaLubba$$.textContent = ("Wubba Lubba dub dub");

const h2Insertp$$ = document.querySelector(".fn-insert-here");
h2Insertp$$.appendChild(wubbaLubba$$);
console.log(h2Insertp$$);


// 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
// const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']

const insertUl$$ = document.createElement("ul");
console.log(insertUl$$);


for (i = 0; i < apps.length; i++){
    
    const insertLi$$ = document.createElement("li");
    insertLi$$.textContent = apps[i]; 
    insertUl$$.appendChild(insertLi$$);
    console.log(insertLi$$);
}

// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

const removalElements$$ = document.querySelectorAll(".fn-remove-me");
console.log(removalElements$$)

// lo que hacemos es crear una variable que almacenará todos los elementos con la clase "".fn-remove-me" --> se generará un array que podemos recorrer con un for of o con un for normal.

// for (const elements of removalElements) {
//     elements.remove()
    
// }

for (i = 0; i < removalElements$$.length; i++){

    let elements$$ = removalElements$$[i];
    elements$$.remove();

    console.log(removalElements$$) // el documento de HTML se actualiza correctamente.

}


// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
// 	Recuerda que no solo puedes insertar elementos con .appendChild.

let thisPInTheMiddle$$ = document.createElement("p");
thisPInTheMiddle$$.textContent = "Voy en medio!";

let allDivs$$ = document.querySelectorAll("div.fn-insert-here");
console.log(allDivs$$);

let beforeMyDiv$$ = allDivs$$[1];

document.body.insertBefore(thisPInTheMiddle$$, beforeMyDiv$$);



// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

for (i = 0; i < allDivs$$.length; i++){

    let thisPInside$$ = document.createElement('p');
    thisPInside$$.textContent = ('Voy dentro!');
    allDivs$$.appendChild(thisPInside$$);
} // no sé por qué me da error.












