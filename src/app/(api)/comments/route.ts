import { commentsData } from "@/data";
import { NextRequest, NextResponse } from "next/server"


export const GET = (request: NextRequest) => {
    const searchParams = request.nextUrl.searchParams;
    const postId = searchParams.get('postId');
    if (postId) {
      const commentsOfSinglePost = commentsData.filter((item) => item?.postId === parseInt(postId));
      return NextResponse.json({
          message: 'Connection established successfully!',
          success: true,
          data: commentsOfSinglePost,
      })
    }
    return NextResponse.json({
        message: 'Connection established successfully!',
        success: true,
        data: commentsData,
    })
}