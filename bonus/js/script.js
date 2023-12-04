// MILESTONE 0:
let dipendenti = [
    {
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO',
        foto: 'wayne-barnett-founder-ceo.jpg',
    },

    {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        foto: 'angela-caroll-chief-editor.jpg',
    },

    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        foto: 'walter-gordon-office-manager.jpg',
    },

    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        foto: 'angela-lopez-social-media-manager.jpg',
    },

    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        foto: 'scott-estrada-developer.jpg'
    },

    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        foto: 'barbara-ramos-graphic-designer.jpg',
    }
];

// BONUS 1/2:
let container = document.getElementById('ms2');

for(let i=0; i<dipendenti.length; i++){

    let div = document.createElement('div');
    div.classList.add('card');
    div.classList.add('d-inline-block');
    div.classList.add('m-3');
    div.style.width = '18rem'

    let nome = dipendenti[i].nome;
    let ruolo = dipendenti[i].ruolo;
    let foto = `<img src="../img/${dipendenti[i].foto}">`;

    // let div_info = document.createElement('div');
    // div_info.innerText = `${nome}, ${ruolo}`;
    // div_info.classList.add('card-body');

    div.innerHTML = `${foto} <h3>${nome}</h3> ${ruolo}`;

    container.appendChild(div);

 }
 

