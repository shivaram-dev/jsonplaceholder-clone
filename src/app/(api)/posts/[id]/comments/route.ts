import { commentsData } from "@/data";
import { NextRequest, NextResponse } from "next/server";

export const GET = (_request: NextRequest, { params }: { params: { id: string} }) => {
    const { id } = params;
    
    const commentsOfSinglePost = commentsData.filter((item) => item?.postId === parseInt(id));
    
    return NextResponse.json({
        message: "Connection established successfully",
        success: true,
        data: commentsOfSinglePost,
    })
}