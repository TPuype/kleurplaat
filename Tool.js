
class Tool {

    color;
    size;

    constructor(color, size, shape) {
        this.color = color;
        this.size = size;
    }

    get color(){
        return this.color;
    }

    get size(){
        return this.size;
    }

    set color(color){
        this.color = color;
    }

    set size(size){
        this.size = size;
    }

}