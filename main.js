const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

const likeButton = document.getElementById('likeButton');

/* Declaring the array of image filenames */

const images = [
    'itacoatiara-orla.jpg',
    'itacoatiara-entrada.jpg',
    'itacoatiara-cidade.jpg',
    'images_velha_serpa.jpg',
    'itacoatiara-enchente.jpg'
];

/* Declaring the alternative text for each image file */
const alts = {
    'itacoatiara-orla.jpg' : 'A paisagem é simplesmente um espetáculo, e o bairro de Itacoatiara.',
    'itacoatiara-entrada.jpg' : 'O Município de Itacoatiara foi criado pela Lei n.º. 74 de 10 de dezembro de 1857.',
    'itacoatiara-cidade.jpg' : 'Itacoatiara é um município brasileiro localizado na Região Metropolitana de Manaus, no estado do Amazonas. É a segunda cidade mais populosa do estado, com 103 598 habitantes, de acordo com o censo de 2022 do Instituto Brasileiro de Geografia e Estatística (IBGE).',
    'images_velha_serpa.jpg' : 'Um dos fatos históricos do Brasil no qual figura Itacoatiara, é a Cabanagem, uma revolta que teve início na província do Grão-Pará entre 1835 e 1836, em função da vida primitiva que esses revolucionários levavam, sentindo-se privados de seus direitos como cidadãos brasileiros, habitando em cabanas, daí a origem do nome do movimento',
    'itacoatiara-enchente.jpg': 'Após forte chuva, casas e lojas de Itacoatiara, a 267 quilômetros de Manaus, ficaram alagadas neste domingo (9). Cerca de 600 famílias foram afetadas.'
}


/* Looping through images */

for(const image of images){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${image}`);
    newImage.setAttribute('alt', alts[image]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', e => {
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;
    })
}

/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', () => {
  const btnClass = btn.getAttribute('class');
  if (btnClass === 'dark') {
    btn.setAttribute('class','light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    btn.setAttribute('class','dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
});

// funcao para curtir a imagem
// likeButton.addEventListener('click', function() {
//     if (likeButton.innerHTML === '&#x2661;') {
//         likeButton.innerHTML = '&#x2665;';
//     } else {
//         likeButton.innerHTML = '&#x2661;';
//     }
// });

likeButton.addEventListener('click', function() {
    // Alternando entre classes de coração vazio e coração preenchido
    likeButton.classList.toggle('heart-filled');
});
