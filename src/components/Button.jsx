import classNames from "classnames";
import { NavLink } from "react-router-dom";


const Button = ({onClick,clName,outline,children}) =>{
    return ( <div>
             <NavLink to={'/basket'}>
    <button onClick={onClick} className={classNames(
        'button',clName,
        {
        'button--outline': outline
        })}
     >{children}</button>
     </NavLink>
    </div>
    )
}

export default Button;