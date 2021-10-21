let a=1;
let b=3;
let c=13;

if (a==0) {
    const x = (-c) / b;
    console.log("X=" + x);
} else {

    const D = b**2 - (4*a*c);

    if ( D<0 ) {
        console.log("Unsolvable");
    }

   else if (D==0){
        
        const x = -b / (2*a);
        console.log("X=" + x);

    }

    else  {
        const x1 = (-b + D**(1/2))/2*a;
        const x2 = (-b - D**(1/2))/2*a;
        console.log("X1=" + x1);
        console.log("X2=" + x2);        
    }

}