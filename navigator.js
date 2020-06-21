const cardinalPoints = {
    west: 'Oeste',
    north: 'Norte',
    east: 'Este',
    south: 'Sur'
};

const directionToTurn = {
    right: 'R',
    left: 'L'
};

class Point {
    constructor (x,y){
        this.x = x;
        this.y = y;
    }
};

class Navigator {
    constructor(){
        this.whereToHead = cardinalPoints.north;
        this.position = new Point(0,0); 
    };

    navigate(instructions){

        instructions.split(', ').map(instruction => {
            const whereToTurn = instruction[0];
            const blocks = parseInt(instruction.substr(1));

            this.move(whereToTurn,this.whereToHead, blocks);    
        });
    };

    move(whereToTurn, path, blocks) {
        switch (path) {
            case cardinalPoints.north:
                if (whereToTurn == directionToTurn.right) {
                    this.position.x += blocks; 
                    this.whereToHead = cardinalPoints.east;
                } else {
                    this.position.x -= blocks; 
                    this.whereToHead = cardinalPoints.west;
                }       
                break;

            case cardinalPoints.south:
                if (whereToTurn == directionToTurn.right) {
                    this.position.x -= blocks; 
                    this.whereToHead = cardinalPoints.west;
                } else {
                    this.position.x += blocks; 
                    this.whereToHead = cardinalPoints.east;
                }
                break;

            case cardinalPoints.east:
                if (whereToTurn == directionToTurn.right) {
                    this.position.y -= blocks; 
                    this.whereToHead = cardinalPoints.south;
                } else {
                    this.position.y += blocks; 
                    this.whereToHead = cardinalPoints.north;
                }
                break;

            case cardinalPoints.west:
                if (whereToTurn == directionToTurn.right) {
                    this.position.y += blocks; 
                    this.whereToHead = cardinalPoints.north;
                } else {
                    this.position.y -= blocks; 
                    this.whereToHead = cardinalPoints.south;                    
                }
                break;
            default:
                break;
        }
    };

    distanceAway(){
        return Math.abs(this.position.x) + Math.abs(this.position.y);
    };
};

module.exports = Navigator;

// let path = 'R3, L2, L2, R4, L1, R2, R3, R4, L2, R4, L2, L5, L1, R5, R2, R2, L1, R4, R1, L5, L3, R4, R3, R1, L1, L5, L4, L2, R5, L3, L4, R3, R1, L3, R1, L3, R3, L4, R2, R5, L190, R2, L3, R47, R4, L3, R78, L1, R3, R190, R4, L3, R4, R2, R5, R3, R4, R3, L1, L4, R3, L4, R1, L4, L5, R3, L3, L4, R1, R2, L4, L3, R3, R3, L2, L5, R1, L4, L1, R5, L5, R1, R5, L4, R2, L2, R1, L5, L4, R4, R4, R3, R2, R3, L1, R4, R5, L2, L5, L4, L1, R4, L4, R4, L4, R1, R5, L1, R1, L5, R5, R1, R1, L3, L1, R4, L1, L4, L4, L3, R1, R4, R1, R1, R2, L5, L2, R4, L1, R3, L5, L2, R5, L4, R5, L5, R3, R4, L3, L3, L2, R2, L5, L5, R3, R4, R3, R4, R3, R1';
// path = 'R3, L5, R2, L1, L2, R5, L2, R2, L2, L2, L1, R2, L2, R4, R4, R1, L2, L3, R3, L1, R2, L2, L4, R4, R5, L3, R3, L3, L3, R4, R5, L3, R3, L5, L1, L2, R2, L1, R3, R1, L1, R187, L1, R2, R47, L5, L1, L2, R4, R3, L3, R3, R4, R1, R3, L1, L4, L1, R2, L1, R4, R5, L1, R77, L5, L4, R3, L2, R4, R5, R5, L2, L2, R2, R5, L2, R194, R5, L2, R4, L5, L4, L2, R5, L3, L2, L5, R5, R2, L3, R3, R1, L4, R2, L1, R5, L1, R5, L1, L1, R3, L1, R5, R2, R5, R5, L4, L5, L5, L5, R3, L2, L5, L4, R3, R1, R1, R4, L2, L4, R5, R5, R4, L2, L2, R5, R5, L5, L2, R4, R4, L4, R1, L3, R1, L1, L1, L1, L4, R5, R4, L4, L4, R5, R3, L2, L2, R3, R1, R4, L3, R1, L4, R3, L3, L2, R2, R2, R2, L1, L4, R3, R2, R2, L3, R2, L3, L2, R4, L2, R3, L4, R5, R4, R1, R5, R3';
// console.log(`instrucciones: ${path}\n`);
// const santa =  new Navigator();
// santa.navigate(path);
// console.log(`Menor distancia: ${santa.distanceAway()}`);