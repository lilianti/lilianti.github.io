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
      var cariNama = prompt("Nama yang anda cari ?");      
      var found = 0;
      var i = 0;
     
      for (i = 0 ; i < daftarKontak.length && found == 0; i++){      
        if (daftarKontak[i].nama == cariNama) {
          found = 1;
          document.getElementById("tampilkanHasil").innerHTML = "Data ditemukan :<br>" + daftarKontak[i].nama + "<br>" +  daftarKontak[i].email +"<br>"  + daftarKontak[i].telepon ;
        }
      }
      if (found == 0) {
          alert("Data tidak ditemukan!");
      }     
 
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
  
