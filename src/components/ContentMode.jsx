const ContentMode = ({ todo, handleDelete, setIsEdit }) => {
  return (
    <>
      <span>{todo.status}</span>
      <span>{todo.title}</span>
      <div className="btn-group">
        <button
          onClick={() => setIsEdit(true)}
          className="btn btn-sm btn-primary"
        >
          Edit
        </button>
        <button onClick={handleDelete} className="btn btn-sm btn-danger">
          Delete
        </button>
      </div>
    </>
  );
};

export default ContentMode;
