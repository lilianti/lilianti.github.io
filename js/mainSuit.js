  function pilihanPengguna(){
    var pengguna = prompt("Pilih Salah Satu : Rock / Paper / Scissor");
    pengguna = pengguna.toUpperCase();
  	document.getElementById("pengguna").innerHTML = "Pilihan Pengguna: " + pengguna;
    return pengguna;
  }
  
  function pilihanLawan(){
    var randomPilihan = Math.random();
    
    if (randomPilihan <= 0.33) {
      pilihanLawan = "ROCK";
    } else
      if (randomPilihan  <= 0.66) {
        pilihanLawan = "PAPER";
      } else
        pilihanLawan = "SCISSOR";
    document.getElementById("lawan").innerHTML = "Pilihan Lawan: "  + " (" + randomPilihan.toPrecision(3) + ") " + pilihanLawan;
   return pilihanLawan; 
  }
  
  function bertarung (a,b){
    bertarung = "Seri";
 		if (a == "ROCK" && b == "PAPER") {bertarung = "Anda Kalah!";}
 		if (a == "ROCK" && b == "SCISSOR") {bertarung = "Anda Menang!";}
 		if (a == "PAPER" && b == "ROCK") {bertarung = "Anda Menang!";}
 		if (a == "PAPER" && b == "SCISSOR") {bertarung = "Anda Kalah!";}
 		if (a == "SCISSOR" && b == "ROCK") {bertarung = "Anda Kalah!";}
 		if (a == "SCISSOR" && b == "PAPER") {bertarung = "Anda Menang!";}
    return bertarung;
  }
  
  
  function  mainSuit(){
    var pengguna = pilihanPengguna();
    var lawan = pilihanLawan();
    var hasil = bertarung(pengguna,lawan);
       
    document.getElementById("hasil").innerHTML = "Hasil: " + hasil;
  }
  