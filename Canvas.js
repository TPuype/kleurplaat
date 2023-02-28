'use strict';

/* ++++++++++++++++++ SPEELVELD ++++++++++++++++++ */

class Canvas{
    constructor(field, rows, collumns) {
        this.field = field;
        this.rows = rows;
        this.collumns = collumns;
    }

    createCanvas() {
        amountOfRows = this.rows;
        amountOfCollumns = this.collumns;

        for (let i = 0; i < amountOfRows; i++) {
            let tr = this.field.insertRow();

            for (let j = 0; j < amountOfCollumns; j++) {
                tr.insertCell();
            }
        }
    }
}