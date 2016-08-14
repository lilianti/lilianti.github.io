  function pilihanPengguna(){
    var pengguna = prompt("Pilih Salah Satu : Rock / Paper / Scissor");
    pengguna = pengguna.toUpperCase();
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
    
    document.getElementById("pengguna").innerHTML = "Pilihan Anda: " + a;
    document.getElementById("lawan").innerHTML = "Pilihan Lawan: "   + b;
    document.getElementById("hasil").innerHTML = "Hasil: " + bertarung;
    return bertarung;
  }
  
  
  function  mainSuit(){
    var pengguna = pilihanPengguna();
    var lawan = pilihanLawan();
    var hasil = bertarung(pengguna,lawan);
    
    console.log(pengguna);
    console.log(lawan);
    console.log(hasil);     
  }
  