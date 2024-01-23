import Link from "next/link";

const DashboardMenu = () => {
  return (
    <div className="flex flex-col gap-3 text-lg font-medium text-primary-foreground text-center items-center p-2 mt-4">
      <Link href="/newpost" className="p-5 rounded-lg w-full bg-primary">
        Create New Post
      </Link>
      <Link href="/posts" className="p-5 rounded-lg w-full bg-primary">
        View All Posts
      </Link>
      <Link href="/search" className="p-5 rounded-lg w-full bg-primary">
        Search Posts
      </Link>
    </div>
  );
};

export default DashboardMenu;
