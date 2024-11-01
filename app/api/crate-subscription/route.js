// app/api/crate-subscription/route.ts

import { NextRequest, NextResponse } from 'next/server';

export async function GET(req) {
    // Handle GET request
    return NextResponse.json({ message: 'GET request successful' });
}

export async function POST(req) {
    // Handle POST request
    const data = await req.json(); // Assuming the POST request sends JSON
    return NextResponse.json({ message: 'POST request successful', data });
}
