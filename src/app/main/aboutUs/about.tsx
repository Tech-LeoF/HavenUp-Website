'use client';

export default function About() {
return (
    <div className="px-6 sm:px-12 py-14 font-poppins text-[#073B3A] bg-[#FDFBF3] space-y-20">

      {/* About Us Section */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-4 text-center lg:text-left">
        <h1 className="text-[clamp(1.8rem,4vw,2.8rem)] font-semibold">About Us</h1>
            <p className="text-[clamp(1rem,2vw,1.3rem)] leading-relaxed">
                At HavenUp, we believe finding your ideal home shouldn't be complicated.  
                We've created a space where buying or selling feels easy, safe, and supported.  
                Every step is designed to help you feel confident, with options that truly fit your needs.
            </p>
        </div>
        <div className="flex justify-center">
        <div className="bg-[#FDFBF3] p-4 rounded-xl shadow-md">
        <img
            src="/Imgs/about_us.png"
            alt="About Us"
            className="w-full max-w-md object-contain"
        />
        </div>
        </div>
        </div>


      {/* Mission Section */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-4 text-center lg:text-left order-1 lg:order-2">
        <h2 className="text-[clamp(1.4rem,3vw,2.2rem)] font-semibold">Our Mission</h2>
            <p className="text-[clamp(1rem,2vw,1.3rem)] leading-relaxed">
                To guide you with care through one of life’s biggest decisions:  
                finding the place you’ll call “home.” We do it with clear tools,  
                steady support, and a process that feels smooth from start to finish.
            </p>
        </div>
        <div className="flex justify-center">
        <div className="bg-[#FDFBF3] p-4 rounded-xl shadow-md">
        <img
            src="/Imgs/us.png"
            alt="Mission"
            className="w-full max-w-md object-contain"
        />
        </div>
        </div>
        </div>

      {/* Vision Section */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-4 text-center lg:text-left">
        <h2 className="text-[clamp(1.4rem,3vw,2.2rem)] font-semibold">Our Vision</h2>
        <p className="text-[clamp(1rem,2vw,1.3rem)] leading-relaxed">
            To be the platform people recommend with a smile.  
            We want everyone—no matter their story—to find real, accessible,  
            and innovative solutions to achieve the home they’ve been dreaming of.
        </p>
        </div>
        <div className="flex justify-center">
        <div className="bg-[#FDFBF3] p-4 rounded-xl shadow-md">
        <img
            src="/Imgs/about.png"
            alt="Vision"
            className="w-full max-w-md object-contain"
        />
        </div>
        </div>
        </div>


      {/* Values Section */}
        <div className="max-w-4xl mx-auto space-y-6">
        <h2 className="text-center text-[clamp(1.4rem,3vw,2.2rem)] font-semibold">Our Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-[#FAF3D3] p-5 rounded-xl shadow-sm border border-[#629584]/30">
        <h3 className="font-semibold text-lg mb-2">🤝 Trust</h3>
            <p className="text-[clamp(0.95rem,2vw,1.2rem)] leading-relaxed">
                We’re transparent at every step so you can make secure decisions.
            </p>
        </div>
        <div className="bg-[#FAF3D3] p-5 rounded-xl shadow-sm border border-[#629584]/30">
        <h3 className="font-semibold text-lg mb-2">🎯 Commitment</h3>
        <p className="text-[clamp(0.95rem,2vw,1.2rem)] leading-relaxed">
            We’re with you from the first click to the moment you hold the keys.
        </p>
        </div>
        <div className="bg-[#FAF3D3] p-5 rounded-xl shadow-sm border border-[#629584]/30">
        <h3 className="font-semibold text-lg mb-2">💡 Innovation</h3>
            <p className="text-[clamp(0.95rem,2vw,1.2rem)] leading-relaxed">
                We use modern tools that simplify—not complicate—the process.
            </p>
        </div>
        <div className="bg-[#FAF3D3] p-5 rounded-xl shadow-sm border border-[#629584]/30">
        <h3 className="font-semibold text-lg mb-2">💬 Closeness</h3>
        <p className="text-[clamp(0.95rem,2vw,1.2rem)] leading-relaxed">
            We listen with care, because every story matters.
        </p>
        </div>
        </div>
    </div>
    </div>
);
}
