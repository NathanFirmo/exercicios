/*
O for in varre um objeto pegando as propriedades dele.
*/
let person = {
name: 'Nathan',
age:18,

}

for (let prop in person){
    console.log(prop)
    console.log(person[prop])
}