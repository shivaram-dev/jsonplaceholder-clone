import { NextResponse } from "next/server";
import { photosData } from "@/data/index";


export const GET = () => {
    return NextResponse.json({
        message: 'Connection established successfully!',
        success: true,
        data: photosData,
    })
}