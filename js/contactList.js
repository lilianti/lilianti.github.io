  
  var daftarKontak = new Array();
  var contact = {
    nama : "",
    email : "",
    telepon : ""
  };
  
  var program = {
    tambahKontak : function(nama, email, telepon){
      
 		daftarKontak.push({nama: nama, email:email,telepon:telepon});
    document.getElementById("tampilkanHasil").innerHTML = "New Contact :<br>" + nama + "<br>" + email + "<br>" + telepon ;
    },
    
    lihatSemua : function(){
 			var hasil = "";
 
     	var i = 0;
      
      for (i = 0; i < daftarKontak.length; i++) {
          hasil = hasil + daftarKontak[i].nama + " / " + daftarKontak[i].email + " / " + daftarKontak[i].telepon + "<br>";
      }
      
      document.getElementById("tampilkanHasil").innerHTML = hasil;
      console.log(daftarKontak.length);
    },
    cariKontak : function(){
      alert("Maaf, menyusul :D");
      
    }
  };
 

  
  function addContact(){
    var nama = prompt("Masukan Nama Anda :");   
    var email = prompt("Masukan Email Anda :");
		var telepon = prompt("Masukan Telepon Anda :");
    
    console.log(nama);
    console.log(email);
    console.log(telepon);
    
    program.tambahKontak(nama, email, telepon);
 
  }