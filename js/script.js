/* 
    MILESTONE 0: creazione di un array contente sei oggetti,
    ognuno dei quali contenente tre proprietà.
*/    

const teamMembers = [
    {
      nome: "Wayne Barnett",
      ruolo: "Founder & CEO",
      foto: "wayne-barnett-founder-ceo.jpg"
    },
    {
      nome: "Angela Caroll",
      ruolo: "Chief Editor",
      foto: "angela-caroll-chief-editor.jpg"
    },
    {
      nome: "Walter Gordon",
      ruolo: "Office Manager",
      foto: "walter-gordon-office-manager.jpg"
    },
    {
      nome: "Angela Lopez",
      ruolo: "Social Media Manager",
      foto: "angela-lopez-social-media-manager.jpg"
    },
    {
      nome: "Scott Estrada",
      ruolo: "Developer",
      foto: "scott-estrada-developer.jpg"
    },
    {
      nome: "Barbara Ramos",
      ruolo: "Graphic Designer",
      foto: "barbara-ramos-graphic-designer.jpg"
    }
  ];    

//   console.log(teamMembers);

/* 
    MILESTONE 1: Stampa in console con metodo forEach() 
    di ogni membro del team.
*/

// teamMembers.forEach(member => {
//     console.log(`Nome: ${member.nome}, Ruolo: ${member.ruolo}, Foto: ${member.foto}`);
// });


/*
    MILESTONE 2 + BONUS 1: Stampa le informazioni di nome, ruolo e la stringa della foto
    sul DOM sottoforma di stringhe, trasformare la stringa foto in una immagine effettiva.
*/

const teamContainer = document.querySelector('#team-container');

teamMembers.forEach(member => {
    const memberInfo = `
        <div class="member-card">
            <img src="img/${member.foto}" alt="${member.nome}">
            <h3>${member.nome}</h3>
            <p>${member.ruolo}</p>
        </div>
    `;
    teamContainer.innerHTML += memberInfo;
});

