import prisma from "@/app/api/auth/[...nextauth]/connect";
import { NextResponse } from "next/server";
type Params = {
  id: string;
};
export const GET = async (req: Request, { params }: { params: Params }) => {
  

  const { slug } = params;

  // More debug logging
  console.log("Extracted id:", slug);

  try {
    // Log the query we're about to make
    console.log("Attempting to find post with id:", slug);

    const post = await prisma.post.update({
      where: { slug },
      data:{views:{increment:1}},
      include:{user:true}
    });

    // Log the result
    console.log("Found post:", post);

    return NextResponse.json(post, { status: 200 });
  } catch (err) {
    console.error("Error fetching post:", err);
    return NextResponse.json(
      { 
        message: "Error fetching post", 
        error: err instanceof Error ? err.message : String(err) 
      }, 
      { status: 500 }
    );
  }
};