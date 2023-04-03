import { FC } from 'react';

import { SmallPokemon } from '@/interfaces';

import { Card, Grid, Row, Text } from '@nextui-org/react';
import { useRouter } from 'next/router';

interface Props {
    pokemon: SmallPokemon;
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {
    const { name, id, img } = pokemon;

    const router = useRouter();

    const onClick = () => {
        router.push(`/pokemon/${id}`);
    };

    return (
        <Grid xs={6} sm={3} md={2} xl={1}>
            <Card isHoverable isPressable onClick={onClick}>
                <Card.Body css={{ p: 1 }}>
                    <Card.Image
                        src={img}
                        width='100%'
                        height='100%'
                        alt={name}
                    />
                </Card.Body>
                <Card.Footer
                    isBlurred
                    css={{
                        position: 'absolute',
                        bgBlur: '#0f111466',
                        borderTop: '$borderWeights$light solid $gray800',
                        bottom: 0,
                        zIndex: 1,
                    }}
                >
                    <Row>
                        <Text transform='capitalize'>{`# ${id} - ${name}`}</Text>
                    </Row>
                </Card.Footer>
            </Card>
        </Grid>
    );
};
