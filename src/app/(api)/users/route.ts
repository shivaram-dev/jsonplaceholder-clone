import { usersData } from "@/data";
import { NextResponse } from "next/server";

export const GET = async () => {
    return NextResponse.json({
        message: 'Connection established successfully!',
        success: true,
        data: usersData,
    })
}