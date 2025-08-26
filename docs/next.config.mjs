import withPWA from 'next-pwa';

const pwaConfig = {
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
  sw: 'sw.js'
};

const nextConfig = {
  // 您的Next.js配置
  reactStrictMode: true,
  images: {
    domains: ['picsum.photos'],
  },
};

export default withPWA(pwaConfig)(nextConfig);
