// this is the code which will be injected into a given page...

(function() {

//Count up Transactions on page and make calculations
var costs = document.querySelectorAll(".transaction-coin > span > span");
var holding = document.querySelector(".pl-info > div > div > .info-item-value").textContent
var netCosts = 0;
    for (var i = 0; i < costs.length; i++) {
      netCosts += Number(costs[i].textContent.replace(/\$/g,''));
	}

//Clean up those numbers to 2 decimal places
var cleanCosts = Math.round(netCosts * 100) / 100;
var costBasis = Math.round((netCosts/holding) * 100) / 100;

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