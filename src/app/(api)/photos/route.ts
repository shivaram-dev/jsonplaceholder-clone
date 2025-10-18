import { NextResponse } from "next/server";
import { photosData } from "@/data/index";


export const GET = async () => {
    return NextResponse.json({
        message: 'Connection established successfully!',
        success: true,
        data: photosData,
    })
}