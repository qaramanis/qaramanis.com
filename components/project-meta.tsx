interface ProjectMetaProps {
  label: string;
  items: string[];
  className?: string;
}

export default function ProjectMeta({
  label,
  items,
  className = "col-span-6 col-start-1 md:col-start-1 md:col-span-2",
}: ProjectMetaProps) {
  return (
    <div
      className={`${className} flex flex-col items-start text-start mt-4 md:mt-0`}
    >
      <div className="flex flex-col md:text-xl text-accent">
        <div className="text-lg md:text-xl text-foreground font-medium">
          {label}
        </div>
        {items.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </div>
    </div>
  );
}
