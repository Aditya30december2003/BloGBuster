import prisma from "../auth/[...nextauth]/connect";
import { NextResponse } from "next/server";
import { getAuthSession } from "../auth/[...nextauth]/options";

export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);
  const pageParam = searchParams.get("page");
  const cat = searchParams.get("cat")
  const page = pageParam ? parseInt(pageParam, 10) : 1;
  const POST_PER_PAGE = 2;

  const query ={
    take:POST_PER_PAGE,
    skip:POST_PER_PAGE*(page-1),
    where:{
     ...(cat && {catSlug : cat})  // cant be in home page only when cat exists then 
    }
  }
  try {
    const [posts , count] = await prisma.$transaction([
      prisma.post.findMany(query),
      prisma.post.count({where:query.where})
    ]);
    return NextResponse.json({posts , count}, { status: 200 });
  } catch (err) {
    console.error("Error fetching posts:", err);
    return NextResponse.json({ message: "Error fetching posts", error: err instanceof Error ? err.message : String(err) }, { status: 500 });
  }
};

//Post

export const POST = async (req: Request) => {
  

  const session = await getAuthSession()

  if(!session){
    return NextResponse.json({error:"Not Authenticated"} , {status:401})
  }

  try {

    const body = await req.json()
    const post = await prisma.post.create({
      data:{...body , userEmail: session.user?.email}
    });

    

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