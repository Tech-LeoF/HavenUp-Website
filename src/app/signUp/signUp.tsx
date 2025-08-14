'use client';

import { useState } from "react";
import { useSignUp } from "@clerk/nextjs";


export default function SignUp(){
    const { isLoaded, signUp, setActive} = useSignUp();
    const [role, setRole] = useState<'buyer'|'seller' | null>(null);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [verification, setVerification] = useState(false);
    const [code, setCode] = useState('');
    const [error, setError] = useState('');

    if(!isLoaded) return null; 

    const registrar = async(e: React.FormEvent)=>{
        e.preventDefault();
        setError('');

        if(!role){
            setError('Please, select your role');
            return;
        }
        if(password !== confirmPassword){
            setError('The passwords do not match ')
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
            setError("Invalid email address");
            return;
        }

        try{
            await signUp.create({
                emailAddress: email.trim(), password,
                firstName: firstName.trim(),
                lastName: lastName.trim(),
                unsafeMetadata:{
                    role: role,
                },
            });

            await signUp.prepareEmailAddressVerification({strategy : 'email_code'});
            setVerification(true);
        }catch(err: any){
            setError(err.errors?.[0]?.message || 'problems with sigUp');
        };
    };

    const verificar = async(e: React.FormEvent)=>{
        e.preventDefault();
        setError('');

        try {
            const completeSignUp = await signUp.attemptEmailAddressVerification({ code });

            console.log("Resultado de verificación:", completeSignUp);

            if (completeSignUp.status === 'complete') {
                await setActive({ session: completeSignUp.createdSessionId });
                console.log("✅ Registro completo, redirigiendo...");
                window.location.href = '/';
            } else {
                console.warn("⚠️ Registro no se completó, status:", completeSignUp.status);
            }
        } catch (err: any) {
            console.error("Error en attemptEmailAddressVerification:", err);
            setError(err.errors?.[0]?.message || 'mistaken code');
        }

    };
    return(
        <div style={{ fontFamily: "'Poppins', sans-serif" }} className="max-w-md w-full p-6 bg-white rounded-xl shadow space-y-6 mt-10">
            {!verification ? (
                <form onSubmit={registrar}>
                    <h2 className="text-2xl font-bold mb-4 text-center text-black">What would you like to do?</h2>

                    <div className="flex justify-center gap-4 mb-4">
                        <button type="button" onClick={() =>setRole('buyer')} className={`px-4 py-2 rounded ${role == 'buyer' ? 'bg-yellow-400 text-black' : 'bg-gray-100 text-gray-700'}`}>I want to buy</button>
                        <button type="button" onClick={()=> setRole('seller')} className={`px-4 py-2 rounded ${ role == 'seller' ? 'bg-yellow-400 text-black' : 'bg-gray-100 text-gray-700'}`}>I want to sell</button>
                    </div>
                    <label className="text-black">First name</label>
                    <input
                    className="w-full border p-2 rounded mt-2 mb-2 bg-yellow-50 placeholder-gray-400 text-black"
                    type="text"
                    placeholder="Enter your first name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    />

                    <label className="text-black">Last name</label>
                    <input
                    className="w-full border p-2 rounded mt-2 mb-2 bg-yellow-50 placeholder-gray-400 text-black"
                    type="text"
                    placeholder="Enter your last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                    />
                    <label className="text-black">Email</label>
                    <input 
                    className="w-full border p-2 rounded  mt-2 mb-2 bg-yellow-50 placeholder-gray-400 text-black"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    />
                    <label className="text-black">Password</label>
                    <input
                    className="w-full border p-2 rounded mt-2 mb-2 bg-yellow-50 placeholder-gray-400 text-black"
                    type="password"
                    placeholder="Create a password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    />
                    <label className="text-black">Confirm Password</label>
                    <input
                    className="w-full border p-2 rounded mt-2 bg-yellow-50 placeholder-gray-400 text-black"
                    type="password"
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    />
                    <div className="flex items-center mt-4">
                        <input type="checkbox" className="mr-2" required />
                        <span className="text-sm text-black">I agree to the Terms of Service and Privacy Policy</span>
                    </div>
                    <div id="clerk-captcha" />
                    <button
                    className="bg-yellow-400 text-black p-2 mt-4 w-full rounded"
                    type="submit"
                    > Create account as {role ? (role === "buyer"? 'buyer' : 'seller') : '...'}</button>
                    {error && <p className="text-red-500 mt-2">{error}</p>}
                </form>
            ):(
                <form onSubmit={verificar}>
                    <h2 className="font-bold text-xl mb-4 text-black">Verify your email</h2>
                    <input
                    className="w-full border p-2 rounded mt-2 bg-yellow-50 placeholder-gray-400 text-black"
                    type="text"
                    placeholder="Verification code"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    required
                    />
                    <button
                    className="bg-green-600 text-white p-2 mt-4 w-full rounded"
                    type="submit"
                    >
                    Verify and continue
                    </button>

                    {error && <p className="text-red-500 mt-2">{error}</p>}
                </form>
            )}
        </div>
    );
}