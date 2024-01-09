import React from 'react';
import Logo from './Logo';
import HeaderText from './HeaderText';
import ButtonContact from './ButtonContact';
import Container from '../Container/Container';

export default function Home() {
    return (
        <>
            <header className="w-full fixed bg-customBlack bg-opacity-75 z-10" style={{height: '15vh'}}>
                <Container additionalStyles="flex py-5 justify-between items-center">
                    <Logo/>
                    <HeaderText/>
                    <ButtonContact/>
                </Container>
            </header>

            <div className="relative block w-full" style={{height: '15vh'}}></div>
        </>
    );
}