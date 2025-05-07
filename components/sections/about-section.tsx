import { AsciiArt } from "@/components/ascii-art"
import { AsciiPortraitComparison } from "@/components/ascii-portrait-comparison"

export function AboutSection() {
  return (
    <div className="space-y-12">
      <AsciiArt art="about" />

      <div className="flex flex-col md:flex-row gap-7">
        <div className="md:w-2/5">
          <AsciiPortraitComparison />
          <div className="text-center text-xs text-muted-foreground mt-2">
            Adavya Sharma
            <br />
            <span className="text-primary/60">Founder & Developer</span>
          </div>
        </div>

        <div className="space-y-10 md:w-3/5">
          <p>
            What's up. I'm Adavya Sharma, a relentless hunter for the next big thing to bring the future ever so closer.
          </p>

          <p>
 
          </p>

          <div className="mt-2 p-3 border border-primary/20 rounded bg-primary/5">
            <h3 className="text-primary font-bold mb-2">Personal Bio:</h3>
            <div className="space-y-2 text-sm">
              <p>
                As a person: I'm driven by the urge to change how consumers and businesses think.
                As a species: We should innovate and become a type 1 civilization: Never stop creating.
              </p>
              <p>
                     
              </p>


              <p>

                In my free time, I love listening to music, going on night walks with friends, and exploring new coffee
                shops around the Bay Area.
                
              </p>

              <p>
                I believe in the power of technology to create positive change, which is why I've worked on several project
                that empower people with disabilities or improve access to resources for underserved
                communities.
              </p>
            </div>
          </div>

          <p>
            Currently, I'm working to reshape manufacturing into a more adaptive, 
            automated ecosystem that not only empowers big tech, but also emerging startups.
          </p>

          <div className="mt-2 p-3 border border-primary/20 rounded bg-primary/5">
            <h3 className="text-primary font-bold mb-2">Quick Facts:</h3>
            <ul className="space-y-1">
              <li>
                <span className="text-muted-foreground">Location:</span> San Francisco, CA
              </li>
              
              <li>
                <span className="text-muted-foreground">Specialty:</span> AI, Computer Vision, Robotics, Full-Stack Development
              </li>
              <li>
                <span className="text-muted-foreground">Interests:</span> Future, Tech, New shit
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
