
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

class Holes {
    constructor(num_holes, seeds_per_hole) {
        this.num_holes = num_holes;
        this.seeds_per_hole = seeds_per_hole;

        this.topHoles = this.create_holes();
        this.botHoles = this.create_holes();
        // this.seeds = [];
        // for(let i = 0; i < num_holes; i++){
        //     var aux = this.draw();
        //     this.topHoles.push(aux);
        //     for(let j = 0; j < seeds_per_hole; j++){
        //         var seed = new Seed();
        //         this.seeds.push(seed.get_seed());
        //     }
        // }

        // for(let i = 0; i < num_holes; i++){
        //     var aux = this.draw();
        //     this.botHoles.push(aux);
        //     for(let j = 0; j < seeds_per_hole; j++){
        //         var seed = new Seed();
        //         this.seeds.push(seed.get_seed());
        //     }
        // }
    }

    create_holes(){
        const holes = [];
        for(let i = 0; i < this.num_holes; i++){
            holes[i] = new Hole(this.seeds_per_hole);
        }
        return holes;
    }

    get_topHoles(){
        return this.topHoles;
    }

    get_botHoles(){
        return this.botHoles;
    }
}

class Hole{
    constructor(seeds_per_hole){
        this.seeds_per_hole = seeds_per_hole;

        this.hole = this.draw();
        this.seeds = this.create_seeds();
        this.draw_seeds();
    }

    draw(){
        const hole = document.createElement('div');
        hole.classList.add('holes');
        //this.attachListeners(hole);
        return hole;
    }

    create_seeds(){
        const seeds = [];
        for(let i = 0; i < this.seeds_per_hole; i++){
            const seed = new Seed();
            seeds.push(seed.get_seed());
        }
        return seeds;
    }

    get_hole(){
        return this.hole;
    }

    draw_seeds(){
        this.seeds.forEach(seed => this.hole.append(seed));
    }
}

class Storage {
    constructor(){
        this.seeds = [];
        this.storage = this.draw();
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

    get_storage(){
        return this.storage;
    }

    draw(){
        let aux = document.createElement('div');
        aux.classList.add('armazem');
        return aux;
    }
}

class Seed{
    constructor(){
        this.seed = this.draw();
    }

    draw(){
        let aux = document.createElement('div');
        aux.classList.add('seeds');
        return aux;
    }

    get_seed(){
        return this.seed;
    }
}


class Board{

    constructor(num_holes, seeds_per_hole){
      this.holes = new Holes(num_holes, seeds_per_hole);                          // chose a dict for holes to make access by index easier in the other functions. We can just reference/get holes by index everytime now
      this.armazemLeft = new Storage();
      this.armazemRight = new Storage();

      //this.players = {p1:this.create_player(this.armazemLeft)};
      //this.players.p1.reverse();
      this.gameOver = false;
      this.board = document.getElementById('board');
      this.draw_elements();
      this.check_click();
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

    draw_elements(){
        this.board.getElementsByClassName('flex-container')[0].appendChild(this.armazemLeft.get_storage());
        let rows = document.createElement('div');
        rows.classList.add('rows');
        this.board.getElementsByClassName('flex-container')[0].appendChild(rows);
        let toprows = document.createElement('div');
        toprows.classList.add('toprows');
        this.board.getElementsByClassName('rows')[0].appendChild(toprows);
        for(let i = 0; i < this.holes.topHoles.length; i++){
            this.board.getElementsByClassName('toprows')[0].append(this.holes.get_topHoles()[i].get_hole());
        }

        let bottomrows = document.createElement('div');
        bottomrows.classList.add('bottomrows');
        this.board.getElementsByClassName('rows')[0].append(bottomrows);

        for(let i = 0; i < this.holes.botHoles.length; i++){
            this.board.getElementsByClassName('bottomrows')[0].append(this.holes.get_botHoles()[i].get_hole());
        }

        this.board.getElementsByClassName('flex-container')[0].appendChild(this.armazemRight.get_storage());
    }

    check_click(){
        const aux = this.board.querySelectorAll('.holes, .armazem');
        console.log("TEste");
        for(let i = 0; i < aux.length; i++){
            aux[i].addEventListener("click", function(){
                console.log("Clicked in a hole");
            });
        }
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
    button.disable = false;
    var board = new Board(document.getElementById('numHoles').value,document.getElementById('numSeeds').value);
    while(!board.get_game_over()){
        //verificar onde carregou
        //
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

