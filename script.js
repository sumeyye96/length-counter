
const calculateCharacter = () => {
  // Write your codes here
  let isim= prompt("İsim girin.");
  let tweet= prompt ("Tweet girin.");
//let tweet="Bu bir tweettir.";
let tweetCount= tweet.length; // tweet içindeki değerin karakter uzunluğu.
let tweetLeft= 150 - tweetCount;
alert(`${tweetCount} karakter yazdınız, ${tweetLeft} karakter kaldı.`);
console.log(tweetCount, "karakter yazdınız,",tweetLeft, "karakter kaldı.");
console.log(`${tweetCount} karakter yazdınız, ${tweetLeft} karakter kaldı.`);



}


// Invoke the function when button is clicked

btn.addEventListener('click', calculateCharacter);
