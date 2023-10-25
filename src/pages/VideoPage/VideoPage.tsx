import { UrlVideoType } from './VideoPage.type';
import { Banner } from '../../components/Banner.tsx/Banner';
import { useState } from 'react';
import ReactPlayer from 'react-player';

import './style.css';


export const VideoPage = ({ urlVideo }: UrlVideoType) => {
    const [state, setState] = useState({ isBanner: false, isLoading: true });

    const showBanner = (second: number) => {
        setState(prevState => ({ ...prevState, isBanner: Math.round(second) > 5 }))
    }

    const preload = () => {
        setState(prevState => ({ ...prevState, isLoading: !state.isLoading }))
    }

    return (
        <>
            <section className='video-page'>
                {state.isLoading && <div className='video-page__loading' />}
                <ReactPlayer
                    url={urlVideo || 'https://youtu.be/M7FIvfx5J10'}
                    onProgress={({ playedSeconds }) => showBanner(playedSeconds)}
                    onReady={() => preload()}
                    controls={true}
                    width="1280px"
                    height="720px"
                />
                {state.isBanner && <Banner position='absolute' top='50%' right='0' />}
            </section>
        </>
    );
}
