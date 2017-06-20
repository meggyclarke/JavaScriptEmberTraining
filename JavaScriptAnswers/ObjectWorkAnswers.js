const myHobbitObj = {
    meal3: 'this is meal 3 Breakfast',
    meal6: 'this is meal 6 Lunch',
    meal9: 'this is meal 9 Dinner'
};

for(const meal in myHobbitObj) {
    console.log(`${meal} = ${myHobbitObj[meal]}`);
};

for(let i = 1; i < 4; i++) {
    const num = i * 3;
    console.log(myHobbitObj['meal' + num]);
};
