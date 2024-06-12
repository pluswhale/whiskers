import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { AudioProvider } from '../../app/providers/AudioProvider';

export const AppLayout: FC = () => {
    return (
        <AudioProvider>
            <Outlet />
        </AudioProvider>
    );
};

