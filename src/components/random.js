//random configured set up// cells are strings; int_int,
const row = 25
const col = 25
function Randommize() {
    for ( let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            console.log(Math.floor(Math.random() * Math.floor(i))  + '-'+ Math.floor(Math.random() * Math.floor(j)))
        }
    }

}

Randommize()
