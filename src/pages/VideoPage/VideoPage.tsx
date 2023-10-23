import { useState, useEffect } from 'react';
import { VideoData } from './VideoPage.type';
import { VIDEO_URL } from '../../constants/constants';

export const VideoPage = (): JSX.Element => {
    const [videoData, setVideoData] = useState<VideoData | null>(null);

    useEffect(() => {
        const fetchVideoData = async () => {
            try {
                const response = await fetch(VIDEO_URL);
                const data = await response.json();

                setVideoData(data.items[0]);
            } catch (error) {
                console.error('Ошибка при получении данных видео:', error);
            }
        };

        fetchVideoData();
    }, []);

    return (
        <div>
            <iframe
                width="1280"
                height="720"
                src={videoData ? `https://www.youtube.com/embed/${videoData.id}` : ""}
                title={videoData ? videoData.snippet.title : ""}
            />
        </div>
    )
}