import { FC } from 'react';
import { Card, Grid } from '@nextui-org/react';
import { FavoritesPokemon } from './FavoritesPokemon';

interface Props {
    pokemons: number[];
}

export const FavoritesPokemons: FC<Props> = ({ pokemons }) => {
    return (
        <Grid.Container gap={2} direction='row' justify='flex-start'>
            {pokemons.map((id) => (
                <FavoritesPokemon key={id} id={id} />
            ))}
        </Grid.Container>
    );
};
