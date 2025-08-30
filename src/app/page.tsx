'use client';

import Show from './carrusel/page';
import Main from './main/page';
import Chat from './chatbot/chatbot';
import Pilares from './main/pilares/page';
import Us from './main/aboutUs/page';
import Footer from './footer/footer';

export default function home() {
    return (
        <>
            <Show />
            <br /><br />
            <Main />
            <br /><br /><br />
            <Pilares />
            <br /><br />
            <Us />
            <br /><br />
            <Chat />
            <br /><br />
            <Footer />
        </>
    );
}

