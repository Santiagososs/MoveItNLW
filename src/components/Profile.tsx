
import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile(){
    const{level}= useContext(ChallengesContext);
return(
<div className={styles.profileContainer}> 
    <img src="https://github.com/Santiagososs.png" alt="Gabriel Santiago"/>
    <div>
        <strong>Gabriel Santiago</strong>
        <p>
            <img src="icons/level.svg" alt="Level"/>
            {level}
            
        </p>
    </div>

</div>
);

}