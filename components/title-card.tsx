export type TitleCardProps = {
  title?: string;
  description?: string;
  date?: string;
};

export default function TitleCard({
  title,
  description,
  date,
}: TitleCardProps) {
  return (
    <div className="pt-[1rem] bg-background">
      <div className="flex flex-col justify-between border-b border-[#666666] hover:border-foreground relative overflow-hidden group transition-all duration-500 ease-out">
        <div className="flex flex-row justify-between">
          <div>{title}</div>
          <div className="text-[#555555]">{date}</div>
        </div>
        <p className="text-[#555555] truncate mb-1">{description}</p>
        <div className="absolute bottom-0 left-0 h-[0.75px] bg-foreground w-0 group-hover:w-full transition-all duration-500 ease-in-out" />
      </div>
    </div>
  );
}
