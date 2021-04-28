const form = document.querySelector('form');
const gifArea = document.querySelector('#gif-area');
const remove = document.querySelector('#remove');

function addGif(res) {
   let newGif = document.createElement('img');
   newGif.classList.add('m-4');
   newGif.src = res.data[Math.floor(Math.random() * res.data.length)].images.fixed_height.url;
   gifArea.append(newGif);
   console.log(res.data)
}

function getVal() {
   const val = document.querySelector('#search').value;
   return val;
}

// CAPTURE INPUT VALUE, MAKE AJAX CALL, 
form.addEventListener('submit', async function(e){
   e.preventDefault();

   let searchTerm = getVal();

   const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
      params: {
         q: searchTerm,
         api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
      }
   })
   addGif(response.data);
})

// REMOVE GIFS
remove.addEventListener('click', function(){
   if(gifArea.hasChildNodes) {
      gifArea.remove();
      location.reload();
   }
})