const darkLoad = ['darks', 'demins', 'sweaters'];
const colourLoad = ['kidsSanitize', 'kids', 'tshirts'];
const lightLoad = ['whites', 'towels'];


console.log(darkLoad.concat(colourLoad, lightLoad));

myConcat = function (a, b, c) {
    let laundry = [];
    let args = [a, b, c]
    args.forEach(function(arrays) {
        arrays.forEach(function(item) {
         laundry.push(item);
        });
    });
    return laundry;
};

myConcat2 = function() {
    let laundry = [];
    let args = Array.from( arguments);
    args.forEach(function (items) {
        items.forEach(function(item){
            laundry.push(item);
        })
    });
    return laundry;
};


console.log(myConcat(darkLoad, colourLoad, lightLoad));

 console.log(myConcat2(darkLoad, colourLoad, lightLoad));
