const config = {
    env: {
        apiEndpoint: process.env.NEXT_PUBLIC_API_ENDPOINT!,
        imagekit: {
            publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY!,
            urlEndpoint : process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT!,
            privateKey: process.env.NEXT_PUBLIC_IMAGEKIT_PRIVATE_KEY!,
        },
        databseUrl: process.env.DATABASE_URL!,
    },
};

export default config;