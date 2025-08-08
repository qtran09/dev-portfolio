import './Card.css';
import {useState} from 'react';
import {Link} from 'react-router-dom'
const ProList = (
    <div id='pro'>
        <h2>Quyen Tran</h2>
        <h3 id='pro_title'>Professional</h3>
        <ul id='pro_links'>
            <li>
                <a href='https://www.linkedin.com/in/qtran09/' target='_blank' rel='noreferrer'>LinkedIn 💼</a>
            </li>
            <li>
                <a href='https://github.com/qtran09' target='_blank' rel='noreferrer'>Github 💻</a>
            </li>
            <li>
                <a href='Quyen_Tran_Resume.pdf' target='_blank' rel='noreferrer'>Resume 📃</a>
            </li>
            <li>
                <Link to='/developer'>Developer Overview 🤖</Link>
            </li>
        </ul>
    </div>
);
const CasualList = (
    <div id='casual'>
        <h2>Quyen Tran</h2>
        <h3 id='personal_title'>Socials</h3>
        <ul id='personal_links'>
            <li>
                <a href='https://www.facebook.com/quyen.tran.1422/' target='_blank' rel='noreferrer'>Facebook</a>
            </li>
            <li>
                <a href='https://www.instagram.com/ssbmq/' target='_blank' rel='noreferrer'>Instagram</a>
            </li>
            <li>
                <a href='https://www.twitch.tv/bigkitchensink' target='_blank' rel='noreferrer'>Twitch</a>
            </li>
        </ul>
    </div>
);

const Card = () =>
{
    const [CardView, setCardView] = useState(ProList);
    const [ButtonText, setButtonText] = useState('Casual')
    const switchViews = () => 
    {
        if(CardView === ProList) 
        {
            setCardView(CasualList);
            setButtonText('Professional');
        }
        else 
        {
            setCardView(ProList);
            setButtonText('Casual');
        }
    }
    return (
    <div id='card'>
        {CardView}
        <button id='viewSwitch' onClick={switchViews}>View {ButtonText}</button>
    </div>
    );
};

export default Card;