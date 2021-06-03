const newTask = document.querySelector('.new-task');
const addBtn = document.querySelector('.add');
const tasksContainer = document.querySelector('.tasks');
const tasks = document.getElementsByClassName('task');
const clearBtn = document.querySelector('.clear');
const deleteBtns = document.getElementsByClassName('delete');

const tasksArr = ['First', 'Second'];

function renderTasks(arr) {
    tasksContainer.innerHTML = '';
    const html = arr
        .map((task) => {
            return `<li class="task">
        <span>${task}</span>
        <button class="delete">X</button>
    </li>        `;
        })
        .join('');
    tasksContainer.insertAdjacentHTML('beforeend', html);
}

addBtn.addEventListener('click', () => {
    if (newTask.value) {
        tasksArr.push(newTask.value);
        newTask.value = '';
        renderTasks(tasksArr);
    }
});

for (let btn of deleteBtns) {
    btn.addEventListener('click', () => {
        btn.closest('.task').remove();
    });
}

clearBtn.addEventListener('click', () => {
    //tasksContainer.innerHTML = ''
    tasksArr.length = 0;
    renderTasks(tasksArr);
});

for (let task of tasks) {
    task.addEventListener('click', () => {
        task.classList.toggle('completed');
    });
}
