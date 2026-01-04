function openTab(index){
  const buttons = document.querySelectorAll('.tab-buttons button');
  const contents = document.querySelectorAll('.tab-content');

  buttons.forEach((btn,i)=>{
    btn.classList.toggle('active', i === index);
  });

  contents.forEach((content,i)=>{
    content.classList.toggle('active', i === index);
  });
}
