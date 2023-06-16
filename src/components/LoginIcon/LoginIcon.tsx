function LoginIcon({ url }: { url: string }) {
  return (
    <button className="flex w-full items-center justify-center rounded-lg border border-zinc-200 py-3 duration-300 ease-in-out hover:border-zinc-400">
      <img className="h-8 w-8" src={url} alt="" />
    </button>
  );
}

export default LoginIcon;
