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

// MILESTONE 1/2:
let container = document.getElementById('ms2');

for(let i=0; i<dipendenti.length; i++){

    let string = document.createElement('h2');
    let nome = dipendenti[i].nome;
    let ruolo = dipendenti[i].ruolo;
    let foto = dipendenti[i].foto;

    string.innerText = `${nome}, ${ruolo}, ${foto}`;
    container.appendChild(string);

 }
 

