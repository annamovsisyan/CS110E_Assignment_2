let triangle_base = 3;

let triangle_height = 10;

let rectangle_height = 7;
 
let rectangle_width = 4;

const triangle_area = triangle_base * triangle_height * 1/2 ;

const rectangle_area = rectangle_height * rectangle_width;

//To find the biggest area between  the triangle and the rectangle.

if (triangle_area > rectangle_area) {

    console.log("The triangle has a bigger area");

} else if (triangle_area < rectangle_area) {

    console.log("The rectangle has a bigger area")

} else {

    console.log("Areas of triangle and rectangle are equal")
}