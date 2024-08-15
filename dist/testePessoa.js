"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Importar a classe pessoa que quero utilizar
const Pessoa_1 = require("./Pessoa");
// Instanciar (criar objeto)
const pessoa1 = new Pessoa_1.Pessoa('Sebastião', 4);
const pessoa2 = new Pessoa_1.Pessoa('Marcelo', 66);
console.log(pessoa1.aniversario());
console.log(pessoa2.correr());
//# sourceMappingURL=testePessoa.js.map