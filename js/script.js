const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

//dichiaro una funzione che mi crei la singola card che ho commentato prima
const createMemberCard = (member) => {
  //questa è la funzione che mi crea la singola card del membro del team
  const {name, role, email, img} = member;
  const card = `<div class="col-lg-4 col-md-6 col-sm-12">
                <div class="card bg-black">
                    <div class="row">
                        <div class="col-4">
                            <img src="./${img}" class="w-100 h-100 img-fluid" alt="...">
                        </div>
                        <div class="col-8">
                            <div class="mb-1">
                                <h4 class="text-white fs-4 fw-medium pt-1">${name}</h4>
                                <p class="text-white fs-5 p-0">${role}</p>
                                <a class="link-underline link-underline-opacity-0 link-text link-info mb-2" href="#"> ${email} </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
            console.log(card);
            return card;
}
//funzione che mi renderizza il contenuto dell'array
const renderTeam = (array) =>{
  //mi dichiaro una variabile con valore stringa che conterrà tutte le colonne da mostrare concatenandole come stringhe
  let cards = '';
  //ciclo l'aaray con le componenti del team passandole come parametro
  for(let i=0 ; i<array.length; i++){
    //concateno il valore contenuto nella variabile cards, con quello restitutomi dalla funzione createMemberCard (una stringa)
    cards+= createMemberCard(array[i])
  }
  //mi recupero dal dom l'elemento con team-members e gli vado ad assegnare all'innerHTML il contenuto della variabile cards
  document.getElementById('team-members').innerHTML= cards;
}
//chiamata della funzione renderTeam
renderTeam(teamMembers);