import './styles.css';

const Button = ({children,styleType = 'dark',active = false,...Rest}) => {
    return (
        <button className={active ? "button active":"button"} id={styleType} {...Rest}>{children}</button>
    );
}


export default Button;