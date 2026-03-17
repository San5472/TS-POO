import Conexion  from "./singleton.js";

const con1 = Conexion.getInstance();
const cons2 = Conexion.getInstance();
const cons3 = Conexion.getInstance();

con1.Conectar(); 
cons2.Conectar();
console.log(cons3.getEstado);

console.log(con1 === cons2)  
console.log(cons2 === cons3)