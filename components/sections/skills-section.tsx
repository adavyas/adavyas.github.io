import { AsciiArt } from "@/components/ascii-art"

export function SkillsSection() {
  return (
    <div className="space-y-4">
      <AsciiArt art="skills" />

      <div className="space-y-6">
        <div>
          <h3 className="text-primary font-bold mb-2">Programming Languages</h3>
          <div className="space-y-2">
            <SkillBar name="C/C++" percentage={90} />
            <SkillBar name="Python" percentage={95} />
            <SkillBar name="JavaScript/TypeScript" percentage={85} />
            <SkillBar name="Java" percentage={80} />
            <SkillBar name="Ruby" percentage={75} />
            <SkillBar name="HTML/CSS" percentage={85} />
            <SkillBar name="SQL" percentage={80} />
            <SkillBar name="LaTeX" percentage={70} />
          </div>
        </div>

        <div>
          <h3 className="text-primary font-bold mb-2">Tools & Technologies</h3>
          <div className="space-y-2">
            <SkillBar name="CUDA" percentage={75} />
            <SkillBar name="Git/GitHub" percentage={90} />
            <SkillBar name="ROS2" percentage={80} />
            <SkillBar name="VS Code" percentage={95} />
            <SkillBar name="MongoDB" percentage={85} />
            <SkillBar name="ChromaDB" percentage={80} />
            <SkillBar name="Supabase" percentage={85} />
            <SkillBar name="Docker" percentage={80} />
            <SkillBar name="OpenCV" percentage={85} />
          </div>
        </div>

        <div>
          <h3 className="text-primary font-bold mb-2">Frameworks</h3>
          <div className="space-y-2">
            <SkillBar name="React" percentage={90} />
            <SkillBar name="Node.js" percentage={85} />
            <SkillBar name="Flask" percentage={80} />
            <SkillBar name="Django" percentage={75} />
            <SkillBar name="Rails" percentage={70} />
            <SkillBar name="FastAPI" percentage={85} />
          </div>
        </div>

        <div>
          <h3 className="text-primary font-bold mb-2">AI & Machine Learning</h3>
          <div className="space-y-2">
            <SkillBar name="Computer Vision" percentage={90} />
            <SkillBar name="Natural Language Processing" percentage={85} />
            <SkillBar name="Retrieval Augmented Generation" percentage={80} />
            <SkillBar name="TensorFlow/PyTorch" percentage={85} />
            <SkillBar name="Scikit-learn" percentage={90} />
          </div>
        </div>

        <div>
          <h3 className="text-primary font-bold mb-2">Cybersecurity</h3>
          <div className="space-y-2">
            <SkillBar name="Network Security" percentage={80} />
            <SkillBar name="Penetration Testing" percentage={75} />
            <SkillBar name="Security Auditing" percentage={70} />
            <SkillBar name="Cryptography" percentage={75} />
          </div>
        </div>
      </div>
    </div>
  )
}

function SkillBar({ name, percentage }: { name: string; percentage: number }) {
  return (
    <div>
      <div className="flex justify-between text-xs mb-1">
        <span>{name}</span>
        <span>{percentage}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-primary rounded-full"
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={percentage}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${name} skill level: ${percentage}%`}
        />
      </div>
    </div>
  )
}
