const serie0 = {
    id: 0,
  name: "Silicon Valley",
  year: "2014 - 2019",
  genre: "Comédia",
  nationality: "EUA",
  imagem: "./img/silicon-valley.png",
  description: "Richard (Thomas Middleditch), Big Head (Josh Brener), Gilfoyle (Martin Starr) e Dinesh (Kumail Nanjiani) são programadores tão inteligentes quanto introvertidos. Eles trabalham na companhia Hooli, no Vale do Silício, e vivem sob a 'custódia' de Erlich, um milionário que os deixa morarem em sua casa de graça - desde que ele ganhe 10% dos lucros dos projetos dos garotos. Após a falha de um investimento do capitalista Peter Gregory (Christopher Evan Welch), Richard parece destinado a permanecer em seu trabalho medíocre na companhia, fundada pelo megalomaníaco Gavin Belson (Matt Ross). Quando Mônica (Amanda Crew), chefe de operações de Gregory, e Jared (Zach Woods), executivo, percebem o valor do algorítmo criado por Richard, uma disputa de ofertas surge entre Belson e Gregory, e Richard fica no meio.",
  video:"https://www.youtube.com/embed/lqgM8ZdAqKo"
};
const serie1 = {
    id: 1,
  name: "Mr. Robot",
  year: "2015 - 2019",
  genre: "Drama",
  nationality: "EUA",
  imagem: "./img/mr-robot.jpg",
  description: "Elliot (Rami Malek) é um jovem programador que trabalha como engenheiro de segurança virtual durante o dia, e como hacker vigilante durante a noite. Elliot se vê numa encruzilhada quando o líder (Christian Slater) de um misterioso grupo de hacker o recruta para destruir a firma que ele é pago para proteger. Motivado pelas suas crenças pessoais, ele luta para resistir à chance de destruir os CEOs da multinacional que ele acredita estarem controlando - e destruindo - o mundo.",
  video:"https://www.youtube.com/embed/V0XOApF5nLU"
};
const serie2 = {
    id: 2,
  name: "Black Mirror",
  year: "2011 - Atualmente",
  genre: "Ficção",
  nationality: "UK",
  imagem: "./img/black-mirror.jpg",
  description: "Black Mirror retrata a inquietação coletiva em relação ao mundo moderno. Com muito suspense e genialidade, cada história explora temas relacionados à paranoia tecnológica contemporânea. A tecnologia transformou todos os aspectos de nossa vida: em todas as casas, em todos os escritórios e nas mãos de todas as pessoas há uma tela de plasma, um monitor, um smartphone – um espelho negro refletindo a nossa existência no século 21.",
                
  video:"https://www.youtube.com/embed/jROLrhQkK78"
};
const serie3 = {
    id: 3,
  name: "The it Crowd",
  year: "2006 - 2013",
  genre: "Comédia",
  nationality: "UK",
  imagem: "./img/the-it-crowd.jpg",
  description: "Dois técnicos de TI e a gerente deles. Moss (Richard Ayoade), Roy (Chris O'Dowd) e Jen (Katherine Parkinson) trabalham em um porão de uma companhia de muito sucesso, a Reynholm Industries, eles sempre são chamados quando alguém precisa de ajuda, mas nunca são tratados com respeito.",
  video:"https://www.youtube.com/embed/MwwTfkXk7U0"
};

let series = [];

for (i = 0; i < 4; i++) {
  series.push(eval("serie" + i));
}


function search(array, search){
    const result = array.filter(function (item) {
        let searchLower=search.toLowerCase()
    return item.name.toLowerCase().includes(searchLower) 
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

function show(array){
        document.getElementById("item-content").innerHTML=""
        
        array.map((item, index) => {
            
            let serieItem = document.querySelector(".item").cloneNode(true);
        
            serieItem.querySelector(".image img").src = item.imagem;
            serieItem.querySelector(".item .content").innerHTML = 
            `<ul>
                <li>${item.name}</li>
                <li>Ano: ${item.year}</li>
                <li>Gênero: ${item.genre}</li>
                <li>Nacionalidade: ${item.nationality}</li>
            </ul>`

            //setando um atributo "data-key" para usa-lo ao abrir o modal e preencher os dados da janela com a serie selecionada
            serieItem.setAttribute("data-key", index);


            //ABRINDO O MODAL

            serieItem.addEventListener("click", (e)=>{

                let key = e.target.closest(".item").getAttribute("data-key");

                document.querySelector(".serieWindowArea").style.display="flex"

                document.querySelector(".video iframe").src=series[key].video

                document.querySelector(".content-text .tittle").innerHTML=series[key].name
                
                document.querySelector(".content-text .content-description").innerHTML=series[key].description




                document.querySelector(".serieWindowArea").style.opacity = 0;
                document.querySelector(".serieWindowArea").style.display = "flex";
                //setando opacidade para 1 porem com uma espera para fazer o efeito de transição
                setTimeout(() => {
                    document.querySelector(".serieWindowArea").style.opacity = 1;
                }, 200);

            });

            

            document.getElementById("item-content").appendChild(serieItem);

            
        });
    
}

function closeModal() {
    document.querySelector(".video iframe").src=""
    document.querySelector(".serieWindowArea").style.opacity = 0;
    setTimeout(() => {
        document.querySelector(".serieWindowArea").style.display = "none";
    }, 400);
  }

show(series)

document.getElementById("search-button").style.cursor = "pointer";

document.getElementById("search-button").addEventListener("click", function(){
    let input=document.getElementById("search").value.trim()
    console.log(input)
    show(search(series, input))
    document.querySelector("search").placeholder
})




