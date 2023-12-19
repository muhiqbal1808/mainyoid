/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        dangerouslyAllowSVG: true,
        remotePatterns: [
            {
                hostname: "placehold.co"
            }
        ]
    }
}

module.exports = nextConfig
