import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
    try {
        const result = (await axios.get("https://api.testvalley.kr/main-banner/all")).data;

        return NextResponse.json(result, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ message: error?.message || "Internal Server Error" }, { status: 500 });
    }
}