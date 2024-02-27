import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import { ICollection } from '@/types/product';

export const GET = async (req: NextRequest) => {
    try {
        const { data } = await axios.get("https://api.testvalley.kr/collections?prearrangedDiscount");
        const collections: ICollection[] = data?.items || [];

        return NextResponse.json(collections, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ message: error?.message || "Internal Server Error" }, { status: 500 });
    }
}
