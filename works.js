const works = [

/* FICTION */

{
category:"fiction",
title:"冰",
original:"Ice",
author:"Anna Kavan",
douban:"https://book.douban.com/subject/37800335/",
cover:"ice.jpg"
},

{
category:"fiction",
title:"邪恶的幸福",
original:"The Trouble with Happiness",
author:"Tove Ditlevsen",
douban:"https://book.douban.com/subject/36872317/",
cover:"trouble-with-happiness.jpg"
},

{
category:"fiction",
title:"生而为母",
original:"My Work",
author:"Olga Ravn",
douban:"https://book.douban.com/subject/37475157/",
cover:"my-work.jpg"
},

{
category:"fiction",
title:"椭圆女士",
original:"The Collected Stories of Leonora Carrington",
author:"Leonora Carrington",
douban:"https://book.douban.com/subject/36314896/",
cover:"carrington.jpg"
},

{
category:"fiction",
title:"两全其美",
original:"Both Ways Is the Only Way I Want It",
author:"Maile Meloy",
douban:"https://book.douban.com/subject/33428290/",
cover:"both-ways.jpg"
},

{
category:"fiction",
title:"似爱而非",
original:"Half in Love: Stories",
author:"Maile Meloy",
douban:"https://book.douban.com/subject/37651106/",
cover:"half-in-love.jpg"
},

{
category:"fiction",
title:"糖果屋",
original:"The Candy House",
author:"Jennifer Egan",
douban:"https://book.douban.com/subject/37527555/",
cover:"candy-house.jpg"
},


/* no cover */

{
category:"fiction",
title:"朱莉娅与火箭筒，及其他",
original:"Julia and the Bazooka and Other Stories",
author:"Anna Kavan",
douban:"https://book.douban.com/subject/38547011/"
},

{
category:"fiction",
title:"冬天的故事",
original:"Winter’s Tales",
author:"Isak Dinesen",
douban:"https://book.douban.com/subject/38640896/"
},

{
category:"fiction",
title:"命运逸事及埃林加德",
original:"Anecdotes of Destiny and Ehrengard",
author:"Isak Dinesen",
douban:"https://book.douban.com/subject/38640069/"
},


/* NONFICTION */

{
category:"nonfiction",
title:"女性、艺术与社会",
original:"Women, Art, and Society",
author:"Whitney Chadwick",
douban:"https://book.douban.com/subject/37303362/",
cover:"women-art-society.jpg"
},

{
category:"nonfiction",
title:"性别前后",
original:"Before and After Gender",
author:"Marilyn Strathern",
douban:"https://book.douban.com/subject/38521878/",
cover:"before-and-after-gender.jpg"
},

{
category:"nonfiction",
title:"弗朗西斯·培根",
original:"Francis Bacon: Studies for a Portrait",
author:"Michael Peppiatt",
douban:"https://book.douban.com/subject/35941942/",
cover:"bacon-portrait.jpg"
},

{
category:"nonfiction",
title:"我无惧声名狼藉",
original:"Country Girl: A Memoir",
author:"Edna O’Brien",
douban:"https://book.douban.com/subject/37364901/",
cover:"country-girl.jpg"
},

{
category:"nonfiction",
title:"绝世美味",
original:"Lost Feast: Culinary Extinction and the Future of Food",
author:"Lenore Newman",
douban:"https://book.douban.com/subject/36855251/",
cover:"lost-feast.jpg"
},

{
category:"nonfiction",
title:"人造肉",
original:"Clean Meat",
author:"Paul Shapiro",
douban:"https://book.douban.com/subject/35616670/",
cover:"clean-meat.jpg"
},

{
category:"nonfiction",
title:"这就是培根",
original:"This Is Bacon",
author:"Kitty Hauser",
douban:"https://book.douban.com/subject/35290815/",
cover:"this-is-bacon.jpg"
},

{
category:"nonfiction",
title:"假扮名媛",
original:"My Friend Anna",
author:"Rachel DeLoache Williams",
douban:"https://book.douban.com/subject/37089377/",
cover:"my-friend-anna.jpg"
},


{
category:"nonfiction",
title:"其他重要的人",
original:"The Other Significant Others: Reimagining Life with Friendship at the Center",
author:"Rhaina Cohen",
douban:"https://book.douban.com/subject/38598262/"
}

];



const forthcoming=[

["The Gathering","Anne Enright"],

["The Witness for the Prosecution","Agatha Christie"],

["Making Ends Meet","Kathryn Edin / Laura Lein"],

["Three Guineas","Virginia Woolf"],

["Nothing But the Night","John Williams"],

["Creation Lake","Rachel Kushner"],

["Francis Bacon: A Self-Portrait in Words","Michael Peppiatt"],

["Burnt","Clare Frank"],

["Selected Stories","Andre Dubus"],

["Interviews with Francis Bacon","David Sylvester"]

];



function render(category,id){

const container=document.getElementById(id);

works
.filter(book=>book.category===category)
.forEach(book=>{

const cover=book.cover
? `<img src="${book.cover}" alt="${book.title}">`
: `<div class="empty-cover"></div>`;

container.innerHTML+=`

<div class="book">

${cover}

<div class="book-info">

<div class="title-cn">
<a href="${book.douban}" target="_blank">
《${book.title}》
</a>
</div>

<div class="title-en">
${book.original}
</div>

<div class="author">
${book.author}
</div>

</div>

</div>

`;

});

}


function renderForthcoming(){

const container=document.getElementById("forthcoming");

forthcoming.forEach(book=>{

container.innerHTML+=`

<div class="future-book">

<div>${book[0]}</div>

<div>${book[1]}</div>

</div>

`;

});

}


render("fiction","fiction");
render("nonfiction","nonfiction");
renderForthcoming();
