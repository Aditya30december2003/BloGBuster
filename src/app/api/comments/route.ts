import prisma from "@/app/api/auth/[...nextauth]/connect";
import { NextResponse } from "next/server";
import { getAuthSession } from "../auth/[...nextauth]/options";

export const GET = async (req: Request) => {
  

  const { searchParams } = new URL(req.url)

  const postSlug = searchParams.get("postSlug")

  try {

    const comments = await prisma.comment.findMany({
      where: { 
        ...(postSlug && {postSlug})
       },
      include:{user:true}
    });

    

    return NextResponse.json(comments, { status: 200 });

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

// Create a comment
export const POST = async (req: Request) => {
  

  const session = await getAuthSession()

  if(!session){
    return NextResponse.json({error:"Not Authenticated"} , {status:401})
  }

  try {

    const body = await req.json()
    const comment = await prisma.comment.create({
      data:{...body , userEmail: session.user?.email}
    });

    

    return NextResponse.json(comment, { status: 200 });

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