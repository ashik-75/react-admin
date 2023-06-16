function CardHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div>
      <h1 className="text-lg font-bold">{title}</h1>
      {subtitle && <p className="mt-1 text-zinc-600">{subtitle}</p>}
    </div>
  );
}

export default CardHeader;
