
document.querySelector('#show_login').addEventListener('click',() => {
    document.querySelector('.popup').classList.add('active');
});
document.querySelector('.popup .close-btn').addEventListener('click',() => {
    document.querySelector('.popup').classList.remove('active');
});

const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

open.addEventListener('click', () => {
    modal_container.classList.add('show');
});

close.addEventListener('click', () => {
    modal_container.classList.remove('show');
});
class Hole {
    constructor(initial_seeds) {
            this.initial_seeds = initial_seeds;
            this.seeds = this.create_seeds();
        }

    get_number_of_seeds(){
            return this.seeds.length();
    }
    set_seeds(n){
            this.initial_seeds = n;
    }
    
    create_seeds(){
        const seeds = [];
        for(let i = 0; i < this.initial_seeds; i++){
            var auxSeed = new Seed();
            seeds.push(auxSeed);
        }
        return seeds;
    }

    // draw_seeds(){
    //     this.seeds.forEach(seed => this.seeds.append(seed));
    // }

    // setNewSeeds(){
    //     this.seeds.forEach(seed=>{seed.remove()});
    // }
}

class Storage {
    constructor(){
        this.seeds = [];
    }

    get_number_of_seeds(){
        return this.seeds.length();
    }
    add_seeds(n){
        var aux;
        for(let i=0; i < n; i++){
            aux = new Seed();
            this.seeds.push(aux);
        }
    }

}

class Seed{
    constructor(){

    }
}


class Board{

    constructor(num_holes, seeds_per_hole){
      this.holes = [];                          // chose a dict for holes to make access by index easier in the other functions. We can just reference/get holes by index everytime now
      this.armazemLeft = new Storage();
      this.armazemRight = new Storage();
      var i = 0;
      while(i < num_holes * 2){               // num_holes = number of normal holes in a player's side
        this.holes[i] = new Hole(seeds_per_hole);
        i++;
      }

      //this.players = {p1:this.create_player(this.armazemLeft)};
      //this.players.p1.reverse();
      this.gameOver = false;
      this.board = document.getElementById('board');
      this.draw_elements(num_holes, seeds_per_hole);
      //this.check_click();
    }

    opposed(hole_index){
        return Object.keys(holes).length - hole_index;
    }

    next_hole(hole_index){
        if (hole_index = Object.keys(holes).length - 1){
            return 0;
        }
        else{
            return hole_index + 1;
        }
    }

    draw_elements(num_holes, seeds_per_hole){
        var top, left;
        if(num_holes > 5){
            for(let i = 0; i < num_holes - 5; i++){
                //adiciona i cavidades
                //console.log("adiciona" + num_holes - 5 + "cavidades");
                top = Math.random() * 300;
                left = Math.random() * 300;
                document.getElementById('seeds').style.top=top+"px";
                document.getElementById('seeds').style.left=left+"px";
                //adicionar ao html num_holes - 5
            }
        }
        else{
            for(let i = 0; i < 5 - num_holes; i++){
                //remove i cavidades
                console.log("remove" + 5 - num_holes + "cavidades");
            }
        }
        if(seeds_per_hole > 5){
            for(let i = 0; i < seeds_per_hole - 5; i++){
                //adiciona i sementes
                //console.log("adiciona" + seeds_per_hole - 5 + "sementes");
            }
        }
        else{
            for(let i = 0; i < 5 - seeds_per_hole; i++){
                //remove i sementes
                console.log("remove" + 5 - seeds_per_hole + "cavidades");
            }
        }
        //this.gameOver = true;
    }

    printBoard(num_holes){
        console.log(this.armazemLeft.get_number_of_seeds());
        for(let i = 0; i < num_holes * 2; i++){
            console.log(this.holes[i].get_number_of_seeds());
        }
        console.log(this.armazemRight.get_number_of_seeds());
    }

    get_game_over(){
        return this.gameOver;
    }
}

function startGame(){
    var button = document.getElementById("startgame");
    const aux = document.querySelectorAll(".holes, .armazem");
    button.disable = false;
    //console.log(document.getElementById('numHoles').value + ' ' + document.getElementById('numSeeds').value);
    var board = new Board(document.getElementById('numHoles').value,document.getElementById('numSeeds').value);
    //board.printBoard(document.getElementById('numHoles').value);
    while(!board.get_game_over()){
        //verificar onde carregou
        //
        console.log("TEste");
        for(let i = 0; i < aux.length; i++){
            aux[i].addEventListener("click", function(){
                console.log("Clicked in a hole");
            });
        }
        //await sleep(10000);
        board.gameOver = true;
    }
}


// class Tabuleiro{
//     constructor(nSeeds, nCavs){
//         this.cavidades = new Cavidades(nSeeds, nCavs);
//         this.armazemLeft = new Armazem(0);
//         this.armazemRight = new Armazem(0);
//         this.gameOver = true;

//         this.players = {p1:this.create_player(this.armazemLeft)};
//         this.players.p1.reverse();

//         this.tabuleiro = document.getElementById('board');

//         this.draw_objects();
//         this.checkIfClicked();
//     }

//     draw_objects();
// }

