export default function SectionTitle({ title }: { title: string }) {
  return (
    <div className="flex flex-row items-center justify-start gap-4 pb-[2rem]">
      {/*<div className="w-full h-[1px] bg-gradient-to-r from-foreground/0 to-foreground/100"></div>*/}
      <div className="font-medium text-center">{title}</div>
      {/*<div className="w-full h-[1px] bg-gradient-to-l from-foreground/0 to-foreground/100"></div>*/}
    </div>
  );
}
