// Importar a classe pessoa que quero utilizar
import { Pessoa } from './Pessoa';

// Instanciar (criar objeto)
const pessoa1: Pessoa = new Pessoa('Sebastião', 4);
const pessoa2: Pessoa = new Pessoa('Marcelo', 66);

console.log(pessoa1.aniversario());
console.log(pessoa2.correr());
