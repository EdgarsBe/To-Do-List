const POP_UP = document.getElementById('Pop_up');
let Uzdevumi = [];

window.addEventListener('load', () => {
    Uzdevumi = JSON.parse(localStorage.getItem('Uzdevumi') || '[]');
    console.log(Uzdevumi);
    render();
});
//Izveido random krāsu

 
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
        <div class="uzdevums">
            <img id='pin' src='pin.png' alt='pin'>
            <h3>Uzdevums: ${Uzdevumi[i].Uzdevums}</h3>
            <h4>Termiņš: ${Uzdevumi[i].Termiņš}</h4>
            <button>Edit</button>
            <button>Delete</button>
        </div>`;

        Darbi.innerHTML += uzd;
    }
    localStorage.setItem('Uzdevumi', JSON.stringify(Uzdevumi))
}



