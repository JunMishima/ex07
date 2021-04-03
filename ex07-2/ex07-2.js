// 1,配列の要素を反転させる
const a = [1, 2, 3];
console.log(a);
a.reverse();
console.log(a)

// 2,比較関数
var numbers = [5, 6, 3, 1, 4, 2];
numbers.sort(function(a, b)
{ return a - b;
});
console.log(numbers);

// 3,配列に値を連結させる
const letters = ['a', 'b', 'c'];
const alphaNumeric = letters.concat(1, [2, 3]);
console.log(alphaNumeric);


// 文字列オブジェクトで使えるメソッドとの共通点、相違点については、わかりませんでした。
