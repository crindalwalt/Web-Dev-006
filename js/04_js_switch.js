console.log("Switch Case");
let userName = prompt("Enter your name");
let userAge = parseInt(prompt("Enter your Exact Age🙂"));

switch (userAge) {
  case 10:
    console.log(`🟢 You're 10 years old! ${userName} `);
    break;
  case 20:
    console.log(
      "🟢 You're 20 years old " +
        userName +
        " you might have something in your mind for your career"
    );
    break;
  case 24:
    console.log(
      "🟢 you are 24 years old " +
        userName +
        " you might have a successfull business"
    );
    break;
  case 29:
    console.log("🟢 you almost 30 " + userName + " you should get married");
    break;
  default:
    console.log("you are not 10,20,24,29 years old" + userName);
    break;
}
