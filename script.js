const newTask = document.querySelector('.new-task');
const addBtn = document.querySelector('.add');
const tasksContainer = document.querySelector('.tasks');
const tasks = document.getElementsByClassName('task');
const clearBtn = document.querySelector('.clear');
const completedBtn = document.querySelector('.completed');
const allBtn = document.querySelector('.all');
const progressBtn = document.querySelector('.progress');

const tasksArr = [
    {
        name: 'First',
        isDone: false
    },
    {
        name: 'Second',
        isDone: false
    }
];

function renderTasks(arr) {
    tasksContainer.innerHTML = '';
    const html = arr
        .map((task) => {
            const li = document.createElement('li');
            li.className = `task ${task.isDone ? 'completed' : ''}`;
            const span = document.createElement('span');
            span.innerHTML = task.name;

            const deleteButton = document.createElement('button');
            deleteButton.innerHTML = 'X';
            deleteButton.classList.add('delete');

            //Обработчик не работает
            deleteButton.addEventListener('click', () => {
                console.log('delete button');
            });

            li.appendChild(span);
            li.appendChild(deleteButton);
            return li.outerHTML; //inner выводит span + button
        })
        .join('');
    tasksContainer.insertAdjacentHTML('beforeend', html);
}

//рендер при загрузке страницы

renderTasks(tasksArr);

//добавление элементов (работает)
addBtn.addEventListener('click', () => {
    if (newTask.value) {
        tasksArr.push({
            name: newTask.value,
            isDone: false
        });
        newTask.value = '';
        renderTasks(tasksArr);
    }
});

//фильтр Completed (работает)
completedBtn.addEventListener('click', () => {
    const filtered = tasksArr.filter((el) => el.isDone === true);
    filtered.length > 0
        ? renderTasks(filtered)
        : (tasksContainer.innerHTML = 'No items found');
});

//фильтр All (работает)
allBtn.addEventListener('click', () => {
    renderTasks(tasksArr);
});

//фильтр inProgress (работает)
progressBtn.addEventListener('click', () => {
    const filtered = tasksArr.filter((task) => task.isDone === false);
    filtered.length > 0
        ? renderTasks(filtered)
        : (tasksContainer.innerHTML = 'No items found');
});

//кнопка clear (работает)
clearBtn.addEventListener('click', () => {
    //tasksContainer.innerHTML = ''
    tasksArr.length = 0;
    renderTasks(tasksArr);
});

//изменение статуса задачи (работает для дефолтных элементов массива, после добавления элементов и после переключения на другой фильтр не работает)
for (let task of tasks) {
    task.addEventListener('click', () => {
        console.log(task);
        task.classList.toggle('completed');
        const el = tasksArr.find(
            (el) => el.name === task.firstChild.textContent
        );
        el.isDone = !el.isDone;
        console.log(el);
    });
}

//изменение стилей в фильтрах не работает
