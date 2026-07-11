"use client";

export default function MathBackground() {
    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#EDEDED]">
            {/* Graph Paper Grid */}
            <svg
                className="absolute inset-0 w-full h-full opacity-40"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <pattern
                        id="grid"
                        width="40"
                        height="40"
                        patternUnits="userSpaceOnUse"
                    >
                        <path
                            d="M 40 0 L 0 0 0 40"
                            fill="none"
                            stroke="#C5C6BE"
                            strokeWidth="1"
                        />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>

            {/* Circle Geometry */}
            <div className="absolute top-[10%] right-[5%] w-96 h-96 rounded-full border border-[#FF8787] opacity-20" />
            <div className="absolute top-[15%] right-[10%] w-64 h-64 rounded-full border border-dashed border-[#FF8787] opacity-30 animate-[spin_60s_linear_infinite]" />

            {/* Sine Wave */}
            <svg
                className="absolute top-[45%] left-0 w-full h-32 opacity-20 text-[#FF8787]"
                preserveAspectRatio="none"
            >
                <path
                    d="M0 64 Q 150 0 300 64 T 600 64 T 900 64 T 1200 64 T 1500 64"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                />
            </svg>

            {/* Triangle / Prism */}
            <svg
                className="absolute bottom-[10%] left-[5%] w-48 h-48 opacity-10 text-[#4A4A4A]"
                viewBox="0 0 100 100"
            >
                <polygon
                    points="50,15 90,85 10,85"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                />
                <line
                    x1="50"
                    y1="15"
                    x2="50"
                    y2="85"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    strokeDasharray="2 2"
                />
            </svg>
        </div>
    );
}
