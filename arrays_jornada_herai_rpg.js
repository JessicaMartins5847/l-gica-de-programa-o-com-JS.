let inventario = ["Espada de adamantio" , "escudo de titanion", "3 opções de regeneração" , "cajado magico" , "armadura de couro"] 
// Exibindo o inventário inicial
console.log("Seu inventario inicial:", inventario)
/*3. Encontrando um Tesouro:
"o herói encontra um baú de tesouro e ganha um novo item!"*/

// Herói encontra um novo item
let novoItem = "ovo de dragão"

inventario.push(novoItem);
// Exibindo o inventário atualizado
console.log("Você encontrou um baú! Novo item adicionado ao seu inventario:", inventario);

console.log("Um goblin apareceu! Prepare-se para a batalha.");
/*4. Enfrentando um Inimigo:"O herói enfrenta um goblin!
 Ele pode usar a espada ou o escudo do seu inventário para lutar."*/

let  itemUsado1 = inventario[3]; // Usando o cajado magico ( primeiro item)
console.log ("Você ataca o goblin com seu", itemUsado1)

/* 6. Finalizando o inimigo "Em um golpe o goblinsentiuo impacto, é a sua hora de finaliza-lo"*/
let itemUsado0 = inventario[0];
console.log ("Você ataca o goblin com seu", itemUsado0);

//Finalizando a batalha

console.log("Você derrotou o goblin e continua sua jornada.");

