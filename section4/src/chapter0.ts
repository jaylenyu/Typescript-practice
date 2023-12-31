// 함수타입의 정의
// 어떤 값을 매개변수로 받고 어떤 값을 반환하는가

function func(a: number, b: number) {
    return a + b
}

// 선택적 매개변수
function introduce(name: string, tall: number, age?: number) {
    console.log(`name : ${name}`);
    console.log(`tall : ${tall + 10}`);
    console.log(`age : ${age}`);
    
}

introduce('정인', 190, 32)


// rest파라미터 타입
function getSum(...rest: number[]) {
    let sum = 0;
    rest.forEach((it) => sum += it)
    return sum;
}

console.log(getSum(1, 2, 3)) // 6
console.log(getSum(1, 2, 3, 4, 5)) // 15