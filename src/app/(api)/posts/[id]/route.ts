import { postsData } from "@/data"
import { NextRequest, NextResponse } from "next/server"

export const GET = async (_request: NextRequest, { params }: { params: { id: string } }) => {

    const { id } = params;
    
    const singlePost = postsData.find((item) => item?.id === parseInt(id));
    
    return NextResponse.json({
        message: "Connection established successfully",
        success: true,
        data: singlePost,
    })
}

export const PUT = async (request: NextRequest, { params }: { params: {id: string }}) => {
    const newPost = await request.json();
    const { id } = params;

    if (!newPost?.userId || !newPost?.id || !newPost?.title || !newPost?.body) {
        return NextResponse.json({
            message: 'userId, id, title and body are required',
            success: false,
        }, {
            status: 400
        })
    }
    
    const updatedPost = postsData.find((item) => item?.id === parseInt(id));
    if (updatedPost) {
        updatedPost.userId = newPost?.userId;
        updatedPost.title = newPost?.title;
        updatedPost.body = newPost?.body;
    } 

    return NextResponse.json({
        message: 'Data updated successfully!',
        success: true,
        data: updatedPost,
    })
}

export const PATCH = async (request: NextRequest, { params }: { params: {id: string }}) => {
    const newPost = await request.json();
    const { id } = params;

    const updatedPost = postsData.find((item) => item?.id === parseInt(id));
    if (updatedPost) {
        updatedPost.userId = newPost?.userId;
        updatedPost.title = newPost?.title;
        updatedPost.body = newPost?.body;
    } 

    return NextResponse.json({
        message: 'Data updated successfully!',
        success: true,
        data: updatedPost,
    })
}

export const DELETE = async (request: NextRequest, { params }: { params: {id: string }}) => {
    const { id } = params;
    
    const deletedPost = postsData.find((item) => item?.id === parseInt(id));
    if (deletedPost) {
        deletedPost.userId = 0;
        deletedPost.id = 0;
        deletedPost.title = ''
        deletedPost.body = '';
    } 

    return NextResponse.json({
        message: 'Data deleted successfully!',
        success: true,
        data: deletedPost,
    })
}
