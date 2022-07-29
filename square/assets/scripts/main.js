// let rectangle = {
//     left: 0,
//     top: 0,
//     right: 15,
//     bottom: 10,

//     showRectagle() {
//       console.log('A=', this.left, this.top, ' B =', this.right, this.top, ' C = ', this.right, this.bottom, ' D=', this.left, this.bottom)
//     },

//     showWidth() {
//       let width = this.right - this.left
//       console.log('width = ', width)
//       return width
//     },
//     showHeight() {
//       let height = this.bottom - this.top
//       console.log('height = ', height)
//       return height
//     },
//     showContent() {
//       console.log('content',this.showHeight() * this.showWidth())
//       return this.showHeight() * this.showWidth()
//     },
//     perimetr(){
//       return (this.showHeight() + this.showWidth()) * 2
//     },
//     showPerimetr(){
//       console.log('showPerimetr', this.perimetr())
//     },
//     setHeight(value){
//       this.bottom+=value;
//     },
//     setWidth(value){
//       this.right+=value;
//     },
//     shiftX(value){
//       this.left+=value
//       this.right+=value
//     },
//     shiftY(value) {
//       this.top += value
//       this.bottom += value
//     },
//     position(point){
//       // {right:4, bottom:6}
//       if(point.right<=this.right && point.right>=this.left && point.bottom<=this.bottom && point.bottom>=this.top){
//           return true
//       }
//       return false
//     }

//   }


let rectangle = {
    a: {
        x: 1,
        y: 5
    },
    b: {
        x: 7,
        y: 5
    },
    c: {
        x: 1,
        y: 1
    },
    d: {
        x: 7,
        y: 1
    },
    field: [],
    buildField: function () {
        let field = [];
        for (let iy = 0; iy < 20; iy++) {
            field[iy] = [];
            for (let ix = 0; ix < 20; ix++) {
                if (this.c.y == iy
                    && ix <= this.d.x
                    && ix >= this.c.x) {
                    field[iy][ix] = " H ";
                    continue;
                }
                if (this.a.y == iy
                    && ix <= this.b.x
                    && ix >= this.a.x) {
                    field[iy][ix] = " H ";
                    continue;
                }
                if (this.a.x == ix
                    && this.c.y <= iy
                    && this.a.y >= iy) {
                    field[iy][ix] = " H ";
                    continue;
                }
                if (this.b.x == ix
                    && this.d.y <= iy
                    && this.b.y >= iy) {
                    field[iy][ix] = " H ";
                    continue;
                }

                field[iy][ix] = "   ";
            }
        }
        this.field = field;
        return field;
    },
    showField: (field) => {
        console.log(field);  
    },
    shiftX(value){
        this.a.x = this.c.x += value;
        this.b.x = this.d.x += value;
        return this.buildField();
    },
    shiftY(value) {
        this.a.y = this.c.x += value;
        this.b.x = this.d.x += value;
    },

}

let field = rectangle.buildField();
rectangle.showField(field);
let fieldShift = rectangle.shiftX(5);
rectangle.showField(fieldShift);