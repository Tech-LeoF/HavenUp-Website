'use client';

import Link from 'next/link';
import Pilares from './main/pilares/page';
import Us from './main/aboutUs/page';
import Page from './paginaPrincipal/page';
import HouseDetails from './house visualization/houseVisualization';
import Footer from './footer/footer';


export default function home(){
    return (
    <>
    <Page/>
    <Us/>
    <Footer/>
    </>
    )
};

