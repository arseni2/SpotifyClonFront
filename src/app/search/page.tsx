"use server"

import React from 'react';
import Author from "@/shared_components/Author/Author";
import Album from "@/shared_components/Album/Album";
import Song from "@/shared_components/Song/Song";


const Search = () => {
    return (
        <div style={{flexWrap: 'nowrap', flexDirection: 'column', gap: 10}}>
            <input placeholder="What want listen?" />
            <h2>История поиска</h2>
            <div style={{display: 'flex'}}>
                <Author />
                <Album />
            </div>

            <div style={{display: 'flex', alignItems: 'start', alignContent: 'start'}}>
                <div>
                    <h2>Лучший результат</h2>
                    <Author />
                </div>

                <div>
                    <h2>Треки</h2>
                    <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                        <Song /> <Song /> <Song /> <Song />
                    </div>
                </div>
            </div>

            <div>
                <h2>Исполнители</h2>
                <div style={{display: 'flex', gap: '20px', flexWrap: 'wrap'}}>
                    <Author /> <Author /> <Author /> <Author />
                </div>
            </div>

            <div>
                <h2>Альбомы</h2>
                <div style={{display: 'flex', gap: '20px', flexWrap: 'wrap'}}>
                    <Album /> <Album /> <Album /> <Album />
                </div>
            </div>
        </div>
    );
};

export default Search;