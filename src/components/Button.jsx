import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

const Button = ({ onClick, clName, outline, children }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className={classNames('button', clName, {
          'button--outline': outline,
        })}>
        {children}
      </button>
    </div>
  );
};

export default Button;
