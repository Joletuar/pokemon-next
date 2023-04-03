import Image from 'next/image';
import NextLink from 'next/link';
import { Spacer, Text, useTheme, Link } from '@nextui-org/react';
import { FC } from 'react';

export const Nabvar: FC = () => {
    const { theme } = useTheme();

    //console.log(theme);

    return (
        <div
            style={{
                display: 'flex',
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'start',
                padding: '0x 20px',
                backgroundColor: theme?.colors.gray100.value,
            }}
        >
            <Image
                src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'
                alt='icono de la app'
                width={70}
                height={70}
            />

            <Link as='div'>
                <NextLink href='/' style={{ display: 'flex' }}>
                    <Text color='white' h2>
                        P
                    </Text>
                    <Text color='white' h3>
                        ókemon
                    </Text>
                </NextLink>
            </Link>

            <Spacer css={{ flex: 1 }} />

            <Link block as='div'>
                <NextLink href='/favorites' style={{ display: 'flex' }}>
                    <Text color='white'>Favoritos</Text>
                </NextLink>
            </Link>
        </div>
    );
};
