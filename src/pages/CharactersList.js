import React from 'react';
import { Link } from 'react-router-dom';
import { useCharacters } from '../hooks/useCharacters';
import './CharactersList.css';

export default function CharactersList() {
    const { error, data, loading } = useCharacters();

    if (loading) return <div>Spinner</div>;

    if (error) return <div>Error</div>;

    return (
        <div className='CharactersList'>
            {data.characters.results.map(({ id, name, image }) => {
                return (
                    <Link key={id} to={`/${id}`}>
                        <h2>{name}</h2>
                        <img src={image} alt={name} />
                    </Link>
                )
            }
            )}
        </div>
    )
}
