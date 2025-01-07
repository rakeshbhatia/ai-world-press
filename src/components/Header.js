// src/components/Header.js

import Image from 'next/image';

export default function Header() {
    return (
        <header className="bg-white py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center items-center h-40">  {/* Increased height */}
                    <div className="relative w-[800px] h-[160px]">  {/* Increased size */}
                        <Image
                            src="/images/ai-world-press-logo-v2.png"
                            alt="AI World Press Logo"
                            fill
                            style={{ objectFit: 'contain' }}
                            priority
                        />
                    </div>
                </div>
            </div>
        </header>
    );
}