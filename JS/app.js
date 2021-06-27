'use strict';

let Seattle	= {
    min : 23 ,
    max : 65 , 
    avg : 6.3 , 
    customerperhour:[] ,
    cookiesnumber: [] ,
    hours:['6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12am: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: ','6pm: ','7pm: '] ,



    customers: function() {
       for (let i=0 ; i<14 ; i++) {           
        let customernumber = randomcustomers(this.min, this.max) ;
        this.customerperhour.push(customernumber)  ;
        
    }
    }
    , 
     avgcookie: function(){
        for (let v=0 ; v<14 ; v++){
          this.cookiesnumber.push(this.customerperhour[v] * this.avg)         
    }
    }
    

}
Seattle.customers();
Seattle.avgcookie();
console.log(Seattle);

function randomcustomers(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
// console.log(randomcustomers(23, 65));

let parent = document.getElementById('data');
console.log(parent);

let unOrderedList = document.createElement('ul');
parent.appendChild(unOrderedList);

for (let x = 0; x < 14; x++) {
    let listItem = document.createElement('li');
    unOrderedList.appendChild(listItem);
    listItem.textContent = Seattle.hours[x] + Math.floor(Seattle.cookiesnumber[x]) + ' cookies ' ;

}

let total = 0
 for (let y=0 ; y<14 ; y++) {
     
         total= total + Seattle.cookiesnumber[y]
        }
        console.log(total);
        let totalcookies = document.createElement('li');
        unOrderedList.appendChild(totalcookies);
        totalcookies.textContent= 'Total: ' + Math.floor(total) + ' cookies'

// number of cookies 
// function randomavgcookie() {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }
// let parent = document.getElementById('data');
// console.log(parent);
// let unOrderedList = document.createElement('ul');
// parent.appendChild(unOrderedList);

// let header2 = document.createElement('h2');
// parent.appendChild(header2);
// header2.textContent = Seattle.customers();

// // randomavgCookie

// function randomavgCookie(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }
// console.log(randomavgCookie(6.3, 1.2));

// let parent = document.getElementById('data');
// console.log(parent);

// let header2 = document.createElement('h2');
// parent.appendChild(header2);
// header2.textContent = Seattle.avgCookie();

let Tokyo	= {
    tmin : 3 ,
    tmax : 24 , 
    tavg : 1.2 , 
    tcustomerperhour:[] ,
    tcookiesnumber: [] ,
    thours:['6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12am: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: ','6pm: ','7pm: '] ,



    customers: function() {
       for (let i=0 ; i<14 ; i++) {           
        let tcustomernumber = randomcustomers(this.tmin, this.tmax) ;
        this.tcustomerperhour.push(tcustomernumber)  ;
    }
    }
    , 
     avgcookie: function(){
        for (let v=0 ; v<14 ; v++){
          this.tcookiesnumber.push(this.tcustomerperhour[v] * this.tavg)         
    }
    }
    

}
Tokyo.customers();
Tokyo.avgcookie();
console.log(Tokyo);

function randomcustomers(tmin, tmax) {
    return Math.floor(Math.random() * (tmax - tmin + 1) + tmin);
}


    let tparent = document.getElementById('data2');
console.log(tparent);

let tunOrderedList = document.createElement('ul');
tparent.appendChild(tunOrderedList);

for (let x = 0; x < 14; x++) {
    let tlistItem = document.createElement('li');
    tunOrderedList.appendChild(tlistItem);
    tlistItem.textContent = Tokyo.thours[x] + Math.floor(Tokyo.tcookiesnumber[x]) + ' cookies ' ;

}

let ttotal = 0
 for (let y=0 ; y<14 ; y++) {
     
         ttotal= ttotal + Tokyo.tcookiesnumber[y]
        }
        console.log(ttotal);
        let ttotalcookies = document.createElement('li');
        tunOrderedList.appendChild(ttotalcookies);
        ttotalcookies.textContent= 'Total: ' + Math.floor(ttotal) + ' cookies'



        let Dubai	= {
            dmin : 11 ,
            dmax : 38 , 
            davg : 3.7 , 
            dcustomerperhour:[] ,
            dcookiesnumber: [] ,
            dhours:['6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12am: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: ','6pm: ','7pm: '] ,
        
        
        
            customers: function() {
               for (let i=0 ; i<14 ; i++) {           
                let dcustomernumber = randomcustomers(this.dmin, this.dmax) ;
                this.dcustomerperhour.push(dcustomernumber)  ;
            }
            }
            , 
             avgcookie: function(){
                for (let v=0 ; v<14 ; v++){
                  this.dcookiesnumber.push(this.dcustomerperhour[v] * this.davg)         
            }
            }
            
        
        }
        Dubai.customers();
        Dubai.avgcookie();
        console.log(Dubai);
        
        function randomcustomers(dmin, dmax) {
            return Math.floor(Math.random() * (dmax - dmin + 1) + dmin);
        }
        // console.log(randomcustomers(23, 65));
        
        let dparent = document.getElementById('data3');
        console.log(dparent);
        
        let dunOrderedList = document.createElement('ul');
        dparent.appendChild(dunOrderedList);
        
        for (let x = 0; x < 14; x++) {
            let dlistItem = document.createElement('li');
            dunOrderedList.appendChild(dlistItem);
            dlistItem.textContent = Dubai.dhours[x] + Math.floor(Dubai.dcookiesnumber[x]) + ' cookies ' ;
        
        }
        
        let dtotal = 0
         for (let y=0 ; y<14 ; y++) {
             
                 dtotal= dtotal + Dubai.dcookiesnumber[y]
                }
                console.log(dtotal);
                let dtotalcookies = document.createElement('li');
                dunOrderedList.appendChild(dtotalcookies);
                dtotalcookies.textContent= 'Total: ' + Math.floor(dtotal) + ' cookies'


let Paris	= {
    pmin : 20 ,
    pmax : 38 , 
    pavg : 2.3 , 
    pcustomerperhour:[] ,
    pcookiesnumber: [] ,
    phours:['6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12am: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: ','6pm: ','7pm: '] ,



    customers: function() {
       for (let i=0 ; i<14 ; i++) {           
        let pcustomernumber = randomcustomers(this.pmin, this.pmax) ;
        this.pcustomerperhour.push(pcustomernumber)  ;
    }
    }
    , 
     avgcookie: function(){
        for (let v=0 ; v<14 ; v++){
          this.pcookiesnumber.push(this.pcustomerperhour[v] * this.pavg)         
    }
    }
    

}
Paris.customers();
Paris.avgcookie();
console.log(Paris);

function randomcustomers(pmin, pmax) {
    return Math.floor(Math.random() * (pmax - pmin + 1) + pmin);
}
// console.log(randomcustomers(23, 65));

let pparent = document.getElementById('data4');
console.log(pparent);

let punOrderedList = document.createElement('ul');
pparent.appendChild(punOrderedList);

for (let x = 0; x < 14; x++) {
    let plistItem = document.createElement('li');
    punOrderedList.appendChild(plistItem);
    plistItem.textContent = Paris.phours[x] + Math.floor(Paris.pcookiesnumber[x]) + ' cookies ' ;

}

let ptotal = 0
 for (let y=0 ; y<14 ; y++) {
     
         ptotal= ptotal + Paris.pcookiesnumber[y]
        }
        console.log(ptotal);
        let ptotalcookies = document.createElement('li');
        punOrderedList.appendChild(ptotalcookies);
        ptotalcookies.textContent= 'Total: ' + Math.floor(ptotal) + ' cookies'







let Lima	= {
    lmin : 2 ,
    lmax : 16 , 
    lavg : 4.6 , 
    lcustomerperhour:[] ,
    lcookiesnumber: [] ,
    lhours:['6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12am: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: ','6pm: ','7pm: '] ,



    customers: function() {
       for (let i=0 ; i<14 ; i++) {           
        let lcustomernumber = randomcustomers(this.lmin, this.lmax) ;
        this.lcustomerperhour.push(lcustomernumber)  ;
    }
    }
    , 
     avgcookie: function(){
        for (let v=0 ; v<14 ; v++){
          this.lcookiesnumber.push(this.lcustomerperhour[v] * this.lavg)         
    }
    }
    

}
Lima.customers();
Lima.avgcookie();
console.log(Lima);

function randomcustomers(lmin, lmax) {
    return Math.floor(Math.random() * (lmax - lmin + 1) + lmin);
}
// console.log(randomcustomers(23, 65));

let lparent = document.getElementById('data5');
console.log(lparent);

let lunOrderedList = document.createElement('ul');
lparent.appendChild(lunOrderedList);

for (let x = 0; x < 14; x++) {
    let llistItem = document.createElement('li');
    lunOrderedList.appendChild(llistItem);
    llistItem.textContent = Lima.lhours[x] + Math.floor(Lima.lcookiesnumber[x]) + ' cookies ' ;

}

let ltotal = 0
 for (let y=0 ; y<14 ; y++) {
     
         ltotal= ltotal + Lima.lcookiesnumber[y]
        }
        console.log(ltotal);
        let ltotalcookies = document.createElement('li');
        lunOrderedList.appendChild(ltotalcookies);
        ltotalcookies.textContent= 'Total: ' + Math.floor(ltotal) + ' cookies'








                

        