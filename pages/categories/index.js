import config from "@config/config.json";
import Base from "@layouts/Baseof";
import { getTaxonomy } from "@lib/taxonomyParser";
import { humanize, markdownify } from "@lib/utils/textConverter";
import Link from "next/link";
const { blog_folder } = config.settings;
import { getSinglePage } from "@lib/contentParser";
import { FaFolder } from "react-icons/fa";
import { slugify } from "@lib/utils/textConverter";

const Categories = ({ categories }) => {
  return (
    <Base title={"categories"}>
      <section className="pt-0 section">
        {markdownify(
          "Categories",
          "h1",
          "h2 mb-16 bg-theme-light dark:bg-darkmode-theme-dark py-12 text-center lg:text-[55px]"
        )}
        <div className="container pt-12 text-center">
          <ul className="row">
            {categories.map((category, i) => (
              <li
                key={`category-${i}`}
                className="block mt-4 lg:col-4 xl:col-3"
              >
                <Link
                  href={`/categories/${category.name}`}
                  className="flex items-center justify-center w-full px-4 py-4 font-bold transition rounded-lg bg-theme-light text-dark hover:bg-purple-600 hover:text-white dark:bg-darkmode-theme-dark dark:text-darkmode-light dark:hover:bg-purple-600 dark:hover:text-white"
                >
                  <FaFolder className="mr-1.5" />
                  {humanize(category.name)} ({category.posts})
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Base>
  );
};

export default Categories;

export const getStaticProps = () => {
  const posts = getSinglePage(`content/${blog_folder}`);
  const categories = getTaxonomy(`content/${blog_folder}`, "categories");
  const categoriesWithPostsCount = categories.map((category) => {
    const filteredPosts = posts.filter((post) =>
      post.frontmatter.categories.map(e => slugify(e)).includes(category)
    );
    return {
      name: category,
      posts: filteredPosts.length,
    };
  });
  return {
    props: {
      categories: categoriesWithPostsCount,
    },
  };
};
