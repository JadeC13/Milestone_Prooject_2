import { useHistory } from 'react-router-dom';
import './css/style.css'

const BackButton = () => {
    const history = useHistory();

    const goBack = () => {
        history.goBack();
    };

    return (
        <button className="back-button" onClick={goBack}>Back</button>
    );
};
// This code above lets you use the back button to return to the Home Page

export default BackButton;
