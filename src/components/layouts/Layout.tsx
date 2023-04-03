import { FC, ReactNode } from 'react';

import Head from 'next/head';

import { Nabvar } from '../ui';

interface LayoutProps {
    children?: ReactNode | undefined;
    title?: string;
}

export const Layout: FC<LayoutProps> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title || 'Pokemon App'}</title>
                <meta name='author' content='Johan Tuarez' />
                <meta
                    name='description'
                    content={`Información sobre el pokemón ${title}`}
                />
                <meta name='keywords' content={`${title}, pokemon, pokedex`} />
            </Head>

            <Nabvar />

            <main
                style={{
                    padding: '0px 20px',
                }}
            >
                {children}
            </main>
        </>
    );
};
