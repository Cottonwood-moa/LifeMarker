const first = document.querySelector('.first');
const second = document.querySelector('.second');
const third = document.querySelector('.third');

function control(el){
  return new Promise(async (resolve)=>{
    await setTimeout(()=>{
     el.style.display = 'block'
     resolve()
    },1000)
    await setTimeout(()=>{
      el.style.display = 'none';
      resolve()
    },1500) 
  })
}
function remove(el){
  return new Promise((resolve)=>{
   setTimeout(()=>{
      el.style.display = 'none';
      resolve()
    },1500) 
  })
}

async function res(){
  await control(first)
  await control(second)
  await control(third)
}
res()