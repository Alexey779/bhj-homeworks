const btn = document.querySelector('.tasks__add');
const tasks = document.querySelector('.tasks__list');
const input = document.querySelector('.tasks__input');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    if(input.value.trim()){
        tasks.insertAdjacentHTML('afterbegin',
            `<div class="task">
                <div class="task__title">
                    ${input.value}
                </div>
                <a href="#" class="task__remove">&times;</a>
            </div>`
        );
        input.value = '';

        let task = document.querySelector(".task");
        let taskRemove = task.querySelector(".task__remove");
        taskRemove.addEventListener("click", () => {
            task.remove()
        });
    };

   
});
