let card = document.getElementById("card");
let chatacter = {}
const get_data =(id) => {
    fetch("image-container" + id)
    .then((d) => d.json())
    .then((data) => {
        chatacter=data
    })
    .catch((err) => {
        console.log(err);
    });

} ;

const print_data = () =>{
    card.innerHTML = "";
    card.insertAdjacentHTML(
        "beforeend", 

    <div class="image-container">
                <img src="bull.png" alt="bull">
                <img src="pikachu.png" alt="pikachu">
                <img src="jigly.png" alt="jigly">
                <img src="charman.png" alt="charman">
       
            </div>
            <div class="data-container">
                <h1>Figuras en serie </h1>
            </div>
    );
};
