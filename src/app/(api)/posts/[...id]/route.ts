import { commentsData, postsData } from "@/data";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
    _request: NextRequest,
    { params }: { params: Promise<{ id: string[] }> }
) => {
    try {
        const { id } = await params;

        const singlePost = postsData.find(
            (item) => item?.id === parseInt(id[0])
        );

        if (id[1]) {
            const commentsOfSinglePost = commentsData.filter(
                (item) => item?.postId === parseInt(id[0])
            );

            return NextResponse.json({
                message: "Connection established successfully",
                success: true,
                data: commentsOfSinglePost,
            });
        }

        return NextResponse.json({
            message: "Connection established successfully",
            success: true,
            data: singlePost,
        });
    } catch (err) {
        console.log(err);
        return NextResponse.json(
            { error: "Failed to fetch comments", success: false },
            { status: 500 }
        );
    }
};

export const PUT = async (
    request: NextRequest,
    { params }: { params: Promise<{ id: string[] }> }
) => {
    try {
        const newPost = await request.json();
        const { id } = await params;

        if (
            !newPost?.userId ||
            !newPost?.id ||
            !newPost?.title ||
            !newPost?.body
        ) {
            return NextResponse.json(
                {
                    message: "userId, id, title and body are required",
                    success: false,
                },
                {
                    status: 400,
                }
            );
        }

        const updatedPost = postsData.find(
            (item) => item?.id === parseInt(id[0])
        );
        if (updatedPost) {
            updatedPost.userId = newPost?.userId;
            updatedPost.title = newPost?.title;
            updatedPost.body = newPost?.body;
        }

        return NextResponse.json({
            message: "Data updated successfully!",
            success: true,
            data: updatedPost,
        });
    } catch (err) {
        console.log(err);
        return NextResponse.json(
            { error: "Failed to update comment", success: false },
            { status: 500 }
        );
    }
};

export const PATCH = async (
    request: NextRequest,
    { params }: { params: Promise<{ id: string[] }> }
) => {
    try {
        const newPost = await request.json();
        const { id } = await params;

        const updatedPost = postsData.find(
            (item) => item?.id === parseInt(id[0])
        );
        if (updatedPost) {
            updatedPost.userId = newPost?.userId;
            updatedPost.title = newPost?.title;
            updatedPost.body = newPost?.body;
        }

        return NextResponse.json({
            message: "Data updated successfully!",
            success: true,
            data: updatedPost,
        });
    } catch (err) {
        console.log(err);
        return NextResponse.json(
            { error: "Failed to update comment", success: false },
            { status: 500 }
        );
    }
};

export const DELETE = async (
    request: NextRequest,
    { params }: { params: Promise<{ id: string[] }> }
) => {
    try {
        const { id } = await params;

        const deletedPost = postsData.find(
            (item) => item?.id === parseInt(id[0])
        );
        if (deletedPost) {
            deletedPost.userId = 0;
            deletedPost.id = 0;
            deletedPost.title = "";
            deletedPost.body = "";
        }

        return NextResponse.json({
            message: "Data deleted successfully!",
            success: true,
            data: deletedPost,
        });
    } catch (err) {
        console.log(err);
        return NextResponse.json(
            { error: "Failed to delete comment", success: false },
            { status: 500 }
        );
    }
};
