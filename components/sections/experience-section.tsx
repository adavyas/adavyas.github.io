import { AsciiArt } from "@/components/ascii-art"

export function ExperienceSection() {
  return (
    <div className="space-y-4">
      <AsciiArt art="experience" />

      <div className="space-y-6">
        

        <div className="relative pl-5 border-l border-primary/30">
          <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6.5px] top-1" />
          <div className="mb-1">
            <h3 className="text-primary font-bold">Gael Force Robotics</h3>
            <p className="text-xs text-muted-foreground">Team Captain | September 2021 - May 2024</p>
          </div>
          <ul className="text-sm space-y-1 list-disc pl-4">
            <li>Led a team of 25 students in designing, building, and programming competition robots</li>
            <li>Managed project timelines, resource allocation, and team coordination</li>
            <li>Implemented computer vision and autonomous navigation systems using Python and C++</li>
            <li>Achieved 1st place in regional competitions and qualified for international championships</li>
          </ul>
        </div>

        <div className="relative pl-5 border-l border-primary/30">
          <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6.5px] top-1" />
          <div className="mb-1">
            <h3 className="text-primary font-bold">CompuChild</h3>
            <p className="text-xs text-muted-foreground">CAD Instructor | May 2024 - August 2024</p>
          </div>
          <ul className="text-sm space-y-1 list-disc pl-4">
            <li>Taught CAD fundamentals to elementary and middle school students</li>
            <li>Developed curriculum for OnShape, Fusion 360, and basic robotics courses</li>
            <li>Mentored students in problem-solving and computational thinking</li>
            <li>Organized and led coding competitions and showcase events</li>
          </ul>
        </div>

        <div className="relative pl-5 border-l border-primary/30">
          <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6.5px] top-1" />
          <div className="mb-1">
            <h3 className="text-primary font-bold">UC Riverside Research</h3>
            <p className="text-xs text-muted-foreground">Research Assistant | June 2023 - Present</p>
          </div>
          <ul className="text-sm space-y-1 list-disc pl-4">
            <li>Conducted research on computer vision algorithms for mosquito-borne disease localization`</li>
            <li>Developed Google Maps API with MongoDB data for real-time heat mapping and origin tracking</li>
            <li>Implemented and tested various user input techniques to improve accuracy and reliability</li>
            <li>Co-authoring a research paper on efficient disease mitigation via resource-constrained devices</li>
          </ul>
        </div>

        <div className="relative pl-5 border-l border-primary/30">
          <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6.5px] top-1" />
          <div className="mb-1">
            <h3 className="text-primary font-bold">SmartStride</h3>
            <p className="text-xs text-muted-foreground">Co-Founder & CEO | March 2022 - November 2024</p>
          </div>
          <ul className="text-sm space-y-1 list-disc pl-4">
            <li>Developed patent-pending LiDAR/SLAM-based smart cane for the visually impaired</li>
            <li>Led a team of 4 engineers to design and prototype the hardware and software components</li>
            <li>Implemented real-time obstacle detection and navigation assistance algorithms</li>
            <li>Secured $15,000 in initial funding through pitch competitions and grants</li>
          </ul>
        </div>

        
      </div>
    </div>
  )
}
