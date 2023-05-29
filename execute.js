// ここに入力するJSONデータ
let jsonData = {
  values: [""],
};

// 非同期のスリープ関数
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// データの挿入とボタンのクリックを行う非同期関数
async function processValues() {
  for (let i = 0; i < jsonData.values.length; i++) {
    let inputElement = document.getElementById("code");
    inputElement.value = jsonData.values[i];

    var event = new Event("input", { bubbles: true });
    inputElement.dispatchEvent(event);

    var event2 = new Event("change", { bubbles: true });
    inputElement.dispatchEvent(event2);

    if (i % 10 === 0 && i !== 0) {
      document.getElementsByClassName("Button_blueButton__1PlZZ")[1].click(); // 10件ごとに特定のボタンをクリック
    } else {
      document.getElementsByClassName("Button_blueButton__1PlZZ")[0].click(); // ボタンをクリック
    }

    await sleep(3000); // 3秒スリープ
  }
}

// 関数を呼び出し
processValues();
