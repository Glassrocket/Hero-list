

//VARIABLES
const cCont = document.getElementById('code-container');
const inputItem = document.createElement('div');
const btnContainer = document.createElement('div');
const addBtn = document.createElement('button');
const resetBtn = document.createElement('button');
const input1 = document.createElement('input');
const list = document.createElement('ul');
const label = document.createElement('label')
let value = 'label';

//ARRAY AJECTIVE
const adjective = [
'Flaming',
'Cruel',
'Fearful',
'Careless',
'Insedious',
'Rapid',
'Patient',
'Righteous',
'Radiant',
'Cellestial',
'Nimble',
'Grim',
'Flamboyant',
'Unbroken',
'Hazardous',
'Valiant',
'Generous',
'Undisputed',
'Devoted',
'Immortal',

]

//ARRAY NOUN
const noun = [
    'Buster',
    'Slayer',
    'Brawler',
    'Pranker',
    'Vanquisher',
    'Emperper',
    'Lord',
    'Intersepter',
    'Sentinell',
    'Ravager',
    'Avenger',
    'Conqueror',
    'Warlock',
    'Cultist',
    'Master',
    'Prophet',
    'Alchemist',
    'Knight',
    'Tyrant',
    'Keeper',
    ]

//TITLE
const title = [
    'of Pending Doom',
    'of Immense Bravery',
    'of purest Truth',
    'of the Black Castle',
    'of Evil wispers',
    'of Eternal Turmoil',
    'of Guts and glory',
    'of Peacefull solutions',
    'of Tolal Anihilation',
    'of Mortal Ganger',
    'of Bursting Clouds',
    'of Wailing Sorrow',
    'of Untold Seekers',
    'of Simple Living',
    'of Lingering Spirits',
    'of Sudden Death',
    'of Flying Dragons',
    'of Thousand Sins',
    'of Sleepy Mermaids',
    'of Shiny Armour',
    ]

//ATRIBUTES AND APPENDS
label.innerText = 'Name';
addBtn.innerText = 'Add Hero';
resetBtn.innerText = 'Reset';
input1.placeholder = 'John Snow';
inputItem.classList.add('input-item');
btnContainer.classList.add('btn-container');
resetBtn.classList.add('btn-secondary');
cCont.appendChild(inputItem);
inputItem.appendChild(label)
inputItem.appendChild(input1);
inputItem.appendChild(btnContainer);
btnContainer.appendChild(addBtn);
btnContainer.appendChild(resetBtn);
inputItem.appendChild(list);


//RANDOMIZER 
const getRandom = (max) => 
  Math.floor(Math.random() * max);

// SHOW RESULTS
const showResult = () => {
    value = input1.value;

    list.innerHTML += `
    <li><div class='span-div'><strong>${value}</strong> the 
    ${adjective[getRandom(adjective.length)]} 
    ${noun[getRandom(noun.length)]} 
    ${title[getRandom(title.length)]}</div>
    <button onclick='delFn(event)' class ='btn-del-Item' id='delItem'>X</button></li> 
    `;
    input1.value = '';
    btnContainer.style.marginBottom = '24px';
    list.style.borderTop = 'solid 1px #4C5C63';
    list.style.paddingTop = '8px';
};
addBtn.addEventListener('click', showResult);

//RESULT ON ENTER
input1.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
        showResult()
    };
});

//RESET
resetBtn.addEventListener('click', () => {
    list.innerHTML = ` `;
    btnContainer.style.marginBottom = '0';
    list.style.borderTop = 'none';
    list.style.paddingTop = '0';
}
);

//DELETE ITEM
const delFn = (event) => {
    list.removeChild(event.target.parentElement);
}
