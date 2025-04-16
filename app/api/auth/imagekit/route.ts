import config from '@/lib/config';
import ImageKit from 'imagekit';
import { NextResponse } from 'next/server';


const {
    env: {
        imagekit: { publicKey, privateKey, urlEndpoint }
    }
} = config;

const imagekit = new ImageKit({
    publicKey,
    privateKey,
    urlEndpoint,
}); 

export async function GET() {
    try {
      const authParams = imagekit.getAuthenticationParameters();
      return NextResponse.json(authParams, {
        headers: {
          'Access-Control-Allow-Origin': '*', // Engedélyez minden forrást
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        },
      });
    } catch (error: any) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }