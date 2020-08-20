function switcher(id){
    const btn = document.getElementById('btn'+id);
    const sld = document.getElementById('sld'+id);
    const chk = document.getElementById('chk'+id);
    
    sld.style.width = "44px";
    setTimeout(()=>{
      sld.style.width = "32px";
    },150)
    
    if(btn.className == "button"){
      setTimeout(()=>{
        btn.className = "button active";
        sld.className = "slider on";
        chk.checked = true;
      },100);
    }else{
      setTimeout(()=>{
        btn.className = "button";
        sld.className = "slider";
        chk.checked = false;
      },10)
    }
  }
  
  // const btn = document.getElementById('btn1');
  // const sld = document.getElementById('sld1');
  // btn.addEventListener("mouseover", ()=>{
  //   sld.style.width = '40px';
  // });