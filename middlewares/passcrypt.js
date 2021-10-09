const bcryptjs = require('bcryptjs');


// Modulo middleware para encriptar las passwords - Falta hacerlo dinamico con los campos de los formularios, metiendo donde marca abc123 los campos correspondientes a los formularios, que creo que son: EDITAR USUARIO => usuario.password = profileNew.password | CREAR USUARIO => Nos falta agregar el metodo en userModel, agregar usuario

console.log(bcryptjs.hashsync('abc123', 10));
console.log(bcryptjs.compareSync('abc123', bcryptjs.hash));