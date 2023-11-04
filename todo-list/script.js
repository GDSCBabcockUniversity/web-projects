document.querySelectorAll('.task').forEach((task) => {
  task.addEventListener('click', () => {
    task.parentNode.removeChild(task);
  })
})