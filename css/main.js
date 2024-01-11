let item=[
    {
        id:1,
        img:"image/rose.jpg",
        title:"Rose",
        content:"A rose is a plant that is a member of the genus Rosa, which consists of some 100 species of perennial shrubs in the rose family. Many roses are cultivated for their beautiful flowers, tones of yellow and pink to dark crimson and maroon.",
    },
    {
        id:2,
        img:"image/lotus.jpg",
        title:"lotus",
        content:"Lotus plants are adapted to grow in the flood plains of slow-moving rivers and delta areas. Stands of lotus drop hundreds of thousands of seeds every year to the bottom of the pond.which range in colour from white through various.",
    },
    {
        id:3,
        img:"image/lilly.jpg",
        title:"Lilly",
        content:" Lily flowers are a time-honored inclusion in memorial arrangements and are considered spiritually symbolic of the circle of life. Individual types of lily flowers and the respective colors of the petals may hold additional meanings.",
    },
    {
        id:4,
        img:"image/jasmine.jpg",
        title:"Jasminie",
        content:"jasmine, (genus Jasminum ), also spelled jessamine, genus of about 200 species of fragrant-flowered shrubs and vines of the olive family ( Oleaceae ). The plants are native to tropical and to some temperate areas of the Old World.",
    },
    {
        id:5,
        img:"image/hibiscus.jpg",
        title:"Hibicus",
        content:"Hibiscus is a colorful, flowering plant that can be made into extracts, teas, and supplements. Depending on the part of the plant you consume, the nutrients vary, but it may help lower blood pressure and have anticancer properties.",
    },
    {
        id:6,
        img:"image/sunflower.jpg",
        title:"Sunflower",
        content:"sunflower, helianthus(noun) any plant of the genus Helianthus having large flower heads with dark disk florets and showy yellow rays. Synonyms: helianthus. Secondly, what is a sunflower made of? The sunfloweris a large.",
    }
];




var cardSection=document.getElementById("card-section");

var container=document.createElement("div");
container.classList.add("container");
cardSection.appendChild(container);

var row=document.createElement("div");
row.classList.add("card-row");
container.appendChild(row);

item.forEach(function(e){
var col=document.createElement("div");
col.classList.add("card-col");
row.appendChild(col);

var card=document.createElement("div");
card.classList.add("card-card");
col.appendChild(card);

var image=document.createElement("img");
image.setAttribute("src",e.img);
card.appendChild(image);


var heading=document.createElement("h1");
card.appendChild(heading);
heading.innerHTML=e.title;


var cont=document.createElement("p");
card.appendChild(cont);
cont.innerHTML=e.content;

});