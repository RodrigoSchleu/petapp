import './styles.css';

const Box = ({ children }) => {
    return (
        <div className='box-background'>
            {children}
        </div>
    );
}


export default Box;