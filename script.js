const serie0 = {
  name: "Silicon Valley",
  year: "2014 - 2019",
  genre: "Comédia",
  nationality: "EUA",
  imagem: "./img/silicon-valley.png",
};
const serie1 = {
  name: "Mr. Robot",
  year: "2015 - 2019",
  genre: "Drama",
  nationality: "EUA",
  imagem: "./img/mr-robot.jpg",
};
const serie2 = {
  name: "Black Mirror",
  year: "2011 - Atualmente",
  genre: "Ficção",
  nationality: "UK",
  imagem: "./img/black-mirror.jpg",
};
const serie3 = {
  name: "The it Crowd",
  year: "2006 - 2013",
  genre: "Comédia",
  nationality: "UK",
  imagem: "./img/the-it-crowd.jpg",
};
let series = [];

for (i = 0; i < 4; i++) {
  series.push(eval("serie" + i));
}


function search(array, search){
    const result = array.filter(function (item) {
    return item.name == search 
    });
    console.log(result.length)

    if(result.length==0){
        alert("Nenhuma série encontrada")
         return series
    }else{
        return result
    }
}

function apagar(){
    document.getElementById("item-content").removeChild(node)
}

function show(array, pesquisa){
    if(pesquisa===undefined){
        document.getElementById("item-content").innerHTML=""
        
        array.map((item) => {
            
            let serieItem = document.querySelector(".item").cloneNode(true);
        
            serieItem.querySelector(".image img").src = item.imagem;
            serieItem.querySelector(".item .content").innerHTML = 
            `<ul>
                <li>${item.name}</li>
                <li>Ano: ${item.year}</li>
                <li>Gênero: ${item.genre}</li>
                <li>Nacionalidade: ${item.nationality}</li>
            </ul>`
        
            document.getElementById("item-content").appendChild(serieItem);
        });
    }else{
        document.getElementById("item-content").innerHTML=""
        pesquisa.map((item) => {
            
            let serieItem = document.querySelector(".item").cloneNode(true);
        
            serieItem.querySelector(".image img").src = item.imagem;
            serieItem.querySelector(".item .content").innerHTML = 
            `<ul>
                <li>${item.name}</li>
                <li>Ano: ${item.year}</li>
                <li>Gênero: ${item.genre}</li>
                <li>Nacionalidade: ${item.nationality}</li>
            </ul>`
        
            document.getElementById("item-content").appendChild(serieItem);
        });
    }
}

show(series)

document.getElementById("search-button").style.cursor = "pointer";

document.getElementById("search-button").addEventListener("click", function(){
    let input=document.getElementById("search").value.trim()
    console.log(input)
    show(series, search(series, input))
})




