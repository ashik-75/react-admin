import blogs from "../../../_mock/blogs";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../components/ui/tabs";
import { BlogType } from "../../../types";
import BlogCard from "./blog-card";

function BlogList() {
  return (
    <>
      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="published">Published</TabsTrigger>
          <TabsTrigger value="draft">Draft</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <List list={blogs} />
        </TabsContent>
        <TabsContent value="published">
          <List list={blogs.filter((b) => b.status === "published")} />
        </TabsContent>
        <TabsContent value="draft">
          <List list={blogs.filter((b) => b.status === "draft")} />
        </TabsContent>
      </Tabs>
    </>
  );
}

export default BlogList;

function List({ list }: { list: BlogType[] }) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 ">
      {list.map((blog) => (
        <BlogCard key={blog.id} {...blog} />
      ))}
    </div>
  );
}
