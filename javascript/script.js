const POP_UP = document.getElementById('Pop_up');
let Uzdevumi = [];

window.addEventListener('load', () => {
    Uzdevumi = JSON.parse(localStorage.getItem('Uzdevumi') || '[]');
    console.log(Uzdevumi);
    render();
});
//Izdzēš lapiņas
const list = document.querySelector('#Darbi')

list.addEventListener('click', (e) => {
    if(e.target.className == 'del'){
      const li = e.target.parentElement;
      li.parentNode.removeChild(li);
      Uzdevumi.splice(li, 1);
      localStorage.setItem('Uzdevumi',JSON.stringify(Uzdevumi));
    }
  });

//Izlabo lapiņas

//Izvēlas krāsu

//Parāda un paslēpj form1.
document.getElementById('Jauns_uzd').addEventListener('click', () => {
    POP_UP.style.display = 'block';
})
document.getElementById('Pievienot_uzd').addEventListener('click', () => {
    POP_UP.style.display = 'none'

//Ierakstot Uzdevumu un Termiņu parāda to uz ekrāna
    let uzd = {Uzdevums: Uzdevums.value, Termiņš: Termiņš.value};

    Uzdevums.value = "";
    Termiņš.value = "";

    Uzdevumi.push(uzd);
    render();
})
function render() {
    let Darbi = document.getElementById('Darbi');
    Darbi.innerHTML = "";

    for(let i = 1; i < Uzdevumi.length; i++) {
        let uzd = `
        <li class="uzdevums">
            <img id='pin' src='images/pin.png' alt='pin'>
            <h3>Uzdevums: ${Uzdevumi[i].Uzdevums}</h3>
            <h4>Termiņš: ${Uzdevumi[i].Termiņš}</h4>
            <button class="edit">Edit</button>
            <button class="del">Delete</button>
        </li>`;

        Darbi.innerHTML += uzd;
    }
    localStorage.setItem('Uzdevumi', JSON.stringify(Uzdevumi))
}



