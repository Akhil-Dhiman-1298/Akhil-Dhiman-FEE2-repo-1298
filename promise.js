const url = "https://official-joke-api.appspot.com/random_joke";



const setup = document.querySelector(".setup");
const punchline = document.querySelector(".punchline");

const btn=document.querySelector(".change");
btn.addEventListener("click",change);
function change(){
    const data = fetch(url);
data.then((response) => {
        console.log(response);       // Response object
        return response.json();      // Convert to JSON
    })
    .then((originaldata) => {
        console.log(originaldata);   // Actual joke object

        setup.textContent = originaldata.setup;
        punchline.textContent = originaldata.punchline;
    })
    .catch((error) => {
        console.log(error);
    });
}


/*
  try{
  const  function getjoke(){
  const data=await fetch(url);
  const originaldata=await data.json();
  console.log(originaldata);
  }
  catch (error){
  console.log(error);
  }
  }
*/ 

//read api doc

