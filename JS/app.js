'use strict';


let hours = [' ', ' 6:00am ', ' 7:00am  ', ' 8:00am  ', ' 9:00am  ', ' 1:000am  ', ' 11:00am  ', ' 12:00am  ', ' 1:00pm  ', ' 2:00pm  ', ' 3:00pm  ', ' 4:00pm  ', ' 5:00pm  ', ' 6:00pm  ', ' 7:00pm  ', ' Daily Location Tota ']
// Random function
function randomcustomers(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
//  constructor 
let shops = [];
function Loctions(name, min, max, avg) {
    this.name = name;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.customerperhour = [];
    this.cookiesnumber = [];
    shops.push(this);

}
// customer and cookies number
Loctions.prototype.customercookiesnumber = function () {
    for (let i = 0; i < 14; i++) {
        let customernumber = randomcustomers(this.min, this.max);
        this.customerperhour.push(customernumber);
        this.cookiesnumber.push(this.customerperhour[i] * this.avg)

    }


}

// objects
let Seattle = new Loctions('Seattle', 23, 65, 6.3);
let Tokyo = new Loctions('Tokyo', 3, 21, 1.2);
let Dubai = new Loctions('Dubai', 11, 38, 3.7);
let Paris = new Loctions('Paris', 20, 38, 2.3);
let Lima = new Loctions('Lima', 2, 16, 4.6);
// calling
Seattle.customercookiesnumber();
Tokyo.customercookiesnumber();
Dubai.customercookiesnumber();
Paris.customercookiesnumber();
Lima.customercookiesnumber();

console.log(shops);
console.log(Loctions.prototype);

// Making The Table 
// hours
let parent = document.getElementById('creatTable');
console.log(parent);

let table = document.createElement('table');
parent.appendChild(table);

let headingRow = document.createElement('tr');
table.appendChild(headingRow);

for (let i = 0; i < hours.length; i++) {
    let workinghours = document.createElement('th');
    headingRow.appendChild(workinghours);
    workinghours.textContent = hours[i]

}

// Seattl row

let firstRow = document.createElement('tr')
table.appendChild(firstRow)

let location1 = document.createElement('td')
firstRow.appendChild(location1);
location1.textContent = 'Seattle';

for (let i = 0; i < 14; i++) {
    let SeattlElements = document.createElement('td');
    firstRow.appendChild(SeattlElements)
    SeattlElements.textContent = Seattle.customercookiesnumber();


}

// //  Tokyo row 
// let secondRow = document.createElement('tr')
// table.appendChild(secondRow)

// let location2 = document.createElement('td')
// secondRow.appendChild(location2);
// location2.textContent = 'Tokyo';

// for (let i = 0; i < 14; i++) {
//     let TokyoElements = document.createElement('td');
//     secondRow.appendChild(TokyoElements)
//     TokyoElements.textContent = Tokyo.customercookiesnumber();


// }

// //  Dubai
// let thirdRow = document.createElement('tr')
// table.appendChild(thirdRow)

// let location3 = document.createElement('td')
// thirdRow.appendChild(location3);
// location3.textContent = 'Dubai';

// for (let i = 0; i < 14; i++) {
//     let DubaiElements = document.createElement('td');
//     thirdRow.appendChild(DubaiElements)
//     DubaiElements.textContent = Dubai.customercookiesnumber();


// }

// // Paris
// let fourthRow = document.createElement('tr')
// table.appendChild(fourthRow)

// let location4 = document.createElement('td')
// fourthRow.appendChild(location4);
// location4.textContent = 'Paris';

// for (let i = 0; i < 14; i++) {
//     let ParisElements = document.createElement('td');
//     fourthRow.appendChild(ParisElements)
//     ParisElements.textContent = Paris.customercookiesnumber();


// }

// // Lima
// let fifthRow = document.createElement('tr')
// table.appendChild(fifthRow)

// let location5 = document.createElement('td')
// fifthRow.appendChild(location5);
// location5.textContent = 'Lima';

// for (let i = 0; i < 14; i++) {
//     let LimaElements = document.createElement('td');
//     fifthRow.appendChild(LimaElements)
//     LimaElements.textContent = Lima.customercookiesnumber();


// }

// //Total
// let totalRow = document.createElement('tr')
// table.appendChild(totalRow)

// let total = document.createElement('td')
// totalRow.appendChild(total);
// total.textContent = 'Total';








// content
// for (let i = 0; i < cookiesnumber.length; i++) {


// }






// let Seattle = {
//     min: 23,
//     max: 65,
//     avg: 6.3,
//     customerperhour: [],
//     cookiesnumber: [],
//     hours: ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12am: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '],



//     customers: function () {
//         for (let i = 0; i < 14; i++) {
//             let customernumber = randomcustomers(this.min, this.max);
//             this.customerperhour.push(customernumber);

//         }
//     }
//     ,
//     avgcookie: function () {
//         for (let v = 0; v < 14; v++) {
//             this.cookiesnumber.push(this.customerperhour[v] * this.avg)
//         }
//     }


// }
// Seattle.customers();
// Seattle.avgcookie();
// console.log(Seattle);

// function randomcustomers(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }
// // console.log(randomcustomers(23, 65));

// let parent = document.getElementById('data');
// console.log(parent);

// let unOrderedList = document.createElement('ul');
// parent.appendChild(unOrderedList);

// for (let x = 0; x < 14; x++) {
//     let listItem = document.createElement('li');
//     unOrderedList.appendChild(listItem);
//     listItem.textContent = Seattle.hours[x] + Math.floor(Seattle.cookiesnumber[x]) + ' cookies ';

// }

// let total = 0
// for (let y = 0; y < 14; y++) {

//     total = total + Seattle.cookiesnumber[y]
// }
// console.log(total);
// let totalcookies = document.createElement('li');
// unOrderedList.appendChild(totalcookies);
// totalcookies.textContent = 'Total: ' + Math.floor(total) + ' cookies'

// // Tokyo object

// let Tokyo = {
//     tmin: 3,
//     tmax: 24,
//     tavg: 1.2,
//     tcustomerperhour: [],
//     tcookiesnumber: [],
//     thours: ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12am: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '],



//     customers: function () {
//         for (let i = 0; i < 14; i++) {
//             let tcustomernumber = randomcustomers(this.tmin, this.tmax);
//             this.tcustomerperhour.push(tcustomernumber);
//         }
//     }
//     ,
//     avgcookie: function () {
//         for (let v = 0; v < 14; v++) {
//             this.tcookiesnumber.push(this.tcustomerperhour[v] * this.tavg)
//         }
//     }


// }
// Tokyo.customers();
// Tokyo.avgcookie();
// console.log(Tokyo);

// function randomcustomers(tmin, tmax) {
//     return Math.floor(Math.random() * (tmax - tmin + 1) + tmin);
// }


// let tparent = document.getElementById('data2');
// console.log(tparent);

// let tunOrderedList = document.createElement('ul');
// tparent.appendChild(tunOrderedList);

// for (let x = 0; x < 14; x++) {
//     let tlistItem = document.createElement('li');
//     tunOrderedList.appendChild(tlistItem);
//     tlistItem.textContent = Tokyo.thours[x] + Math.floor(Tokyo.tcookiesnumber[x]) + ' cookies ';

// }

// let ttotal = 0
// for (let y = 0; y < 14; y++) {

//     ttotal = ttotal + Tokyo.tcookiesnumber[y]
// }
// console.log(ttotal);
// let ttotalcookies = document.createElement('li');
// tunOrderedList.appendChild(ttotalcookies);
// ttotalcookies.textContent = 'Total: ' + Math.floor(ttotal) + ' cookies'

// // Dubai object

// let Dubai = {
//     dmin: 11,
//     dmax: 38,
//     davg: 3.7,
//     dcustomerperhour: [],
//     dcookiesnumber: [],
//     dhours: ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12am: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '],



//     customers: function () {
//         for (let i = 0; i < 14; i++) {
//             let dcustomernumber = randomcustomers(this.dmin, this.dmax);
//             this.dcustomerperhour.push(dcustomernumber);
//         }
//     }
//     ,
//     avgcookie: function () {
//         for (let v = 0; v < 14; v++) {
//             this.dcookiesnumber.push(this.dcustomerperhour[v] * this.davg)
//         }
//     }


// }
// Dubai.customers();
// Dubai.avgcookie();
// console.log(Dubai);

// function randomcustomers(dmin, dmax) {
//     return Math.floor(Math.random() * (dmax - dmin + 1) + dmin);
// }
// // console.log(randomcustomers(23, 65));

// let dparent = document.getElementById('data3');
// console.log(dparent);

// let dunOrderedList = document.createElement('ul');
// dparent.appendChild(dunOrderedList);

// for (let x = 0; x < 14; x++) {
//     let dlistItem = document.createElement('li');
//     dunOrderedList.appendChild(dlistItem);
//     dlistItem.textContent = Dubai.dhours[x] + Math.floor(Dubai.dcookiesnumber[x]) + ' cookies ';

// }

// let dtotal = 0
// for (let y = 0; y < 14; y++) {

//     dtotal = dtotal + Dubai.dcookiesnumber[y]
// }
// console.log(dtotal);
// let dtotalcookies = document.createElement('li');
// dunOrderedList.appendChild(dtotalcookies);
// dtotalcookies.textContent = 'Total: ' + Math.floor(dtotal) + ' cookies'

// // Paris object

// let Paris = {
//     pmin: 20,
//     pmax: 38,
//     pavg: 2.3,
//     pcustomerperhour: [],
//     pcookiesnumber: [],
//     phours: ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12am: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '],



//     customers: function () {
//         for (let i = 0; i < 14; i++) {
//             let pcustomernumber = randomcustomers(this.pmin, this.pmax);
//             this.pcustomerperhour.push(pcustomernumber);
//         }
//     }
//     ,
//     avgcookie: function () {
//         for (let v = 0; v < 14; v++) {
//             this.pcookiesnumber.push(this.pcustomerperhour[v] * this.pavg)
//         }
//     }


// }
// Paris.customers();
// Paris.avgcookie();
// console.log(Paris);

// function randomcustomers(pmin, pmax) {
//     return Math.floor(Math.random() * (pmax - pmin + 1) + pmin);
// }
// // console.log(randomcustomers(23, 65));

// let pparent = document.getElementById('data4');
// console.log(pparent);

// let punOrderedList = document.createElement('ul');
// pparent.appendChild(punOrderedList);

// for (let x = 0; x < 14; x++) {
//     let plistItem = document.createElement('li');
//     punOrderedList.appendChild(plistItem);
//     plistItem.textContent = Paris.phours[x] + Math.floor(Paris.pcookiesnumber[x]) + ' cookies ';

// }

// let ptotal = 0
// for (let y = 0; y < 14; y++) {

//     ptotal = ptotal + Paris.pcookiesnumber[y]
// }
// console.log(ptotal);
// let ptotalcookies = document.createElement('li');
// punOrderedList.appendChild(ptotalcookies);
// ptotalcookies.textContent = 'Total: ' + Math.floor(ptotal) + ' cookies'





// // Lima object


// let Lima = {
//     lmin: 2,
//     lmax: 16,
//     lavg: 4.6,
//     lcustomerperhour: [],
//     lcookiesnumber: [],
//     lhours: ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12am: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '],



//     customers: function () {
//         for (let i = 0; i < 14; i++) {
//             let lcustomernumber = randomcustomers(this.lmin, this.lmax);
//             this.lcustomerperhour.push(lcustomernumber);
//         }
//     }
//     ,
//     avgcookie: function () {
//         for (let v = 0; v < 14; v++) {
//             this.lcookiesnumber.push(this.lcustomerperhour[v] * this.lavg)
//         }
//     }


// }
// Lima.customers();
// Lima.avgcookie();
// console.log(Lima);

// function randomcustomers(lmin, lmax) {
//     return Math.floor(Math.random() * (lmax - lmin + 1) + lmin);
// }
// // console.log(randomcustomers(23, 65));

// let lparent = document.getElementById('data5');
// console.log(lparent);

// let lunOrderedList = document.createElement('ul');
// lparent.appendChild(lunOrderedList);

// for (let x = 0; x < 14; x++) {
//     let llistItem = document.createElement('li');
//     lunOrderedList.appendChild(llistItem);
//     llistItem.textContent = Lima.lhours[x] + Math.floor(Lima.lcookiesnumber[x]) + ' cookies ';

// }

// let ltotal = 0
// for (let y = 0; y < 14; y++) {

//     ltotal = ltotal + Lima.lcookiesnumber[y]
// }
// console.log(ltotal);
// let ltotalcookies = document.createElement('li');
// lunOrderedList.appendChild(ltotalcookies);
// ltotalcookies.textContent = 'Total: ' + Math.floor(ltotal) + ' cookies'










