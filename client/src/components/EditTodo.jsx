import React, { Fragment, useState } from 'react';

const EditTodo = ({ todo }) => {
  const [description, setDescription] = useState(todo.description);
  const [isOpen, setIsOpen] = useState(false);

  const updateDescription = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch(`http://localhost:5000/todos/${todo.todo_id}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
      });
      setIsOpen(false);
      window.location = "/";
    } catch (error) {
      console.error(error.message);
    }
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setDescription(todo.description);
    setIsOpen(false);
  };

  return (
    <Fragment>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={openModal}>
        {isOpen ? 'Cancel' : 'Edit'}
      </button>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-auto bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-8">
            <div className="flex justify-end">
              <button className="text-gray-500 hover:text-gray-700" onClick={closeModal}>
                X
              </button>
            </div>
            <div className="mt-4">
              <input
                type="text"
                value={description}
                onChange={e => setDescription(e.target.value)}
                className="border border-gray-300 px-2 py-1 rounded"
              />
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={updateDescription}>
                Save
              </button>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={ closeModal }>
                Cancel
              </button>
            </div>
          </div>3
        </div>
      )}
    </Fragment>
  );
};

export default EditTodo;
