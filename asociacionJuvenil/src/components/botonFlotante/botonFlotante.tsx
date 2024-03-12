import { Button } from "react-bootstrap";
import './css.css'

const FloatingButton = () => {
    return (
        <Button className="FB" onClick={() => { window.scrollTo(0, 0); }}>
            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5V19M12 5L6 11M12 5L18 11" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </Button>
    );
};


export default FloatingButton;