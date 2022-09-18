import Head from "next/head";

import { Navbar } from "../Navbar";
import  styles  from "./MainLayout.module.css";
import { FC, PropsWithChildren } from 'react';
import React from 'react';

export const MainLayout:FC<PropsWithChildren<unknown>> = ({children}) => {
    return (
        <div className={styles['container']}>
            <Head>
                <title>NextJS - Home Page</title>
                <meta name="description" content="Home page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Head>
                <meta name="keywords" content="daniel, mateu, curso, reactjs" />
            </Head>

            <Navbar />

            <main className={styles['main']}>
                {children}

            </main>

        </div>
    )
}
