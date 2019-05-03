const ul = document.getElementById('beers'); // Get the list where we will place our beers
const url = 'https://api.punkapi.com/v2/beers?brewed_after=12-2015&abv_gt=5&abv_lt=11'; // Get beers

fetch(url)
.then((res) => res.json())
  .then((data) => {
    let output = '';
     data.forEach(function(beer){

       output += `
 <figure class="columns is-centered">
   <div class="columns is-vcentered" id="card">

     <img src="${beer.image_url}">
     <h5><strong> ${beer.name}</strong></h5>
     <h5>ABV: ${beer.abv}%</h5>
     <h5>${beer.tagline}</h5>

   </div>
 </figure>
       `;
     })

    document.getElementById('beers').innerHTML = output;
    console.log(data);
    })
  .catch(function(error) {
    console.log(error)
  });
