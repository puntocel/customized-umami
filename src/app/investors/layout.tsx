import { Metadata } from 'next';

import Page from '@/components/layout/Page';
import styles from './layout.module.css';

export default async function ({ children }) {
    return (

        <main className={styles.layout}>

            <section className={styles.body}>
                <Page>{children}</Page>
            </section>
        </main>

    );
}

export const metadata: Metadata = {
    title: {
        template: '%s | Nexus',
        default: 'Digital Economy Nexus',
    },
};