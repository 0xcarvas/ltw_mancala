  
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
  }


