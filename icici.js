

var dogs=document.getElementsByClassName("dogsbreed");
var breedname=document.getElementsByClassName("breedname");

 const apiurl=fetch("https://dog.ceo/api/breeds/list/all")
  .then(response =>
  {
     
      console.log(response);
      return response.json();
     
  })
  .then(data =>
    {
        console.log(data);
        console.log(data.message);
    })
  
  .catch(error=>{
      alert("error");

  })