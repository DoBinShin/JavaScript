console.log("hello world");
console.log(1);
console.log(true);
console.log("ddd");

// let a = 1 === 2;
// let b = 'abc' !== 'def'
// let c = a !== b;
// let d = typeof a === typeof b === true;

// console.log(a, typeof a);
// console.log(b, typeof b);
// console.log(c, typeof c);
// console.log(d, typeof d);


// --------------------- array -----------------------------
const winners = [12, 592, 7, 48];
const weekdays = ['월', '화', '수', '목', '금', '토', '일'];

// 자료형에 관계없이 한 배열에 넣을 수 있음
const randoms = ['홍길동', -24, true, null, undefined];

console.log(typeof winners);
console.log(winners, weekdays, randoms);

const groups = [[1, 2], [3, 4, 5], [6, 7, 8, 9]];

const weapons = [
  { name: '롱소드', damage: 30, design: ['화룡검', '뇌신검'] },
  { name: '활', damage: 12 },
  { name: '워해머', damage: 48 },
];

console.log(groups[1][2]);
console.log(weapons[2].damage);
console.log(weapons[0].design[0]);


// ------------------- SCOPE CHAIN -------------------------
let a = 0;
let b = 1;
let c = 2;
console.log('시점 1:', a, b, c);

{
  let a = 'A';
  let b = 'B'
  console.log('시점 2:', a, b, c);

  {
    let a = '가'
    console.log('시점 3:', a, b, c);
  }

  console.log('시점 4:', a, b, c);
}

console.log('시점 5:', a, b, c);

// ------------------------ for of ------------------------
for (const letter of '안녕하세요~') {
    console.log(letter);
  }

// 출력결과
// 안
// 녕
// 하
// 세
// 요
// ~

// --------------- array function -------------------
let arithmetics = [
    (a, b) => a + b,
    (a, b) => a - b,
    (a, b) => a * b,
    (a, b) => a / b
  ];
  
  for (arm of arithmetics) {
    console.log(arm(5, 3));
  }


  // ------------ funtion return ---------------
const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;

function comb3ArmFuncs(armFunc1, armFunc2, armFunc3) {
  return (x, y) => armFunc3(armFunc2(armFunc1(x, y), y), y);
}

const add_mul_sub = comb3ArmFuncs(add, mul, sub);
const mul_add_div = comb3ArmFuncs(mul, add, div);
const div_add_mul = comb3ArmFuncs(div, add, mul);

console.log(
    add_mul_sub(10, 4),
    mul_add_div(10, 4),
    div_add_mul(10, 4)
  );


// -------------------- Currying --------------------

// 아래와 같은 코드가 있다고 쳤을 때
function addMultSubt (a, b, c, d) {
    return (a + b) * c - d;
  }
  
  const addMultSubt2 = (a, b, c, d) => (a + b) * c - d;
  
  console.log(
    addMultSubt(2, 3, 4, 5),
    addMultSubt2(2, 3, 4, 5),
  );
// 만약 인자로 받을 2,3,4,5 중에 4,5 자리에 들어갈 인자가 아직 미정이라면 
// 해당 코드는 실행이 불가하여 임의값을 사용하거나 해야 한다.

// 하지만 커링을 사용하면..
// ⭐ 커링으로 작성된 함수
function curryAddMultSubt (a) {
    return function (b) {
      return function (c) {
        return function (d) {
          return (a + b) * c - d;
        }
      }
    }
  }
  
  const curryAddMultSubt2 = a => b => c => d => (a + b) * c - d;

console.log(
    curryAddMultSubt(2)(3)(4)(5),
    curryAddMultSubt(2)(3)
);
// 위(curryAddMultSubt(2)(3)(4)(5))와 같이 전달할 인자를 하나하나 지정 할 수 있다.   


const curryAddMultSubtFrom2 = curryAddMultSubt(2);
const curryMultSubtFrom5 = curryAddMultSubt(2)(3);
const currySubtFrom20 = curryAddMultSubt(2)(3)(4);

console.log(curryAddMultSubtFrom2);
console.log(curryMultSubtFrom5);
console.log(currySubtFrom20);

// 화살표 함수로 바꾸어 다시 실행해 볼 것
const curryAddMultSubt2From2 = curryAddMultSubt2(2);
const curryMultSubt2From5 = curryAddMultSubt2(2)(3);
const currySubt2From20 = curryAddMultSubt2(2)(3)(4);

console.log(curryAddMultSubt2From2);
console.log(curryMultSubt2From5);
console.log(currySubt2From20);

// 필요한 인자를 마저 전달해주기
console.log(
    curryAddMultSubtFrom2(3)(4)(5),
    curryMultSubtFrom5(4)(5),
    currySubtFrom20(5)
  );



