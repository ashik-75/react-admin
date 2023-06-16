import { Link } from "react-router-dom";

function Page404() {
  return (
    <div className="flex min-h-[calc(100vh-200px)] items-center justify-center">
      <div className="max-w-md">
        <h1 className="text-3xl font-bold text-zinc-700">
          Sorry, page not found!
        </h1>

        <p className="text-zinc-600">
          Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve
          mistyped the URL? Be sure to check your spelling.
        </p>
        <div className="mt-10">
          <img className="" src="/assets/illustration/404.svg" alt="" />
        </div>
        <div className="mt-10 block  text-center">
          <Link
            to={"/dashboard"}
            className="rounded-lg bg-blue-700 px-4 py-3 font-bold text-white"
          >
            Go To Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Page404;
