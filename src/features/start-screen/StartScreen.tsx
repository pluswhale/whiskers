import { FC, ReactElement } from 'react';
import { Heading } from '../../shared/components/heading';
import { Logo } from '../../shared/components/logo';

import styles from './start-screen.module.scss';
import { Button } from '../../shared/components/button';
import { useNavigate } from 'react-router-dom';
import { useAudio } from '../../app/providers/AudioProvider';

const StartScreen: FC = (): ReactElement => {
    const navigate = useNavigate();
    const { startAudio } = useAudio();

    const onRedirectToGame = () => {
        setTimeout(() => {
            startAudio();
        }, 1000);
        navigate('/whiskers/game');
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.logo_and_heading}>
                    <Logo />
                    <div className={styles.heading_wrapper}>
                        <Heading level="h1">Spin&Earn</Heading>
                    </div>
                </div>
                <Button
                    stylesForTexts={{ main: { fontSize: '28px' }, sub: {} }}
                    onClick={onRedirectToGame}
                    fontFamily="Montserrat, sans-serif"
                    text="Start Game"
                />
            </div>
        </div>
    );
};

export default StartScreen;

