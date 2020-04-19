// https://programmers.co.kr/learn/courses/30/lessons/42576

function solution(participant, completion) {
  const completionMap = {};
  completion.forEach((name) => {
    completionMap[name] = completionMap[name] ? completionMap[name] + 1 : 1;
  });

  var answer = "";
  for (let i = 0; i < participant.length; i++) {
    if (completionMap[participant[i]]) {
      completionMap[participant[i]] = completionMap[participant[i]] - 1;
      // if (completionMap[participant[i]] === 0) {
      //   delete completionMap[participant[i]];
      // }
    } else {
      answer = participant[i];
      break;
    }
  }
  return answer;
}

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"])); // leo
console.log(
  solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]) // mislav
); //
