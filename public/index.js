const prime = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return 0;
    }
  }
  return num;
};

const primeSum = (nums) => {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += prime(nums[i]);
  }
  return sum;
};

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const nums = [72, 12, 81, 39, 54, 16, 12, 40, 23, 13];
if (primeSum(nums) === 36) {
  console.log("Test 성공");
} else {
  console.log("Test 실패");
}
console.log(nums);
console.log(primeSum(nums));

const evenSum = (nums) => {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      sum += nums[i];
    }
  }
  return sum;
};

console.log(evenSum(nums));
if (evenSum(nums) === 206) {
  console.log("Test 성공");
} else {
  console.log("Test 실패");
}
console.log(nums);

const numArray = [];
for (let i = 0; i < 20; i++) {
  const primeNum = prime(Math.round(Math.random() * 100));
  //   numArray.push(primeNum);
  if (prime(primeNum)) {
    console.log(`${primeNum} : 는 소수입니다.`);
  }
}

for (let i = 0; i < 100; i++) {
  const primeNum = prime(Math.round(Math.random() * 100)) + 5;
  if (primeNum % 3 === 0) {
    console.log(`테스트 케이스 ${primeNum}  는 3의 배수입니다.`);
  }
}
