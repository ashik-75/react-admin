import { Eye, MessageCircle, Share } from "lucide-react";
import { BlogType } from "../../../types";
import { fDate } from "../../../utils/formatDate";
import BlogDropdownMenu from "./blog-dropdown-menu";

function BlogCard({
  title,
  image,
  author,
  comment,
  createdAt,
  favourite,
  share,
  view,
  status,
}: BlogType) {
  return (
    <div className="grid grid-cols-1 gap-5 rounded-lg border bg-slate-900 p-3 sm:grid-cols-3">
      <div className="col-span-2 space-y-2">
        <div className="flex justify-between">
          <p
            className={`flex items-center justify-center rounded-full  px-2 py-1 text-xs font-medium ${
              status === "draft"
                ? "bg-slate-900"
                : "bg-green-800/30 text-green-300"
            }`}
          >
            {status}
          </p>

          <span className="text-xs">{fDate(createdAt)}</span>
        </div>
        <h1>{title}</h1>
        <p className="text-sm text-slate-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, dignissimos nam?
        </p>

        <div className="flex items-center justify-between">
          <BlogDropdownMenu />

          <div className="flex gap-5">
            <div className="flex gap-1">
              <MessageCircle className="h-3.5 w-3.5 text-muted-foreground" />
              <span className="text-xs">{comment}k</span>
            </div>

            <div className="flex gap-1">
              <Eye className="h-3.5 w-3.5 text-muted-foreground" />
              <span className="text-xs">{view}k</span>
            </div>
            <div className="flex gap-1">
              <Share className="h-3.5 w-3.5 text-muted-foreground" />
              <span className="text-xs">{share}k</span>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-[200px]">
        <img
          src={image}
          className="h-full w-full rounded-xl bg-slate-500 object-cover backdrop-blur-xl"
          alt=""
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default BlogCard;