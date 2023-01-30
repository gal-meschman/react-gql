import React from 'react';
import { useParams } from 'react-router';
import { useCharacter } from '../hooks/useCharacter';

export default function Character() {
    const { id } = useParams();
    const { error, data, loading } = useCharacter(id);

    if (loading) return <div>Spinner</div>;

    if (error || data.character == null) return <div>Error</div>;

    const { name, image, episode } = data.character;

    return (
        <div key={id}>
            <h2>{name}</h2>
            <img src={image} alt={name} />
            <ul>
                {episode
                    .map(e =>
                        <li key={e.episode}>{e.name}</li>
                    )}
            </ul>
        </div>
    )
}
