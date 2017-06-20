var animals = ['Brown bear', 'Red bird', 'Yellow duck', 'Blue horse', 'Green frog', 'Purple cat', 'White dog',
'Black sheep', 'Goldfish', 'Teacher', 'Children' ];

var partOne = function (array) {
    var story = [];
    var personSay = array.forEach(function (item){
        if(item.includes('Brown bear')) {
            var first = item + ", " + item.toLowerCase() + ", what do you see?\n";
            story.push(first);

        }else {
            var parts =  "I see a " + item.toLowerCase() + " looking at me.\n" +
                item + ", " + item.toLowerCase() + ", what do you see?\n";
            story.push(parts);
        }
    });
    return story.join("");
}

var partTwo = function (array) {
    var childSay = array.map(function (item) {
        if (item.includes('Children')) {
            return " ";
        } else if (item.includes('Teacher')) {
            var parts = " and a " + item.toLowerCase();
            return parts;
        } else {
            var parts = " a " + item.toLowerCase();
            return parts;
        }
    });
    return "We see" + childSay + "Looking at us\nThats what we see.";
}

console.log(partOne(animals));
console.log(partTwo(animals));

// need to fix the end Line from comma to period.
