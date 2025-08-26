'use client';

import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";
import Chat from "../chatbot/chatbot";

export default function LocalNavBar(){
    return(
        <main>
            <Chat/>
            <Step1/>
            <Step2/>
            <Step3/>
        </main>
    )
};