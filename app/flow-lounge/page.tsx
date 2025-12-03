
export default function FlowLounge() {
  return (
    <div className="grid grid-cols-12 gap-1 md:gap-2 lg:gap-4">
      {/* Large image container spanning all columns */}
      <div className="col-span-12 aspect-[1920/1080] bg-accent/30"></div>
      <div className="col-span-6 aspect-[1080/1920] bg-accent/30"></div>
      <div className="col-span-6 aspect-[1080/1920] bg-accent/30"></div>

      {/* Description section */}

      <div className="col-span-12 border-t border-foreground mt-8 md:mt-16 lg:mt-16 mb-2 md:mb-4 lg:md-8"></div>

      <div className="col-span-12 md:col-span-9 text-lg md:text-3xl lg:text-3xl font-tinos tracking-tighter">
        Flow Lounge, under the curation and signature of Titto Peronetti,
        presents a comprehensive service designed for restaurants, hotels,
        enterprises, and private events.
        <br />
        <br />
        The new Flow Lounge website and visual identity embody an evolution of
        design and digital storytelling. Shaped by years of expertise, global
        recognition, and a profound connection to modern hookah culture.
      </div>

      <div className="col-span-12 border-none border-foreground mt-8 md:mt-0 mb-2 md:mb-4 lg:mb-8"></div>

      <div className="col-span-6 col-start-1 md:col-start-1 md:col-span-2 flex flex-col items-start text-start mt-4 md:mt-0">
        <div className="flex flex-col text- md:text-xl text-accent">
          <div className="text-lg md:text-xl text-foreground font-medium">
            My Role
          </div>
          <div>Web Design</div>
          <div>Brand Collateral</div>
          <div>Digital Media</div>
        </div>
      </div>
      <div className="col-span-6 col-start-7 md:col-start-3 md:col-span-2 flex flex-col items-start text-start mt-4 md:mt-0">
        <div className="flex flex-col text- md:text-xl text-accent">
          <div className="text-lg md:text-xl text-foreground font-medium">
            Collaborators
          </div>
          <div>Titto Peronetti</div>
        </div>
      </div>

      <a
        href="https://flowlounge.gr"
        target="_blank"
        className="size-fit btn-primary col-span-6 md:col-start-1 md:col-span-4 text-lg md:text-xl text-foreground font-medium mt-16 md:mt-8"
      >
        View Website
      </a>
      <div className="col-span-12 border-t border-foreground mt-2 md:mt-0"></div>
    </div>
  );
}
