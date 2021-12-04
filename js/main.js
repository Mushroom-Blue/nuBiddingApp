// Variables
let userOneAll = [];
let userTwoAll = [];

function userOneBid() {
  let bidOneAmount = document.getElementById("bidOneInput").value;
  userOneAll.push(bidOneAmount);
  document.getElementById("bidOneInput").value = "";
  findHighestBid();
}

function userTwoBid() {
  let bidTwoAmount = document.getElementById("bidTwoInput").value;
  userTwoAll.push(bidTwoAmount);
  document.getElementById("bidTwoInput").value = "";
  findHighestBid();
}

function findHighestBid() {
  let maxBid = Math.max(...userOneAll, ...userTwoAll);
  document.getElementById("highestBid").innerHTML = "$" + maxBid;
}