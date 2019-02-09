var db, moonth=[31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// create a blank instance of the object that is used to transfer data into the IDB. This is mainly for reference
var newItem = [
    { taskTitle: "", hours: 0, minutes: 0, day: 0, month: "", year: 0, notified: "no" }
];

class Request{
  constructor (path){
    this.xhr=new XMLHttpRequest();
    this.xhr.open("GET", path, true);
    this.xhr.send(null);
  }
  then(f){
    this.xhr.onload=function(){
      f(JSON.parse(this.responseText));
    }
  }
}
class Item{
  constructor(month, name, place, startDate, endDate, topic){
    this.month=month;
    this.name=name;
    this.place=place;
    this.startDate=startDate;
    this.endDate=endDate;
    this.topic=topic;
  }
  dom(){
    var li=document.createElement("li");
    var items=this,str="";
    if(this.startDate==this.endDate){
      str=this.startDate
    }else{
      str=this.startDate+"-"+this.endDate;
    }
    console.log(this.month);
    console.log(typeof this.month);
    switch(this.month) {
      case 0:
      var monthName = "January";
      break;
      case 1:
      var monthName = "February";
      break;
      case 2:
      var monthName = "March";
      break;   
      case 3:
      var monthName = "April";
      break;
      case 4:
      var monthName = "May";
      break;
      case 5:
      var monthName = "June";
      break;
      case 6:
      var monthName = "July";
      break;    
      case 7:
      var monthName = "August";
      break; 
      case 8:
      var monthName = "September";
      break; 
      case 9:
      var monthName = "October";
      break; 
      case 10:
      var monthName = "November";
      break; 
      case 11:
      var monthName = "December";
      break;              
      default:
      console.log('Incorrect month entered in database.');
    }
    //var monthName="e";
    li.innerHTML=`<h3>${this.name}</h3><h4>${this.place} | ${monthName} ${str}</h4>
    <p>
    <span>Напомнить за</span>
    <input type="button" value="За 3 дня" class ="three"/>
    <input type="button" value="За 7 дней" class ="seven"/>
    <input type="button" value="За 14 дней" class ="fourteen"/>
    </p>`;


    li.querySelector(".three").addEventListener('click', function(e){
      var numOfMonth,numOfDay;
      console.log(items.startDate);
      //console.log(moonth[items.month-1]);
      //console.log(moonth[items.month-1]+items.startDate-3);
      if(items.startDate-3<1){
        numOfMonth=items.month-1;
        //console.log(moonth[numOfMonth]);
        numOfDay=moonth[numOfMonth]+items.startDate-3;
      }else{
        numOfDay=items.startDate-3;
        numOfMonth=items.month;
      }
      console.log(items.name);
      var newItem = [
                { taskTitle: items.name, day: numOfDay, month: numOfMonth, year: 2019, notified: "no" }
            ];
      console.log(newItem);
      var transaction = db.transaction(["toDoList"], "readwrite");
      transaction.oncomplete = function() {
        console.log("Transaction completed: database modification finished");
      };

      transaction.onerror = function() {
        console.log(transaction.error);
      };
      var objectStore = transaction.objectStore("toDoList");
      var objectStoreRequest = objectStore.add(newItem[0]);
      objectStoreRequest.onsuccess = function(event) {
        console.log("Request successful.");
      };
    },false)




    li.querySelector(".seven").addEventListener('click', function(e){
      var numOfMonth,numOfDay;
      console.log(items.startDate);
      //console.log(moonth[items.month-1]);
      //console.log(moonth[items.month-1]+items.startDate-3);
      if(items.startDate-7<1){
        numOfMonth=items.month-1;
        //console.log(moonth[numOfMonth]);
        numOfDay=moonth[numOfMonth]+items.startDate-7;
      }else{
        numOfDay=items.startDate-7;
        numOfMonth=items.month;
      }
      console.log(items.name);
      var newItem = [
                { taskTitle: items.name, day: numOfDay, month: numOfMonth, year: 2019, notified: "no" }
            ];
      console.log(newItem);
      var transaction = db.transaction(["toDoList"], "readwrite");
      transaction.oncomplete = function() {
        console.log("Transaction completed: database modification finished");
      };

      transaction.onerror = function() {
        console.log(transaction.error);
      };
      var objectStore = transaction.objectStore("toDoList");
      var objectStoreRequest = objectStore.add(newItem[0]);
      objectStoreRequest.onsuccess = function(event) {
        console.log("Request successful.");
      };
    },false)
    li.querySelector(".fourteen").addEventListener('click', function(e){
      var numOfMonth,numOfDay;
      console.log(items.startDate);
      //console.log(moonth[items.month-1]);
      //console.log(moonth[items.month-1]+items.startDate-3);
      if(items.startDate-14<1){
        numOfMonth=items.month-1;
        //console.log(moonth[numOfMonth]);
        numOfDay=moonth[numOfMonth]+items.startDate-14;
      }else{
        numOfDay=items.startDate-14;
        numOfMonth=items.month;
      }
      console.log(items.name);
      var newItem = [
                { taskTitle: items.name, day: numOfDay, month: numOfMonth, year: 2019, notified: "no" }
            ];
      console.log(newItem);
      var transaction = db.transaction(["toDoList"], "readwrite");
      transaction.oncomplete = function() {
        console.log("Transaction completed: database modification finished");
      };

      transaction.onerror = function() {
        console.log(transaction.error);
      };
      var objectStore = transaction.objectStore("toDoList");
      var objectStoreRequest = objectStore.add(newItem[0]);
      objectStoreRequest.onsuccess = function(event) {
        console.log("Request successful.");
      };
    },false)
    return li;
  }
  /*html(){
    return `
    <li>
    <h3>${this.name}</h3><h4>Цена:${this.place}</h4>
    <ol>${this.colors.map(c=>c.html()).join('')}</ol>
    <table><tbody>${this.properties.map(p=>p.html()).join('')}</tbody></table>
    <p><input type="number"/>
    <input type="button" value="Добавить" class ="addToCart"/>
    </p>
    </li>`;
  }*/
}
window.onload = function() {
  window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
  window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
  window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;
  var DBOpenRequest = window.indexedDB.open("toDoList", 4);
  DBOpenRequest.onerror = function(event) {
    note.innerHTML += '<li>Error loading database.</li>';
  };

  DBOpenRequest.onsuccess = function(event) {
    note.innerHTML += '<li>Database initialised.</li>';

        // store the result of opening the database in the db variable. This is used a lot below
    db = DBOpenRequest.result;

        // Run the displayData() function to populate the task list with all the to-do list data already in the IDB
    displayData();
  };



      DBOpenRequest.onupgradeneeded = function(event) {
        var db = event.target.result;

        db.onerror = function(event) {
            console.log("Error loading database");
        };

        // Create an objectStore for this database

        var objectStore = db.createObjectStore("toDoList", { keyPath: "taskTitle" });
        objectStore.createIndex("day", "day", { unique: false });
        objectStore.createIndex("month", "month", { unique: false });
        objectStore.createIndex("year", "year", { unique: false });
        objectStore.createIndex("notified", "notified", { unique: false });

        //note.innerHTML += '<li>Object store created.</li>';
    };

      function checkDeadlines() {

        var now = new Date();
        var minuteCheck = now.getMinutes();
        var hourCheck = now.getHours();
        var dayCheck = now.getDate();
        var monthCheck = now.getMonth();
        var yearCheck = now.getFullYear();
        var objectStore = db.transaction(['toDoList'], "readwrite").objectStore('toDoList');
        objectStore.openCursor().onsuccess = function(event) {
            var cursor = event.target.result;
            if(cursor) {

                if(hourCheck == 10 && minuteCheck == 00 && +(cursor.value.day) == dayCheck-cursor.value.period && cursor.value.month == monthCheck && cursor.value.year == yearCheck && cursor.value.notified == "no") {

                    // If the numbers all do match, run the createNotification() function to create a system notification
                    createNotification(cursor.value.taskTitle);
                }

                // move on and perform the same deadline check on the next cursor item
                cursor.continue();
            }

        }

    }


    function createNotification(title) {

        // Let's check if the browser supports notifications
        if (!"Notification" in window) {
            console.log("This browser does not support notifications.");
        }

        // Let's check if the user is okay to get some notification
        else if (Notification.permission === "granted") {
            // If it's okay let's create a notification

            var img = '/Voloshch.github.io/img/icon-128.png';
            var text = 'HEY! Your task "' + title + '" is now overdue.';
            var notification = new Notification('To do list', { body: text, icon: img });

            window.navigator.vibrate(500);
        }

        // Otherwise, we need to ask the user for permission
        // Note, Chrome does not implement the permission static property
        // So we have to check for NOT 'denied' instead of 'default'
        else if (Notification.permission !== 'denied') {
            Notification.requestPermission(function (permission) {

                // Whatever the user answers, we make sure Chrome stores the information
                if(!('permission' in Notification)) {
                    Notification.permission = permission;
                }

                // If the user is okay, let's create a notification
                if (permission === "granted") {
                    var img = '/Voloshch.github.io/img/icon-128.png';
                    var text = 'HEY! Your task "' + title + '" is now overdue.';
                    var notification = new Notification('To do list', { body: text, icon: img });

                    window.navigator.vibrate(500);
                }
            });
        }

        // At last, if the user already denied any notification, and you
        // want to be respectful there is no need to bother him any more.

        // now we need to update the value of notified to "yes" in this particular data object, so the
        // notification won't be set off on it again

        // first open up a transaction as usual
        var objectStore = db.transaction(['toDoList'], "readwrite").objectStore('toDoList');

        // get the to-do list object that has this title as it's title
        var objectStoreTitleRequest = objectStore.get(title);

        objectStoreTitleRequest.onsuccess = function() {
            // grab the data object returned as the result
            var data = objectStoreTitleRequest.result;

            // update the notified value in the object to "yes"
            data.notified = "yes";

            // create another request that inserts the item back into the database
            var updateTitleRequest = objectStore.put(data);

            // when this new request succeeds, run the displayData() function again to update the display
            updateTitleRequest.onsuccess = function() {
                //displayData();
                console.log("kuku");
            }
        }
    }



  var request=new Request("1.json");
  request.then(d=>console.log(d));
  var items=[];
  request.then(function(data){
  items=data.map(function(obj){
    var item=new Item(obj.month, obj.name, obj.place, obj.startDate, obj.endDate, obj.topic);
    return item;
  })
  items.forEach(i=>document.body.appendChild(i.dom()));
})
  setInterval(checkDeadlines, 1000);
}