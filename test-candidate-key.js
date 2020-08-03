// var relation = [
//     ["100","ryan","music","2"],
//     ["200","apeach","math","2"],
//     ["300","tube","computer","3"],
//     ["400","con","computer","4"],
//     ["500","muzi","music","3"],
//     ["600","apeach","music","2"]
// ];

// console.log('relation : ', relation);
// var answer = solution(relation);
// console.log('answer : ', answer);

function solution(relation) {
    var newArray = transpose(relation);

    var uniqueCount = [];
    newArray.forEach(element => {
        var uniqueArr = filterArr(element);
        uniqueCount.push(uniqueArr.length);
    });

    var answer = 0;
    answer = filterArr(uniqueCount).length;
    return answer;
}

function transpose(relation) {
    var newArray = [];
    for(var i = 0; i < relation[0].length; i++){
        newArray.push([]);
    };

    for(var i = 0; i < relation.length; i++){
        for(var j = 0; j < relation[i].length; j++){
            newArray[j].push(relation[i][j]);
        };
    };

    return newArray;
}

function filterArr(element) {
    const unique = (value, index, self) => {
        return self.indexOf(value) === index;
    }

    return element.filter(unique);
}
