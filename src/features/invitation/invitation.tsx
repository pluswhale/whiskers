import { FC, ReactElement } from 'react';
import { Button } from '../../shared/components/button';
import giftIcon from '../../assets/images/gift_icon.png';

import styles from './invitation.module.scss';
import { Flip, toast } from 'react-toastify';
import { UserData } from '../../app/providers/AppContext';

interface Props {
    isMobile: boolean;
    userData: UserData | null;
}

export const Invitation: FC<Props> = ({ isMobile, userData }): ReactElement => {
    const copyToClipboard = async () => {
        if (!userData?.userId) {
            toast.error(`Cannot get a referal link :(`, {
                position: 'bottom-left',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'dark',
                transition: Flip,
            });
        } else {
            try {
                await navigator.clipboard.writeText(
                    `Your referal links is: t.me/testWhiskers_bot/testwhisk?startapp=${userData?.userId}. Share it to your friends and you will get a bonus spins!`,
                );

                toast.success(`You copied ref link to clipboard`, {
                    position: 'bottom-left',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'dark',
                    transition: Flip,
                });
            } catch (err) {
                toast.error(`Cannot get a referal link :(`, {
                    position: 'bottom-left',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'dark',
                    transition: Flip,
                });
            }
        }
    };

    return (
        <div className={styles.app__invitation}>
            <Button
                onClick={copyToClipboard}
                imageLeft={giftIcon}
                fontFamily={'Montserrat, sans-serif'}
                height={isMobile ? '65px' : '200px'}
                textTransform={'none'}
                text={'Refer A Friend'}
                subText={'Get 3 bonus spins'}
                fontWeight={'bolder'}
                borderRadius={'12px'}
                stylesForTexts={{
                    main: { fontSize: isMobile ? '24px' : '42px', fontWeight: 'bold' },
                    sub: { fontSize: isMobile ? '18px' : '32px', fontWeight: 'normal' },
                }}
            />
        </div>
    );
};

