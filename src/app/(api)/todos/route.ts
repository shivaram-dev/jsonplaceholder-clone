import { todosData } from "@/data";
import { NextResponse } from "next/server"


export const GET = () => {
    return NextResponse.json({
        message: 'Connection established successfully!',
        success: true,
        data: todosData,
    })
}