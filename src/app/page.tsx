'use client';

import Show from './carrusel/page';
import Main from './main/page';
import Chat from './components/chatbot';
import Pilares from './main/pilares/page';

export default function home(){
    return (
    <>
    <Show/>
    <br /><br />
    <Main/><br /><br /><br />
    <Pilares/>
    <br /><br />
    <Chat/>
    
    </>
    )
};