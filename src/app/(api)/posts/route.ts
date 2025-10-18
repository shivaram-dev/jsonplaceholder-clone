import { postsData } from "@/data";
import { NextRequest, NextResponse } from "next/server"


export const GET = () => {
    return NextResponse.json({
        message: 'Connection established successfully!',
        success: true,
        data: postsData,
    })
}

export const POST = async (request: NextRequest) => {
    const newPost = await request.json();
    if (!newPost?.userId || !newPost?.id || !newPost?.title || !newPost?.body) {
        return NextResponse.json({
            message: 'userId, id, title and body are required',
            success: false,
        }, {
            status: 400
        })
    }
    postsData.push(newPost);
    
    return NextResponse.json({
        message: 'Data received successfully!',
        success: true,
        data: newPost,
    })
}

