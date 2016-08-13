  function pangkatAngka(a, b) {
  var hasil = 1;
  for (i = 0; i < b; i++) { 
    hasil = hasil * a;
}
  return hasil;
}

  function akarKuadrat(a) {
    var hasil = 0; 
    var counter = 0;
    while (hasil != a && hasil < a){
      counter++;
      hasil = counter * counter;
    }
    if (hasil == a) {
      hasil = counter;}
    else {
      hasil = "Bukan Bilangan Kuadrat";    
    }
      return hasil;
  }
  
  function hipotenusa (a,b){
     return  akarKuadrat (pangkatAngka(3,2) + pangkatAngka(4,2));
  }

  function luasLingkaran(r){  
    return Math.round(Math.PI * pangkatAngka(r,2));
  }