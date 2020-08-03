// var record = ["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"];
// console.log('record : ', record);
// var answer = solution(record);
// console.log('answer : ', answer);

function solution(record) {
    var userMapp = {};
    record.forEach(element => {
        var elArr = element.split(" ");
        if (!userMapp[elArr[1]]) {
            userMapp[elArr[1]] = elArr[2];
        }
        if (elArr[0] !== 'Leave') {
            userMapp[elArr[1]] = elArr[2];
        }
    });

    var answer = [];
    record.forEach(element => {
        var elArr = element.split(" ");
        switch (elArr[0]) {
            case 'Enter':
                answer.push(userMapp[elArr[1]] + ' came in.');
                break;
            case 'Leave':
                answer.push(userMapp[elArr[1]] + ' has left.');
                break;
            default:
                break;
        }
    });
    return answer;
}
