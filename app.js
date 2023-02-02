const jokeQues = document.getElementById("joke-setup");
const ans = document.getElementById("joke-punchline");
const button = document.getElementById("btn");

button.addEventListener("click",generateJokes);



async function generateJokes(){
    console.log("asdad");
    
    const res = await fetch(
        "https://official-joke-api.appspot.com/random_joke"
    )

    const data = await res.json();
    console.log(data.punchline);
    console.log(data.setup);

    ans.innerText = data.punchline;
    jokeQues.innerText = data.setup;

}