import React, { useState } from "react";

const TaskModal = ({ taskData, onSaveTask, onCloseModal }) => {
  const [task, setTask] = useState(taskData);

  // Обработчик изменения полей ввода
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({ ...prevTask, [name]: value }));
  };

  // Обработчик сохранения задачи
  const handleSave = () => {
    onSaveTask(task);
  };

  return (
    <div className="task-modal">
      <div className="task-modal-content">
        <span onClick={onCloseModal} className="close-button">
          &times;
        </span>
        <h2>Добавить задачу</h2>
        <div className="task-form">
          <div className="form-group">
            <label>Название задачи:</label>
            <input
              type="text"
              name="name"
              value={task.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Начало задачи:</label>
            <input
              type="time"
              name="start"
              value={task.start}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Конец задачи:</label>
            <input
              type="time"
              name="end"
              value={task.end}
              onChange={handleChange}
            />
          </div>
          <button onClick={handleSave}>Сохранить</button>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
