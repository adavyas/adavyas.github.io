import { AsciiArt } from "@/components/ascii-art"

export function ProjectsSection() {
  return (
    <div className="space-y-4">
      <AsciiArt art="projects" />

      <div className="space-y-6">
        
        <div className="p-3 border border-primary/20 rounded bg-primary/5">
          <h3 className="text-primary font-bold">SmartStride</h3>
          <pre className="text-xs my-2 text-muted-foreground">
            {`
  +-------------+     +----------------+     +----------------+
  | LiDAR       |---->| SLAM           |---->| Obstacle       |
  | Sensors     |     | Processing     |     | Detection      |
  +-------------+     +----------------+     +----------------+
        |                    |                      |
        v                    v                      v
  +-------------+     +--------------+     +----------------+
  | Haptic      |     | Audio        |     | Navigation     |
  | Feedback    |     | Guidance     |     | Assistance     |
  +-------------+     +--------------+     +----------------+
`}
          </pre>
          <p className="text-sm mb-2">
            Patent-pending smart cane for the visually impaired using LiDAR and SLAM technology to provide real-time
            obstacle detection, navigation assistance, and environmental awareness through haptic and audio feedback.
          </p>
          <p className="text-xs text-muted-foreground mb-2">
            Technologies: C++, ROS2, LiDAR, SLAM, Embedded Systems, 3D Printing
          </p>
        </div>

        <div className="p-3 border border-primary/20 rounded bg-primary/5">
          <h3 className="text-primary font-bold">RFX Sports</h3>
          <pre className="text-xs my-2 text-muted-foreground">
            {`
  +-------------+     +----------------+     +----------------+
  | Computer    |---->| CV Model       |---->| RAG System     |
  | Vision      |     | Processing     |     | Analysis       |
  +-------------+     +----------------+     +----------------+
        |                    |                      |
        |                    v                      |
        |             +--------------+              |
        +------------>| Player       |<-------------+
                      | Performance  |
                      | Analytics    |
                      +--------------+
                             |
                             v
                      +---------------+
                      | Scouting      |
                      | Report        |
                      +---------------+
`}
          </pre>
          <p className="text-sm mb-2">
            AI scouting platform for NCAA D1 football, integrating computer vision and retrieval augmented generation to
            analyze player performance and generate comprehensive scouting reports.
          </p>
          <p className="text-xs text-muted-foreground mb-2">
            Technologies: Python, OpenCV, PyTorch, FastAPI, React, ChromaDB
          </p>
        </div>




        

        <div className="p-3 border border-primary/20 rounded bg-primary/5">
          <h3 className="text-primary font-bold">Lotus</h3>
          <pre className="text-xs my-2 text-muted-foreground">
            {`
  +-------------+     +----------------+     +----------------+
  | React       |---->| Node.js        |---->| MongoDB        |
  | Frontend    |     | Backend        |     | Database       |
  +-------------+     +----------------+     +----------------+
        |                    |                      |
        v                    v                      v
  +-------------+     +--------------+     +----------------+
  | Multilingual|     | Resource     |     | Community      |
  | Support     |     | Directory    |     | Forum          |
  +-------------+     +--------------+     +----------------+
`}
          </pre>
          <p className="text-sm mb-2">
            Hackathon-winning website helping Chinatown SF residents access community resources, government services,
            and healthcare information in multiple languages, with a focus on elderly and low-income residents.
          </p>
          <p className="text-xs text-muted-foreground mb-2">
            Technologies: React, Node.js, MongoDB, i18n, Google Maps API
          </p>
        </div>
        <div className="p-3 border border-primary/20 rounded bg-primary/5">
          <h3 className="text-primary font-bold">Epsilon</h3>
          <pre className="text-xs my-2 text-muted-foreground">
            {`
  +-------------+     +----------------+     +----------------+
  | Embedded    |---->| Automation     |---->| Manufacturing  |
  | Systems     |     | Control        |     | Process        |
  +-------------+     +----------------+     +----------------+
        |                    |                      |
        v                    v                      v
  +-------------+     +--------------+     +----------------+
  | Sensor      |     | Data         |     | Quality        |
  | Network     |     | Analytics    |     | Control        |
  +-------------+     +--------------+     +----------------+
`}
          </pre>
          <p className="text-sm mb-2">
            The next best thing: Automation manufacturing startup using embedded systems and Python to streamline production processes,
            decrease production const, improve quality control, and speed up deployment via real-time monitoring and analytics.
          </p>
          <p className="text-xs text-muted-foreground mb-2">
            Technologies: Python, C++, CUDA, Embedded Systems, IoT, Data Analytics, Machine Learning, ROS
          </p>
        </div>



      </div>
    </div>
  )
}
