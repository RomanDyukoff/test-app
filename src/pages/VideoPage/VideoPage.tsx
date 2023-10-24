import { useEffect, useRef, useState } from 'react';
import { IFRAME_API } from '../../constants/constants';
import { YouTubeVideoID, PlayerRefType } from './VideoPage.type';
import { Banner } from '../../components/Banner.tsx/Banner';

declare global {
    interface Window {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        YT: any;
        onYouTubeIframeAPIReady: () => void;
    }
}

export const VideoPage = ({ videoId }: YouTubeVideoID) => {
    const playerRef = useRef<PlayerRefType | null>(null);
    const [isBanner, setIsBanner] = useState<boolean>(false)

    useEffect(() => {
        const loadAPI = async () => {
            await new Promise<void>((resolve) => {
                const tag = document.createElement('script');
                tag.src = IFRAME_API;
                window.onYouTubeIframeAPIReady = () => resolve();
                document.body.appendChild(tag);
            });

            playerRef.current = new window.YT.Player('player', {
                height: '720',
                width: '1280',
                videoId: videoId,
                events: {
                    'onStateChange': onPlayerStateChange
                }
            });
        };

        loadAPI();
    }, [videoId]);

    const onPlayerStateChange = (event: { data: number }) => {
        if (event.data === window.YT.PlayerState.PLAYING) {

            setInterval(() => {
                if (playerRef && playerRef.current) {
                    const currentTime = Math.round(playerRef.current.getCurrentTime());
                    setIsBanner(currentTime > 5);

                }
            }, 1000);
        }
    }

    return (
        <>
            <div id="player"></div>
            {isBanner && <Banner />}
        </>
    );
}
