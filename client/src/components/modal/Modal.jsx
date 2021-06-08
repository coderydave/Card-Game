import "./Modal.scss";

const Modal = (props) => {
  const divStyle = {
    display: props.displayModal ? "block" : "none",
  };
  function closeModal(e) {
    e.stopPropagation();
    props.closeModal();
  }
  return (
    <div className="modal" onClick={closeModal} style={divStyle}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        <header>
          <h1>{props.title}</h1>
        </header>
        <body>
          <h2>{props.body}</h2>
          <img className="img" alt={props.img.toString()} src={props.img} />
        </body>
        <footer>
          <button>OK</button>
        </footer>
      </div>
    </div>
  );
};

export default Modal;
