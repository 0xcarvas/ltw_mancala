
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
    this.seeds = initial_seeds;
    }

    get_number_of_seeds(){
    return seeds;
    }
    set_seeds(n){
    this.seeds = n;
    }
}


class Board{

    constructor(num_holes, seeds_per_hole){
      this.holes = {};                          // chose a dict for holes to make access by index easier in the other functions. We can just reference/get holes by index everytime now
      var i = 0;
      while(i < num_holes * 2 + 2){             // num_holes = number of normal holes in a player's side
        holes[i] = new Hole(seeds_per_hole);
        i++;
      }
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

    draw(){
        for(let i = 0; i < num_holes; i++){
            this.holes[i].draw;
        }
    }
}

function startGame(){
    document.getElementById("startgame").innerHTML = "Good Luck";
}

