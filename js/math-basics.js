  function pangkatAngka(a, b) {
  
  return Math.pow(a,b);
}

  function akarKuadrat(a) {
     return Math.sqrt(a);
  }
  
  function hipotenusa (a,b){
     return  akarKuadrat (pangkatAngka(3,2) + pangkatAngka(4,2));
  }

  function luasLingkaran(r){  
    return Math.round(Math.PI * pangkatAngka(r,2));
  }

  document.write(pangkatAngka(2,3));
  document.write(akarKuadrat(9));
  document.write(hipotenusa(3,4));
  document.write(luasLingkaran(7));
