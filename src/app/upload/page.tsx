"use client"

import React, {useCallback, useState} from 'react';
import UploadTrackForm from "@/components/Forms/UploadTrackForm";
import UploadAlbumForm from "@/components/Forms/UploadAlbumForm";

const Page = () => {
    const [isPageUploadTrack, setIsPageUploadTrack] = useState(true)
    const handleClickUploadTrack = useCallback(() => {
        setIsPageUploadTrack(true)
    }, [])
    const handleClickUploadPlaylist = useCallback(() => {
        setIsPageUploadTrack(false)
    }, [])
    return (<>
        <div>
            <div onClick={handleClickUploadTrack}>upload track</div>
            <div onClick={handleClickUploadPlaylist}>create playlist</div>
        </div>
        {isPageUploadTrack
            ? <UploadTrackForm/>
            : <UploadAlbumForm/>
        }
    </>);
};

export default Page;