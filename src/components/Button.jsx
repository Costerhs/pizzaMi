import classNames from "classnames";



const Button = ({onClick,clName,outline,children}) =>{
    return ( <div>
    <button onClick={onClick} className={classNames(
        'button',clName,
        {
        'button--outline': outline
        })}
     >{children}</button>
    </div>
    )
}

export default Button;