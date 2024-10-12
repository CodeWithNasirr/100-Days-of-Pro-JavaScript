// What's the difference between var, let, and const?

// var: Function-scoped or globally-scoped, can be re-declared and updated. Hoisted with undefined.
// let: Block-scoped, can be updated but not re-declared. Hoisted but not initialized.
// const: Block-scoped, cannot be updated or re-declared. Not hoisted, and must be initialized.

function example(){
    if (true){
        var a=10;
        let b=20;
        const c=30;
    }
    console.log(a);
    console.log(b);
    console.log(c);
}