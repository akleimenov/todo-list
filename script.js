const newTask = document.querySelector('.new-task');
const addBtn = document.querySelector('.add');
const tasksContainer = document.querySelector('.tasks');
const tasks = document.getElementsByClassName('task');
const clearBtn = document.querySelector('.clear');
const deleteBtns = document.getElementsByClassName('delete');

const tasksArr = ['First1', 'Second1'];

const arr = [
    {
        name: 'First',
        isDone: false
    },
    {
        name: 'Second',
        isDone: true
    }
]

function renderTasks(arr) {
    tasksContainer.innerHTML = '';
    const html = arr
        .map((task) => {
            const li = document.createElement('li')
            li.className = 'task'

            const span = document.createElement('span')
            span.innerHTML = task

            const deleteButton = document.createElement('button')

            deleteButton.addEventListener('click',() => {
                tasksArr = tasksArr.filter((item) => item !== task)
                console.log(`tasksArr`, tasksArr)
            })

            li.appendChild(span)
            li.appendChild(deleteButton)
            console.log(`li`, li)

            return li.innerHTML

            


    //         return `<li class="task">
    //     <span>${task}</span>
    //     <button class="delete">X</button>
    // </li>`;
        })
        .join('');
    tasksContainer.insertAdjacentHTML('beforeend', html);
}

renderTasks(tasksArr)

addBtn.addEventListener('click', () => {
    if (newTask.value) {
        tasksArr.push(newTask.value);
        newTask.value = '';
        renderTasks(tasksArr);
    }
});

console.log(`deleteBtns`, deleteBtns)

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
