'use client';

import { useRouter, useSearchParams } from 'next/navigation';

export default function Terms() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const fromRegister = searchParams.get('from') === 'signUp';

  return (
    <div className="w-1/2 mx-auto rounded-lg bg-yellow-100 my-8 pl-5 pr-5">
      <br />
      <h1 className="text-black text-3xl font-bold text-center">Terms of Service</h1><br />
      <h6 className="text-black text-2xl text-center font-semibold">What is this about?</h6><br />
      <p className="text-black text-xl">
        At HavenUp, we focus on helping you sell your property quickly and safely, knowing that your home’s visibility matters. <br />
        But we also understand that buyers want security and assurance that everything is legal.
        For that reason, we have these Terms of Service — and anyone who violates them may face a fine or have their account permanently removed from HavenUp. <br />
        Also, HavenUp! will charge a small percentage of the property’s sale price as a service fee.
      </p>

      <br />
      <h6 className="text-black text-2xl text-center font-semibold">Terms</h6><br />

      <ul className="list-disc list-inside text-black text-xl">
        <li>Your account should be legal and verified by HavenUp!</li>
        <li>Your property should be legal and registered at the CNR.</li>
        <li>The charge of your property sale will range from 3% to 4.5%.</li>
        <li>If you violate one of these terms, you agree to face a fine and account removal. An investigation process will also be opened.</li>
      </ul><br />
 
      {fromRegister && (
        <div className="text-center mt-6">
          <button
            onClick={() => router.back()}
            className="bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400"
          >
            Back
          </button>
        </div>
      )}
    </div>
  );
}
