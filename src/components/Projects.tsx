import { useState, useEffect } from "react"
import { MathJax, MathJaxContext } from "better-react-mathjax"

// Define projects with JSX content (text, images, MathJax)
const projects = [
  {
    title: "Longhorn Racing Electric",
    image: "src/assets/lre.png",
    content: (
      <>
        <p>
          Led vehicle modeling, suspension, and dynamics development for UT
          Austin's Formula SAE electric team.
        </p>

        <p>
          Inline math example: $E = mc^2$ and block example:
        </p>

        <p>$$F = ma$$</p>

        <img
          src="src/assets/lre_extra.png"
          alt="LRE Example"
          className="w-full rounded-xl my-4"
        />

        <p>More text and analysis here...</p>
      </>
    ),
  },
  {
    title: "Vehicle Dynamics Tools",
    image: "src/assets/dynamics.png",
    content: (
      <>
        <p>
          Built high-fidelity simulation tools for handling and stability
          analysis. Inline: $\\tau = J \\alpha$, block:
        </p>
        <p>$$\\tau = I \\alpha$$</p>
        <img
          src="src/assets/dynamics_plot.png"
          alt="Dynamics Plot"
          className="w-full rounded-xl my-4"
        />
      </>
    ),
  },
  {
    title: "Automation & CI/CD",
    image: "src/assets/automation.png",
    content: (
      <>
        <p>
          Implemented regression test frameworks, automated data/meshing workflows,
          and containerized development environments.
        </p>
        <img
          src="src/assets/automation_workflow.png"
          alt="Automation Workflow"
          className="w-full rounded-xl my-4"
        />
      </>
    ),
  },
]

const ProjectOverlay = ({ project, onClose }) => {
  if (!project) return null

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-center items-center p-4"
      onClick={onClose} // click outside closes
    >
      <div
        className="bg-light text-dark rounded-2xl shadow-lg w-full max-w-4xl h-full max-h-[90vh] overflow-y-auto p-6 relative cursor-default"
        onClick={(e) => e.stopPropagation()} // clicking inside does NOT close
      >
        <button
          className="absolute top-4 right-4 text-dark hover:text-brand"
          onClick={onClose}
        >
          ✕
        </button>

        <h2 className="text-3xl font-bold mb-4">{project.title}</h2>

        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover rounded-xl mb-4"
        />

        <MathJaxContext
          config={{
            tex: {
              inlineMath: [['$', '$'], ['\\(', '\\)']],
              displayMath: [['$$', '$$'], ['\\[', '\\]']],
            },
          }}
        >
          <MathJax dynamic>
            <div className="prose max-w-none">{project.content}</div>
          </MathJax>
        </MathJaxContext>
      </div>
    </div>
  )
}

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null)

  // Close overlay on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveProject(null)
    }

    if (activeProject) window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [activeProject])

  return (
    <section id="projects" className="py-12 px-6 md:px-12 bg-light">
      <h2 className="text-4xl font-bold mb-8 text-center text-dark">Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-white text-dark rounded-xl shadow hover:scale-105 transition transform cursor-pointer overflow-hidden"
            onClick={() => setActiveProject(project)}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{project.title}</h3>
            </div>
          </div>
        ))}
      </div>

      <ProjectOverlay
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  )
}

export default Projects
