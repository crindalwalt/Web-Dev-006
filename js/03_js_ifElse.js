console.log("IF Else page");
let calculation = 12 < 34 && 6 == 9; // false
let permission = confirm("Do you want me to check your  Driving eligibility");
if (permission) {
  let age = parseInt(prompt("Enter your age")); //
  // agr age 18 se bri hy (allow driving)
  // agr ni hy tu (dont allow)

  if (age >= 18 && age <= 60) {
    alert("you can drive");
  } else if (age > 60 && age <= 150) {
    alert("you cannot drive due to older age");
  } else if (age > 150) {
    alert("Human does not live that you might be a jin");
  } else {
    alert("you should wait till 18 then you'll get your lisense");
  }
}else{
    alert("OK ni krta check");
}

