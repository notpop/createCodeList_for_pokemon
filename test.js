let inputElement = document.getElementById("code");
inputElement.value = "";

var event = new Event("input", { bubbles: true });
inputElement.dispatchEvent(event);

var event2 = new Event("change", { bubbles: true });
inputElement.dispatchEvent(event2);

document.getElementsByClassName("Button_blueButton__1PlZZ")[0].click();
