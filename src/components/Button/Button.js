import s from './Button.module.css';

function Button({ onClickButton }) {
  return (
    <button
      className={s.buttonLoad}
      type="button"
      onClick={() => onClickButton()}
    >
      Load more
    </button>
  );
}

export default Button;
