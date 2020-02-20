//Array dan Objek
// let array = [{nama:'udin',tinggi:170,mata:2},{nama:'adin',tinggi:120,mata:2},{nama:'aladin',tinggi:130,mata:2}];
// let keys = ['nama','tinggi','mata']

// for(i=0;i<=array.length-1;i++){
//     let xx = ''
//     for(j=0;j<keys.length;j++){
//          xx = array[i][keys[0]] +' '+ array[i][keys[1]] +' '+ array[i][keys[2]]
//     }
//     // console.log(xx)
// }

//Array 2 Dimensi

// let arrayMultidimensi = [[1,2,3],[4],[5,6],[7,8,9,10]]

// for(x=0;x<arrayMultidimensi.length;x++){
//     for(y=0;y<arrayMultidimensi[x].length;y++){
//         console.log(arrayMultidimensi[x][y])
//     }
// }

// let mobil = {
//     'nama':'civic',
//     'tahun':'2015'
// }
//Array EX Destructuring

// let {nama, tahun} = mobil

// let {nama : nm, tahun : thn} = mobil

// console.log(`nama: ${nama}, tahun: ${tahun}`)

//Split & Join

//Function

// function sum(){
//     this.total = 0 
//     setTimeout(function(){
//         this.total += 1
//         console.log(this.total)
//     }, 1000)
 
// }

// function sum2(){
//     this.total = 0 
//     setTimeout(() => {
//         this.total += 1
//         console.log(this.total)
//     }, 1000)
    
// }
// sum()
// sum2()

//Method Array

// let anime = ['One Piece', 'Black Clover', 'Narto']
// anime.forEach((visual) => {
//     console.log(visual)
// })

//====> Filter, Map, Reduce
// let people = [{nama:'udin',tinggi:170,mata:2},{nama:'adin',tinggi:120,mata:2},{nama:'aladin',tinggi:130,mata:2}];
// let ay = people.filter((obP) => {
//     return obP.nama === 'adin'
// })

// let ay2 = people.map((obP) => {
//     return obP.nama 
// })
// console.log(ay2)

let tot = 0
let lNum = [1,2,3]
let tots = lNum.reduce((acc,num) => {
    return num+acc //akumulasi angka 
}, 0) 

console.log(tots)