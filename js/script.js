
function Phone(brand, price, color, date, camera){
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.date = date;
    this.camera = camera;
}

Phone.prototype.printInfo = function(){
    console.log("The phone brand is " + this.brand + ", color is " + this.color + ", and the price is " + this.price + ". Date of production is: "+ this.date + " Camera has " + this.camera + ".");
}

var Iphone6s = new Phone("Apple", 2250, "silver", 2015, "12 Mpx");
var GalaxyS7 = new Phone("Samsung", 3000, "blue", 2017, "21 Mpx");
var P9 = new Phone("Huawei", 1300, "gold", 2015, "2 x 12 Mpx");



Iphone6s.printInfo();
GalaxyS7.printInfo();
P9.printInfo();



