 /* Aplikasi To-Do List
 
 Features :
 - checkbox sebagai tanda bila task telah selesai dilakukan.
 - Add New List
 - Delete checked list
 
 Item dalam list :
 - Nama Task
 - Due Date
 
 */


    var toDoList = [
     {desc: "task1", dueDate: "due1", checked: false},
     {desc: "task2", dueDate: "due2", checked: true},
     {desc: "task3", dueDate: "due3", checked: true}
                  ];

    var task = {
      desc : "",
      dueDate : "",
      checked : ""
    };

   
    

    showAll();

    function newKlik(){
      var i = 0;
      var currId = "";
      var clickStat = false;
      
      
      for (i=0; i < toDoList.length; i++){
        currId = "myCheck" + i;
        clickStat = document.getElementById(currId).checked;
        toDoList[i].checked = clickStat;
     }
    }

    function showAll(){
      var i = 0;
      var textDisplay = "";
      var textButton = "<input type=" + `"` + "checkbox" + `"`+ " onclick=" + `"`+ "newKlik()" + `"` +" id=" + `"` + "myCheck";
      var textButtonPerList = "";
      var idCheck = "";
      
      for (i=0; i < toDoList.length; i++) {
        textButtonPerList = textButton + i + `"`  +">";
        textDisplay = textDisplay + textButtonPerList + toDoList[i].desc + " / " + toDoList[i].dueDate + "<br>";
      } 
      console.log(textDisplay); 
      
      document.getElementById("displayList").innerHTML =  textDisplay;
      for (i=0; i < toDoList.length; i++) {
          idCheck = "myCheck" + i;
          document.getElementById(idCheck).checked = toDoList[i].checked;  
      }  
    }
    

    function addNew(){
      var newList = prompt("Enter new list :");
      var newDueDate = prompt("Enter Due Date :");
      toDoList.push({desc: newList, dueDate: newDueDate, checked:0});
      
      console.log(newList);
      console.log(newDueDate);
      showAll();
    }

    function deleteList(){
      var i = 0;
      
      if (confirm("Are you sure?") == true){
      
        for (i=0; i < toDoList.length; i++){
          if (toDoList[i].checked == true){
              toDoList.splice(i,1);  
              i--;
              console.log(i);
          }
        }
        showAll();
      }  
    }
    