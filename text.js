// Welly 面試題目

// 請回覆下列3個問題，並將程式碼上傳到 github 後分享鏈接給我們。

// ---------------------

// 1. JavaScript: 字串反轉
function reverseString(str) {
  // 實作你的解答
  // 將字串轉換為陣列，反轉，再轉換回字串
  return str.split("").reverse().join("");
}

console.log(reverseString("Hello")); // 預期輸出: "olleH”

// ---------------------

// 2. JavaScript: 陣列過濾
// 問題：寫一個JavaScript函式，接受一個數字陣列，並返回該陣列中所有大於5的數字。

// 範例：

function filterNumbersGreaterThanFive(numbers) {
  // 實作你的解答
  let filterNum = numbers.filter((num) => {
    return num >= 5;
  });
  return filterNum;
}

const numbers = [2, 8, 4, 10, 1, 7];

console.log(filterNumbersGreaterThanFive(numbers)); // 預期輸出: [8, 10, 7]

// ---------------------

// 3. JavaScript: 重構
// 問題：重構這段程式碼並說明原因

// function formatName(firstName, lastName) {
//   let formattedName = "";

//   if (firstName) {
//     formattedName += firstName;
//   }

//   if (lastName) {
//     formattedName += " " + lastName;
//   }

//   return formattedName;
// }

function formatName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

console.log(formatName("lin", "shane"));

// 利用 Template Literals 將 兩個參數直接組合並回傳結果，使程式碼簡潔，也更容易理解。

// ---------------------

// 4. React: 條件渲染
// 問題：在React中，如何根據條件渲染兩種不同的內容？

// 範例：

function ConditionalRendering({ isLoggedIn }) {
  // 實作你的條件渲染
  return (
    <div>
      {isLoggedIn ? <p>Welcome, User!</p> : <p>Oops! please log in again.</p>}
    </div>
  );
}
export default ConditionalRendering;

// ---------------------

// 5. React: 組件
// 問題：使用React創建一個簡單的計數器組件，具有增加和減少計數的按鈕。

// 回答在Counter.jsx檔案裡
