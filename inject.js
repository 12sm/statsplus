// this is the code which will be injected into a given page...

(function() {

//Quick function we'll use later for number cleanup
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

//Count up Transactions on page and make calculations
var costs = document.querySelectorAll(".transaction-coin > span > span");
var holding = document.querySelector(".pl-info > div > div > .info-item-value").textContent
var netCosts = 0;
//Regex to remove currency symbols and commas from the values so we can do math
var regex = /[^0-9.]/g;
    for (var i = 0; i < costs.length; i++) {
      thisNum = Number(costs[i].textContent.replace(regex,''))
      netCosts += parseFloat(thisNum);
	}

//Clean up those numbers to 2 decimal places

var cleanCosts = numberWithCommas(netCosts.toFixed(2));
var costBasis = numberWithCommas((netCosts/holding).toFixed(2));

//Insert our calcs back into the page table
var cloneBasis = document.querySelector(".pl-info").firstChild.lastChild.cloneNode(true);
document.querySelector(".pl-info").firstChild.lastChild.after(cloneBasis);
document.querySelector(".pl-info").firstChild.lastChild.firstChild.innerHTML = "Cost Basis";
document.querySelector(".pl-info").firstChild.lastChild.lastChild.innerHTML = costBasis;
var cloneNet = document.querySelector(".pl-info").firstChild.lastChild.cloneNode(true);
document.querySelector(".pl-info").firstChild.lastChild.after(cloneNet);
document.querySelector(".pl-info").firstChild.lastChild.firstChild.innerHTML = "Net Costs";
document.querySelector(".pl-info").firstChild.lastChild.lastChild.innerHTML = cleanCosts;
document.querySelector(".pl-info").firstChild.style.width="75%";

})();
