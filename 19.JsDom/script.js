document.body.style.display="flex";
document.body.style.justifyContent="center";


const div=document.createElement('div');
div.style.display="flex";
div.style.justifyContent="center";
div.style.flexDirection="column";
div.style.alignItems = "center";

const firstBox=document.createElement('div');
firstBox.style.height='360px';
firstBox.style.width='960px';
firstBox.style.backgroundColor="black";
 
const card1=document.createElement('div');
const smallBox=document.createElement('div');
smallBox.style.backgroundColor="black";
smallBox.style.height='180px';
smallBox.style.width='290px';

const cardTitle=document.createElement('h3');
cardTitle.textContent="Indonectetus facilis";

const cardDetail1=document.createElement('p');
cardDetail1.textContent="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, ut?"   ;

const readMore1=document.createElement('a');
readMore1.textContent="Read More";
readMore1.style.display="flex";;
readMore1.style.flexDirection="row-reverse";
readMore1.href = "#"
readMore1.style.textDecoration="none";
readMore1.style.color="#DAA520";
card1.appendChild(smallBox);
card1.appendChild(cardTitle);
card1.appendChild(cardDetail1);

card1.appendChild(readMore1);


const card2=document.createElement('div');
const box1=document.createElement('div');
box1.style.backgroundColor="black";
box1.style.height='180px';
box1.style.width='290px';

const title2=document.createElement('h3');
title2.textContent="Indonectetus facilis";


const cardDetail2=document.createElement('p');
cardDetail2.textContent="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, ut?"   ;


const readMore2=document.createElement('a');
readMore2.textContent="Read More";
readMore2.href = "#"
readMore2.style.display="flex";
readMore2.style.flexDirection="row-reverse";
readMore2.style.textDecoration="none";
readMore2.style.color="#DAA520";
 card2.appendChild(box1);
 card2.appendChild(title2);
 card2.appendChild(cardDetail2);

card2.appendChild(readMore2);

const card3=document.createElement('div');
 const title3=document.createElement('h3');
 title3.textContent="Indonectetus facilis";
 const box3=document.createElement('div');
 box3.style.backgroundColor="black";
box3.style.height='180px';
box3.style.width='290px';



const cardDetail3=document.createElement('p');
cardDetail3.textContent="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, ut?"   ;


const readMore3=document.createElement('a');
readMore3.textContent="Read More";
readMore3.href = "#";
readMore3.style.display="flex";;
readMore3.style.flexDirection="row-reverse";
readMore3.style.textDecoration="none";
readMore3.style.color="#DAA520";
card3.appendChild(box3);
card3.appendChild(title3);
card3.appendChild(cardDetail3);
card3.appendChild(readMore3);

const cardContainer=document.createElement('div');
cardContainer.style.width="290px";
cardContainer.style.display="flex";
cardContainer.style.justifyContent="center";
cardContainer.style.paddingTop="20px";
cardContainer.style.gap="25px";



cardContainer.appendChild(card1);
cardContainer.appendChild(card2);
cardContainer.appendChild(card3);


div.appendChild(firstBox);
div.appendChild(cardContainer);

document.body.appendChild(div);