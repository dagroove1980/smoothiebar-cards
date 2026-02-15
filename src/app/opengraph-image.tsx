import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'SmoothieBar Cards — Curated Recipes & Nutrition';
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: 'linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)', // Fresh mint to water blue
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    fontFamily: 'sans-serif',
                }}
            >
                {/* Colorful blobs */}
                <div
                    style={{
                        position: 'absolute',
                        width: 500,
                        height: 500,
                        background: '#ff9a9e', // Pink
                        borderRadius: '50%',
                        filter: 'blur(70px)',
                        opacity: 0.7,
                        top: -100,
                        left: -100,
                    }}
                />
                <div
                    style={{
                        position: 'absolute',
                        width: 400,
                        height: 400,
                        background: '#f6d365', // Sunny yellow
                        borderRadius: '50%',
                        filter: 'blur(60px)',
                        opacity: 0.7,
                        bottom: -50,
                        right: -50,
                    }}
                />

                {/* Glassmorphism Card */}
                <div
                    style={{
                        zIndex: 10,
                        background: 'rgba(255, 255, 255, 0.4)',
                        backdropFilter: 'blur(20px)',
                        padding: '50px 80px',
                        borderRadius: 30,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 10,
                        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                        border: '1px solid rgba(255,255,255,0.5)',
                    }}
                >
                    <div style={{ fontSize: 72, marginBottom: 10 }}>🍌🍓🥤</div>
                    <div
                        style={{
                            fontSize: 80,
                            fontWeight: 900,
                            color: '#1a202c',
                            letterSpacing: '-0.04em',
                            lineHeight: 1,
                            textTransform: 'lowercase',
                        }}
                    >
                        smoothie<span style={{ color: '#ffffff' }}>bar</span>
                    </div>
                    <div
                        style={{
                            fontSize: 28,
                            fontWeight: 600,
                            color: '#4a5568',
                            marginTop: 10,
                            background: 'rgba(255,255,255,0.5)',
                            padding: '8px 20px',
                            borderRadius: 50,
                        }}
                    >
                        Curated Recipes & Nutrition
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
