import { ComtorP } from "./ComtorP";
import { ComtorHtmlText } from "./HtmlText";
import { Dog } from "./dog";
let div_juriel = document.querySelector("#juriel")  as HTMLDivElement;
function eventListener(evt:Event): number{

    let p = new ComtorP();
    p.add(new ComtorHtmlText("HOLA"));
    div_juriel.appendChild(p.getHtml());

    return 0;
}

let hello = "Hola mi perro";
console.log(hello);

let miPerro = new Dog("Tanya 3");
console.log(miPerro.name);



let espichame = document.querySelector("#juriel button") as HTMLButtonElement;
espichame.addEventListener("click", eventListener);
