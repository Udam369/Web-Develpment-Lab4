function joinArray(Arr) {
    let str = '';
    for (let i = 0; i < Arr.length; i++) {
        str += Arr[i];
        if ( i != Arr.length - 1 ) {
            str += ',';
        }
    }
    return str;
}
let myColor = ["Red", "Blue", "Green", "Orange"];
console.log(joinArray(myColor));
