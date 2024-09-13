class vegetable {
    veg_name:string;
    veg_color:string;
    constructor(name:string,color:string){
        this.veg_name = name
        this.veg_color = color
    }
}
let veg_1 = new vegetable("Potato","Yellow")
let veg_2 = new vegetable("Tomato","Red")

console.log(veg_1);
console.log(veg_2);
