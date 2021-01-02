function carregar(){
    const data = new Date();
    let dias = data.getDate();
    const conta = Number(365 - dias);
    const dia = document.querySelector("#dias");
    const dia2 = document.querySelector("#dias2");
    const dia3 = document.querySelector("#dias3");

      dia.innerHTML = `Falta`
      dia3.innerHTML = `${conta} dias` 
}