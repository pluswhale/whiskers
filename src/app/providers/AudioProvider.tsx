import { createContext, useContext, FC, ReactNode, useRef } from 'react';
import BackgroundSound from '../../assets/sounds/Casino Background Loop.mp3';

const AudioContext = createContext<{ startAudio: () => void } | undefined>(undefined);

export const useAudio = () => {
    const context = useContext(AudioContext);
    if (!context) {
        throw new Error('useAudio must be used within an AudioProvider');
    }
    return context;
};

export const AudioProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const audioContextRef = useRef<AudioContext | null>(null);

    const startAudio = async () => {
        let audioContext = audioContextRef.current;
        if (!audioContext) {
            //@ts-ignore
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
            audioContextRef.current = audioContext;
        }

        if (audioContext.state === 'suspended') {
            await audioContext.resume();
        }

        const response = await fetch(BackgroundSound);
        const arrayBuffer = await response.arrayBuffer();
        const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
        const source = audioContext.createBufferSource();
        source.buffer = audioBuffer;
        source.loop = true;
        source.connect(audioContext.destination);
        source.start(0);
    };

    return <AudioContext.Provider value={{ startAudio }}>{children}</AudioContext.Provider>;
};

