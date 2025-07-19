console.log("good to go")

function createCard(title, cName, views, monthsOld, duration, thumbnail){

    const formattedviews = views >=1000000 
    ? `${(views/1000000).toFixed(1)}M`
    : views >= 1000 
       ? `${(views/1000).toFixed(0)}K`
       : views;

    
    const cardHTML= `
       <div class="card">

            <div class="thumbnail">
            <img src="${thumbnail}" alt="${title}">
            <span class="duration">${duration}</span>
            </div>
            <div class="details">
            <h3 class="title">${title}</h3>
            <p class="channel">${cName}</p>
             <p class="metadata">${formattedviews} views ${monthsOld} months ago</p>
            </div>
       </div>
    `;

    document.querySelector('.container').innerHTML += cardHTML;
}

createCard(
   "Learn React",
   "WebDev simplified",
   1200000,
   3,
   "5:12:07",
   "https://i.ytimg.com/vi/DLX62G4lc44/hqdefault.jpg",      
);

createCard(
   "History of India",
   "Itihas",
   656000,
   9,
   "12:07",
"https://i.ytimg.com/vi/eHEv5aF5td8/hqdefault.jpg"    
);