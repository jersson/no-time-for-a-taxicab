const  { cardinalPoints, directionToTurn } = require('./utils');
const Point = require('./geometry');

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