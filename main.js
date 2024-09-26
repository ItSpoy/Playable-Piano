let pianocontainer = document.getElementsByClassName("piano-container");
const base = "./audio/";
window.onload = () => {
    for (let index = 1; index <= 24 ; index++) {
        let div = document.createElement("div");
        div.classList.add("key" , index<= 10 ? "black-key" : "white-key");
        const number = index <= 9 ? "0" + index: index;
        div.addEventListener("click" , () => {
            new audio (`${base}key${number}.wav`).play();
        });
        pianocontainer[0].appendChild(div);
    }
};