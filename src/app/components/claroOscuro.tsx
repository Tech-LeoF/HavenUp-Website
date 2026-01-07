'use client';

import {useState, useEffect} from 'react';

export default function Modo(){
    const [dark, setDark] = useState(false);

    useEffect(()=> {
        const saveTheme = localStorage.getItem('theme')

        if(saveTheme === 'dark'){
            document.documentElement.classList.add('dark');
        
        setDark(true);
        }
    }, []);

    const modo = () =>{
        document.documentElement.classList.toggle('dark');

        const isDark = document.documentElement.classList.contains('dark');
        localStorage.setItem('theme', isDark ? 'dark':'light' );
        setDark(isDark);
    }

    return(
        <button
        onClick={modo}
        className='px-4 py-2 rounded-lg bg-gray-200 dark:bg-black-800 text-black dark:text-white'
        >{dark ? '🌙' : '☀️'}</button>
    )
}