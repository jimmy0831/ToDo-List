const inputBox = document.querySelector('#input-box');
const listContainer = document.querySelector('#list-container');
const addBtn = document.querySelector('.addBtn');
addBtn.addEventListener('click', function () {
  if (inputBox.value === '') alert('請輸入東西');
  else {
    let li = document.createElement('li');
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let trashIcon = document.createElement('img');
    trashIcon.src = './img/trash.png';
    trashIcon.classList.add('trash-icon');
    li.appendChild(trashIcon);
  }
  saveDate();
});

listContainer.addEventListener(
  'click',
  function (e) {
    if (e.target.tagName === 'LI') {
      e.target.classList.toggle('checked');
      saveDate();
    } else if (e.target.classList.contains('trash-icon')) {
      e.target.parentElement.remove();
      saveDate();
    }
  },
  false
);

function saveDate() {
  localStorage.setItem('data', listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem('data');
}
showTask();
