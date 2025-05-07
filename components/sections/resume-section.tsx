import { AsciiArt } from "@/components/ascii-art"

export function ResumeSection() {
  return (
    <div className="space-y-4">
      <AsciiArt art="resume" />

      <div className="space-y-6">
        <div className="p-3 border border-primary/20 rounded bg-primary/5">
          <h3 className="text-primary font-bold">Resume</h3>
          <div className="mt-2">
            <p className="text-sm">San Jose State University</p>
            <p className="text-sm">B.S. Computer Science + Mathematics</p>
            <p className="text-xs text-muted-foreground">Expected Dec 2027</p>
          </div>

          <div className="mt-4">
            <h4 className="text-sm font-semibold">Relevant Coursework:</h4>
            <ul className="text-xs mt-1 space-y-1 list-disc pl-4">
              <li>Data Structures & Algorithms</li>
              <li>Computer Architecture</li>
              <li>Discrete Mathematics & Probability</li>
              <li>Designing Information Devices & Systems</li>
              <li>Structure & Interpretation of Computer Programs</li>
              <li>Linear Algebra & Differential Equations</li>
            </ul>
          </div>
        </div>

        <div className="p-3 border border-primary/20 rounded bg-primary/5">
          <h3 className="text-primary font-bold">Skills</h3>
          <div className="mt-2">
            <h4 className="text-sm font-semibold">Languages:</h4>
            <p className="text-xs">C/C++, Python, Ruby, Java, JavaScript/TypeScript, HTML/CSS, SQL, LaTeX</p>

            <h4 className="text-sm font-semibold mt-2">Tools:</h4>
            <p className="text-xs">CUDA, Solidworks, MPS, , Autodesk, ROS2, MongoDB, ChromaDB, Supabase, Docker, OpenCV, Git/GitHub </p>

            <h4 className="text-sm font-semibold mt-2">Frameworks:</h4>
            <p className="text-xs">Django, Flask, Node.js, Rails, FastAPI, React </p>
          </div>
        </div>

        <div className="p-3 border border-primary/20 rounded bg-primary/5">
          <h3 className="text-primary font-bold">Activities</h3>
          <ul className="text-xs mt-1 space-y-2 list-disc pl-4">
          
            <li>
              <span className="font-semibold">Machine Learning @ Riverside</span> - Collaborating on ML mosquito-borne disease research
            </li>
            <li>
              <span className="font-semibold">Boost Robotics</span> - Introducing youth/minorities to STEM via 1000+ participant events
              real-world problems
            </li>
            <li>
              <span className="font-semibold">Tri-Valley Hackathon</span> - Participating in and organizing hackathons
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
