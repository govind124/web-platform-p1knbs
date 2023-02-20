const folders = document.querySelectorAll('.folder');
for (const folder of folders) {
  folder.addEventListener('click', () => {
    folder.classList.toggle('open');

  });

}


const files = document.querySelectorAll('.file');
for (const file of files) {
  file.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    const menu = document.createElement('ul');
    const editItem = document.createElement('li');
    const deleteItem = document.createElement('li');
    editItem.textContent = 'Edit';
    deleteItem.textContent = 'Delete';
    menu.appendChild(editItem);
    menu.appendChild(deleteItem);
    menu.style.position = 'absolute';
    menu.style.left = event.clientX + 'px';
    menu.style.top = event.clientY + 'px';
    document.body.appendChild(menu);
    menu.addEventListener('click', (event) => {
      if (event.target === editItem) {
        const newName = prompt('Enter new name:', file.textContent);
        if (newName) {
          file.textContent = newName;
        }
      } else if (event.target === deleteItem) {
        file.remove();
      }
      menu.remove();
    });
    document.addEventListener('click', () => {
      menu.remove();
    });
  });
}
