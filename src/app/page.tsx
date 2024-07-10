import Featured from "@/Components/Featured/Featured";
import CategoryList from "@/Components/CategoryList/CategoryList"
import CardList from "@/Components/CardList/CardList"
import Menu from "@/Components/Menu/Menu"
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

// Define the props type for the Home component
type HomeProps = {
  searchParams: {
    page?: string;
    cat?: string;
  };
};

export default async function Home({ searchParams }: HomeProps) {
  const page = parseInt(searchParams.page || '1', 10);
  const cat = searchParams.cat;
  const session = await getServerSession(authOptions);
  
  if (!session) {
    redirect("/login");
  }

  return (
    <>
      <Featured />
      <CategoryList />
      <div className="flex flex-col lg:flex-row gap-[50px] mt-[1.2rem] w-full">
        <div className="w-[100%] lg:w-[75%]"><CardList cat={cat} page={page}/></div>
        <div className="w-[100%] lg:w-[25%]"><Menu /></div>
      </div>
    </>
  );
}