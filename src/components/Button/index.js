import './styles.css';

const Button = ({children,styleType = 'dark',active = false}) => {
    return (
        <button className={active ? "button active":"button"} id={styleType}>{children}</button>
    );
}


export default Button;