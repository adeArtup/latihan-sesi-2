const videoData = [
    {
        name: 'Miss Scarlet',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false},
        ]
    },
    {
        name: 'Mrs. White',
        present: false,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false},
        ]
    },
    {
        name: 'Reverend Green',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false},
        ]
    },
    {
        name: 'Rusty',
        present: false,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false},
        ]
    },
    {
        name: 'Colonel Mustard',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false},
        ]
    },
    {
        name: 'Professor Plum',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false},
        ]
    },
]

let dtSelf = ['name','present','rooms']
let dtRoom = ['kitchen', 'ballroom', 'conservatory','dining room','billiard room','library']
let videoP = videoData.filter((listV) => listV.present === true)
for(let i=0;i<videoP.length;i++){
    let res = ''
    for(let j=0;j<dtSelf.length;j++){
        res = 'Name : '+ videoP[i][dtSelf[0]] +'\n\r'
        res += 'Present : '+ videoP[i][dtSelf[1]]  +'\n\r'
        res += 'Room : \n\r'
        for(let k=0;k<videoP[i][dtSelf[2]].length;k++){ 
            
            res += dtRoom[k]+' = '+ videoP[i][dtSelf[2]][k][dtRoom[k]] +'\n\r' 
        }
        res += '------------------------------------------------------ \n\r'
    }
    console.log(res)
}







