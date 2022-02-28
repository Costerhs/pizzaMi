import classNames from "classnames";



const Button = (props) =>{
    return ( <div>
    <button className={classNames(
        'button',
        {
        'button--outline': props.style
        })}
     >{props.name}</button>
    </div>
    )
}

export default Button;