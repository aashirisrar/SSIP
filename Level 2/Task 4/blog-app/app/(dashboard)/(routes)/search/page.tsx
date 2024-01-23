import { SearchPost } from "@/components/blog-search";

const SearchPage = () => {
  return (
    <section className="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
      <div className="text-4xl font-semibold my-6">Search Posts</div>
      <SearchPost />
    </section>
  );
};

export default SearchPage;
