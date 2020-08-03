// var users = [2,1,2,5,2,4,3,3];
// var stages = 5;
// console.log('users : ', users);
// var answer = solution(stages, users);
// console.log('answer : ', answer);

function solution(N, users) {
    var userMapp = {};
    var rateMapp = {};
    users.forEach(user => {
        if (user > N || user < 1) {
            console.log('user invalid!');
            delete user;
        } else {
            if (!userMapp[user]) {
                userMapp[user] = 0;
            }
            userMapp[user]++;
        }
    });

    var answer = [];
    if (Object.keys(userMapp).length > 0) {
        var tempTotal = 0;
        for (let i = 1; i < (N + 1); i++) {
            if (userMapp.hasOwnProperty(i)) {
                var rate = userMapp[i] / (users.length - tempTotal);
                if (userMapp[i] === (users.length - tempTotal)) {
                    rate = 0 / (users.length - tempTotal);
                }
                if (!rateMapp[i]) {
                    rateMapp[i] = rate;
                }
                tempTotal += userMapp[i];
            } else {
                if (i < N) {
                    if (!rateMapp[i]) {
                        rateMapp[i] = 0;
                    }
                }
            }
        }
    }
    answer = Object.keys(rateMapp).sort(function(a,b){return rateMapp[b]-rateMapp[a]})
    return answer;
}
