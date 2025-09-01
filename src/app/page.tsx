'use client';

import Link from 'next/link';
import Pilares from './main/pilares/page';
import Us from './main/aboutUs/page';
import Page from './paginaPrincipal/page';
import Main from './main/page';
import HouseDetails from './house visualization/houseVisualization';

export default function home() {
    return (
   
    
 <main>
    <Main/><br /><br /><br />
    <Pilares/>
    <br /><br />
    <Us/><br /><br />
    <br /> <br />
    
    <Page/>
    <HouseDetails/>
 </main>
    )
};

