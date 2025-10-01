// src/components/Projects.tsx
import { useState, useEffect, ReactNode } from "react"
import { MathJax, MathJaxContext } from "better-react-mathjax"

// --- Types ---
interface Project {
  title: string
  image: string
  content: ReactNode
}

interface ProjectOverlayProps {
  project: Project | null
  onClose: () => void
}

// --- Define projects with JSX content ---
const projects: Project[] = [
{
  title: "Constrained Nonlinear Optimization",
  image: "./images/constrained_nonlinear_optimization.jpg",
  content: (
    <>
      <p>
        I've worked on several constrained nonlinear optimization problems, but I'll focus here on tire modeling using the industry-standard Pacejka 
        "Magic Formula" (MF6.2) model.
      </p>
      <br/>
      <p>
        Tire behavior is highly nonlinear and difficult to model from first principles. Instead, MF models empirically capture observed input-output 
        relationships using parameterized equations. This makes them extremely powerful for working with tire data—allowing full characterization by 
        fitting experimental measurements to the model.
      </p>
      <br/>
      <p>
        Combined loading MF models can involve over 80 fitted parameters. To illustrate the complexity, here are the parameterized equations 
        for longitudinal force generation:
      </p>
      <br/>
      <MathJax>
        {"$F_{x} = F_{x0}(\\kappa, F_{z}, \\gamma)$"}
      </MathJax>
      <MathJax>
        {"$F_{x0} = D_{x} \\sin \\left( C_{x} \\arctan \\left[ B_{x} \\kappa_{x} - E_{x} (B_{x} \\kappa_{x} - \\arctan(B_{x} \\kappa_{x})) \\right] \\right) + S_{Vx}$"}
      </MathJax>
      <MathJax>
        {"$\\kappa_{x} = \\kappa + S_{Hx}$"}
      </MathJax>
      <MathJax>
        {"$\\gamma_{x} = \\gamma \\cdot \\lambda_{\\gamma x}$"}
      </MathJax>
      <br/>
      <p>Supporting coefficients include:</p>
      <br/>
      <MathJax>
        {"$C_{x} = p_{Cx1} \\cdot \\lambda_{Cx}$"}
      </MathJax>
      <MathJax>
        {"$D_{x} = \\mu_{x} \\cdot F_{z}$"}
      </MathJax>
      <MathJax>
        {"$\\mu_{x} = (p_{Dx1} + p_{Dx2} df_{z})(1 - p_{Dx3} \\cdot \\gamma^{2}) \\cdot \\lambda_{\\mu x}$"}
      </MathJax>
      <MathJax>
        {"$E_{x} = (p_{Ex1} + p_{Ex2} df_{z} + p_{Ex3} df_{z}^{2})(1 - p_{Ex4} \\cdot \\text{sgn}(\\kappa_{x})) \\cdot \\lambda_{Ex}, \\quad E_{x} \\le 1$"}
      </MathJax>
      <br/>
      <p>And the longitudinal slip stiffness:</p>
      <br/>
      <MathJax>
        {"$K_{x} = F_{z}(p_{Kx1} + p_{Kx2} df_{z}) \\cdot \\exp(p_{Kx3} df_{z}) \\cdot \\lambda_{Kx}$"}
      </MathJax>
      <MathJax>
        {"$B_{x} = K_{x} / (C_{x} D_{x})$"}
      </MathJax>
      <MathJax>
        {"$S_{Hx} = (p_{Hx1} + p_{Hx2} df_{z}) \\cdot \\lambda_{Vx} \\cdot \\lambda_{\\mu x}$"}
      </MathJax>
      <br/>
      <p>
        These equations define the longitudinal force \(F_x\). Similarly complex systems exist for lateral force (\(F_y\)) and aligning moments 
        (\(M_x, M_y, M_z\)). Even selecting initial guesses that maintain \(C^1\) continuity can be challenging due to the system's strong nonlinearity.
      </p>
      <br/>
      <p>
        I approached parameter identification as a constrained nonlinear optimization problem, with an objective function:
      </p>
      <br/>
      <MathJax>
        {"$f(x): \\mathbb{R}^{n} \\rightarrow \\mathbb{R}$"}
      </MathJax>
      <br/>
      <p>
        Developing meaningful constraints was a key part of the process. I systematically sampled input vectors \(x\) to evaluate model smoothness, 
        continuity, and sign convention. From there, I derived lumped parameter bounds to preserve these behaviors. By breaking these into isolated 
        constraints, I enabled constrained optimization solvers to efficiently converge on valid solutions.
      </p>
      <br/>
      <p>
        My objective function decomposed the system into independent nonlinear subsystems, which I optimized in isolation before reintegrating them. 
        I also computed gradients and Hessians to help identify and isolate the least sensitive parameters—making optimization more robust and 
        interpretable.
      </p>
      <br/>
      <p>Here are some fit results for pure and combined slip conditions:</p>
      <img
        src="images/pure_tire_fits.jpg"
        alt="Pure tire fits"
        className="w-full rounded-xl my-4"
      />
      <img
        src="images/combined_tire_fits.jpg"
        alt="Combined tire fits"
        className="w-full rounded-xl my-4"
      />
      <p>And corresponding friction ellipse visualizations:</p>
      <img
        src="images/friction_ellipses.jpg"
        alt="Friction ellipses"
        className="w-full rounded-xl my-4"
      />
      <br/>
      <p>
        Notably, combined loading data does not currently exist for the tires fitted here. Instead, I used full datasets from similar tires 
        to analyze the effect of geometry, size, and mounting on tire behavior. Based on that, I derived feasible MF parameters for untested 
        conditions. If these tires are tested in the future, I look forward to comparing the "virtual" predictions to the measured results.
      </p>
      <br/>
      <p>
        One final observation: the asymmetry seen in the friction ellipses is typically caused by toe conicity and ply steer. While I removed these 
        effects in later analyses, it was valuable to capture them during the fitting process—they provide useful insight into tire construction and behavior.
      </p>
      <br/>
      <p>
        I'll continue updating this page as I develop new solutions and refine my approach to solving these large, highly coupled nonlinear systems.
      </p>
    </>
    ),
  },
  {
    title: "Unconstrained Nonlinear Optimization",
    image: "./images/unconstrained_nonlinear_optimization.jpg",
    content: (
      <>
        <p>
          I wouldn't be an engineer if I didn't write my own optimization algorithms ;). For this reason, I've implemented a few unconstrained optimization
          algorithms to get a better understanding of the underlying math in my work using these tools. My implementation emulates the behavior of scipy.optimize,
          implementing steepest descent with Armijo backtracking, Newton's method with Armijo backtracking, and modified Newton with Armijo backtracking. The 
          following sections will cover my specific math background and understanding of the problem, then I'll show some results.
        </p>
        <br/>
        <p className="text-xl font-bold text-dark mb-4"> Armijo Backtracking </p>
        <p>
          Each of these algorithms incorporated Armijo Backtracking, so I'll do a quick explanation of this before proceeding. Armijo backtracking is a line search
          algorithm used to find step sizes that ensures sufficient decrease in the objective function. We can express this as:
        </p>
        <MathJax>
          {"$$f\\left( x + \\alpha d \\right) \\le f \\left( x \\right) + c \\alpha \\nabla f \\left( x \\right)^{\\intercal} d$$"}
        </MathJax>
        <p>
          Where alpha is the step size, d is the descent direction, and c is some constant in (0, 1). This is the Armijo condition, and before any step
          is taken in the optimization algorithm, a subroutine checks for validity of the Armijo condition, adjusting alpha as needed. This makes all
          of the subsequent algorithms much more robust.
        </p>
        <br/>
        <p className="text-xl font-bold text-dark mb-4"> Steepest Descent </p>
        <p>
          Steepest descent involves setting the step direction to the negative gradient at a desired function evaluation. This is one of the simplest approaches,
          but the rate of convergence heavily suffers.
        </p>
        <br/>
        <p className="text-xl font-bold text-dark mb-4"> Newton's Method </p>
        <p>
          Newton's Method improves upon Steepest Descent by incorporating second-order information from the Hessian matrix 
          <MathJax inline>{" \\( H(x) \\)"}</MathJax>. Instead of following just the gradient, we solve the Newton system:
        </p>

        <MathJax>{"\\[ H(x) d = -\\nabla f(x) \\]"}</MathJax>

        <p>
          This gives a step direction <MathJax inline>{"\\( d \\)"}</MathJax> that accounts for the local curvature of the objective function, 
          which significantly improves convergence near a minimum. The update rule becomes:
        </p>

        <MathJax>{"\\[ x_{k+1} = x_k + \\alpha d \\]"}</MathJax>

        <p>
          where <MathJax inline>{"\\( \\alpha \\)"}</MathJax> is determined using Armijo Backtracking. While Newton's Method converges 
          quadratically near the solution, it suffers if the Hessian is singular or not positive definite. In such cases, the computed 
          direction may not be a descent direction, and my implementation defaults to steepest descent.
        </p>

        <br />

        <p className="text-xl font-bold text-dark mb-4">Modified Newton with Cholesky</p>
        <p>
          To address the potential issues in standard Newton's Method, a modified version performs a 
          <strong> Cholesky factorization </strong> on the Hessian to ensure it is positive definite. Cholesky factorization requires the 
          matrix to be symmetric and positive definite:
        </p>

        <MathJax>{"\\[ H = L L^{\\intercal} \\]"}</MathJax>

        <p>
          If Cholesky fails, we can apply a regularization technique by modifying the Hessian:
        </p>

        <MathJax>{"\\[ H_{\\text{mod}} = H + \\mu I \\]"}</MathJax>

        <p>
          where <MathJax inline>{"\\( \\mu > 0 \\)"}</MathJax> is increased until the modified Hessian becomes positive definite and 
          Cholesky decomposition succeeds. This guarantees a valid descent direction and stabilizes the algorithm.
        </p>

        <p>
          Once the modified Hessian is factored, the system:
        </p>

        <MathJax>{"\\[ H_{\\text{mod}} d = -\\nabla f(x) \\]"}</MathJax>

        <p>
          is solved using forward and backward substitution through 
          <MathJax inline>{" \\( L \\)"}</MathJax> and <MathJax inline>{"\\( L^{\\intercal} \\)"}</MathJax>. The result is a reliable, 
          curvature-aware step direction used in the same update rule as before.
        </p>

        <br />
        <p className="text-xl font-bold text-dark mb-4">Interface</p>
        <p>
          After fully implementing these algorithms, I also set up a frontend to mimic behavior from scipy.optimize methods. A sample
          function call is shown below:
        </p>
        <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto my-4">
          <code>
            {"optim = Optimizer(func=rosenbrock, \n \
            \t  x0=x0, \n \
            \t  method=1, \n \
            \t  tol=1e-8, \n \
            \t  grad=rosenbrock_grad, \n \
            \t  h=1e-8, \n \
            \t  c1=10**-4, \n \
            \t  tau=0.5, \n \
            \t  niter=5000, \n \
            \t  max_time=10) \noptim_soln = Optimizer.solve()"}
          </code>
        </pre>

        <p className="text-xl font-bold text-dark mb-4">Results</p>

        <p> I then ran these algorithms on 10 test cases of varying complexity. These results are shown below: </p>
        
        <div className="overflow-x-auto my-6">
          <table className="min-w-full border border-gray-300 text-sm text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-4 border-b border-gray-300">Case</th>
                <th className="py-2 px-4 border-b border-gray-300">Method</th>
                <th className="py-2 px-4 border-b border-gray-300"># Iterations</th>
                <th className="py-2 px-4 border-b border-gray-300">Function Value</th>
                <th className="py-2 px-4 border-b border-gray-300">Time Taken (s)</th>
                <th className="py-2 px-4 border-b border-gray-300">Termination Reason</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["1", "Steepest Descent", 5000, "6.36e-8", 0.129, "Iteration limit"],
                ["1", "Newton", 21, "1.77e-13", 0.001, "Convergence"],
                ["1", "Modified Newton", 21, "1.77e-13", 0.002, "Convergence"],
                ["2", "Steepest Descent", 5000, "4.57e-6", 0.327, "Iteration limit"],
                ["2", "Newton", 30, "8.88e-12", 0.012, "Convergence"],
                ["2", "Modified Newton", 30, "8.88e-12", 0.012, "Convergence"],
                ["3", "Steepest Descent", 5000, "2.44e-5", 0.372, "Iteration limit"],
                ["3", "Newton", 20, "2.20e-13", 0.007, "Convergence"],
                ["3", "Modified Newton", 20, "2.20e-13", 0.008, "Convergence"],
                ["4", "Steepest Descent", 5000, "7.44e-6", 2.654, "Iteration limit"],
                ["4", "Newton", 163, "3.70e-13", 4.442, "Convergence"],
                ["4", "Modified Newton", 163, "3.70e-13", 4.321, "Convergence"],
                ["5", "Steepest Descent", 5000, "40.68", 2.598, "Iteration limit"],
                ["5", "Newton", 18, "6.63e-13", 0.485, "Convergence"],
                ["5", "Modified Newton", 18, "6.63e-13", 0.495, "Convergence"],
                ["6", "Steepest Descent", 1903, "965.47", 10.009, "Time limit"],
                ["6", "Newton", 3, "8731.25", 11.036, "Time limit"],
                ["6", "Modified Newton", 3, "8731.25", 11.842, "Time limit"],
                ["7", "Steepest Descent", 186, "9893.84", 10.048, "Time limit"],
                ["7", "Newton", 0, "4.01e6", 265.146, "Time limit"],
                ["7", "Modified Newton", 0, "4.01e6", 323.371, "Time limit"],
                ["8", "Steepest Descent", 648, "1.15e-13", 0.025, "Convergence"],
                ["8", "Newton", 15, "14.20", 0.003, "Convergence"],
                ["8", "Modified Newton", 12, "14.20", 0.005, "Convergence"],
                ["9", "Steepest Descent", 653, "2.32e-14", 0.031, "Convergence"],
                ["9", "Newton", 5, "14.20", 0.005, "Convergence"],
                ["9", "Modified Newton", 8, "2.00e-15", 0.001, "Convergence"],
                ["10", "Steepest Descent", 5000, "8.40e-5", 0.324, "Iteration limit"],
                ["10", "Newton", 20, "4.14e-9", 0.012, "Convergence"],
                ["10", "Modified Newton", 20, "4.14e-9", 0.010, "Convergence"],
              ].map(([caseNum, method, iter, fval, time, reason], idx) => (
                <tr key={idx} className={idx % 3 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="py-2 px-4 border-b border-gray-300 font-semibold">{caseNum}</td>
                  <td className="py-2 px-4 border-b border-gray-300">{method}</td>
                  <td className="py-2 px-4 border-b border-gray-300">{iter}</td>
                  <td className="py-2 px-4 border-b border-gray-300">{fval}</td>
                  <td className="py-2 px-4 border-b border-gray-300">{time}</td>
                  <td className="py-2 px-4 border-b border-gray-300">{reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mb-4">
          The results clearly demonstrate that Steepest Descent often struggles with slow convergence, frequently hitting the iteration limit without reaching
          an acceptable solution, especially on more challenging problems. In contrast, both Newton's Method and Modified Newton with Cholesky factorization
          converge significantly faster, typically within just a few dozen iterations. For my work, this means I can use steepest descent on simpler problems
          strictly because of the faster computation, but more advanced problems will usually require Newton's method or modified Newton due to performance alone.
        </p>

      </>
    ),
  },
  {
    title: "MBD Modeling",
    image: "./images/MBD_modeling.jpg",
    content: (
      <>
        <p className="text-xl font-bold text-dark mb-4"> MBD Model </p>
        <img
          src="./images/MBD_modeling.jpg"
          alt="Automation Workflow"
          className="w-1/2 mx-auto rounded-xl my-4"
        />
        <p>
          Most of my work in FSAE has involved modeling physical systems. On the modeling side, this meant developing different types of simulations and
          mathematical systems to inform design.
        </p>
        <br/>
        <p>
          <strong>What is an MBD Model?</strong><br />
          MBD stands for Multibody Dynamics. These systems involve multiple rigid or flexible bodies related by algebraic constraints at their interfaces.
          On the surface, this sounds very similar to a kinematic model, but solving for dynamics of the system involves writing differential equations
          governing the motion of each body. This shows that multibody dynamics leverages differential algebraic equations (DAEs) to create high-fidelity
          representations of real-life behavior.
        </p>
        <br />
        <p>
          <strong>How I Approached the Problem</strong><br />
          While working at Tesla, I wrote a lot of MBD sims using Modelica. Modelica is an open-source programming language that leverages symbolic
          manipulation to restructure systems in a solver-friendly format, and it's one of the golden standards for modeling complex, multi-energy-domain
          systems. Before compilation, Modelica code also gets flattened to xml and then translated to C, making it friendly with any C compiler and
          efficient from a computing perspective. With that said, I developed this system from the ground-up in Modelica. This involved writing the
          ground physics, physics for each rigid/flexible body on the car (wishbones, links, tires, frame), and an input scheme. This is still an ongoing
          project as I continue to add fidelity, but I've added a drop test below to show the power of DAEs in simulation:
        </p>
        <img
          src="./images/MBD_drop.gif"
          alt="Automation Workflow"
          className="w-1/2 mx-auto rounded-xl my-4"
        />

      </>
    ),
  },
  {
    title: "QSS Modeling",
    image: "./images/QSS_model.jpg",
    content: (
      <>
        <img
          src="./images/QSS_model.jpg"
          alt="Automation Workflow"
          className="w-1/2 mx-auto rounded-xl my-4"
        />
        <p>
          Most of my work in FSAE has involved modeling physical systems. On the modeling side, this meant developing different types of simulations and
          mathematical systems to inform design.
        </p>
        <br/>
        <p>
          <strong>What is QSS?</strong><br />
          QSS stands for quasi-steady-state. This refers to situations where a system operates close to some equilibrium point (not truly static, but the system evolves
          slowly enough that steady-state assumptions still apply). These models simplify analysis by assuming that at each point in time, the system is nearly in
          equilibrium, making it easier to characterize and understand complex behavior. In the context of vehicle design, most mechanical systems (like suspension
          or steering) are inherently stable. Springs and linkages apply restoring forces and torques which help bring the vehicle back to a resting configuration.
          Because of this stability, QSS modeling can be used to analyze the "envelope" of outputs a vehicle might experience under steady-state conditions.
        </p>
        <br />
        <p>
          <strong>How I Approached the Problem</strong><br />
          In a vehicle, drivers provide some control input to the system. The system then responds with slip generation at the tires, creating forces which then act
          back on the system and drive system dynamics. Knowing this, I defined control inputs as steer input and body slip at some fixed vehicle velocity or turn
          radius (I generate both for comprehensive results).
        </p>
        <br />
        <p>
          <strong>Solving the System</strong><br />
          From here, I derived the physics for vehicle limit behavior. In this formulation, some arbitrary state vector is mapped
          to force and torque residuals. In the steady-state case, these go to zero and it becomes a straightforward optimization problem.
          I typically sweep over a structured grid of steer and body slip inputs, and the result is essentially a performance envelope at
          the specified velocity. A sample of this is shown in the form of a yaw-moment diagram:
        </p>
          <img
            src="./images/YMD_results.jpg"
            alt="Automation Workflow"
            className="w-full mx-auto rounded-xl my-4"
          />
        <p>
          This already gives valuable information about vehicle characteristics, but I also generate multiple of these solutions at different velocities.
          With these, I characterize the effects of velocity on steady-state behavior. In general, this proves most useful at the limits of the performance
          envelope.
        </p>
          <img
            src="./images/QSS_across_vel.jpg"
            alt="Automation Workflow"
            className="w-full mx-auto rounded-xl my-4"
        />

      </>
    ),
  },
  {
    title: "Kinematic Modeling",
    image: "./images/kinematic_model.jpg",
    content: (
      <>
        <img
          src="./images/kinematic_model.jpg"
          alt="Automation Workflow"
          className="w-1/2 mx-auto rounded-xl my-4"
        />
        <p>
          Most of my work in FSAE has involved modeling physical systems. On the modeling side, this meant developing different types of simulations and
          mathematical systems to inform design.
        </p>
        <br/>
        <p>
          <strong>What is a Kinematic Model?</strong><br />
          Kinematic models aim to describe motion without considering the forces that cause that motion. From a mechanics perspective, this means that linkages
          interact through specific connection types (spherical bearings, bolted joints, or welded interfaces, etc.). Mathematically, these linkages are treated
          as vectors of fixed length that can rotate and translate, subject to algebraic constraints at their connection points.
        </p>
        <br />
        <p>
          <strong>How I Approached the Problem</strong><br />
          To simplify the system, I decomposed it by hand. For example, a steering input moves the inboard rack nodes. I first modeled the relationship between
          steering input and rack travel. That rack travel then becomes an input to both the left and right sides of the vehicle, driving the motion of the front corners.
        </p>
        <br />
        <p>
          <strong>Solving the System</strong><br />
          Each corner is treated as a separate algebraic system. Vertical wheel travel determines the angles of the wishbones while rack movement causes rotation about
          the vector connecting outboard wishbone nodes. These relationships produce optimization problems that are typically linear or locally linear, making them fast
          to solve. The end result: I can simulate a full sweep of any vehicle's kinematics in about 15 seconds.
        </p>
      </>
    ),
  },
  {
    title: "Workflow Automation",
    image: "./images/development_pipelines.jpg",
    content: (
      <>
        <p>
          <strong>Why Automate Workflows?</strong><br />
          Complex models and simulations can't serve their purpose if others can't access and run them. Telling a mechanical engineer to clone a repo and build
          a docker image hasn't gone well in my experience, so I set out to automate the process of running simulations and design workflows.
        </p>
        <br />
        <p>
          <strong>Workflow Setup</strong><br />
          To start, I refactored all code such that simulations were fully isolated and could run independently. After this, I wrote wrappers and did some CLI setup
          to interface with all of the newly refactored code. After this, I could run a single "make" command to generate the desired simulation and workflow. This
          is great for software engineers, but it doesn't solve the issue of making these tools more accessible. This is where I started using Github actions,
          specifically workflows. I set up a workflow action to take user input settings and run the appropriate simulation:
        </p>
        <img
          src="./images/development_pipelines.jpg"
          alt="Workflow interface"
          className="w-1/2 mx-auto rounded-xl my-4"
        />
        <p>
          After running a workflow, the results are stored as artifacts. One result is a pdf report that can instantly be shared, and the other artifact is the
          raw simulation output so someone can check the direct simulation output for debugging or further analysis:
        </p>
        <img
          src="./images/workflow_artifacts.jpg"
          alt="Workflow artifacts"
          className="w-full mx-auto rounded-xl my-4"
        />
        <br />
        <p>
          My end goal is to finish out all current models and fully integrate them into this automatic workflow before I graduate.
        </p>
      </>
    ),
  }
]

// --- Overlay component ---
const ProjectOverlay: React.FC<ProjectOverlayProps> = ({ project, onClose }) => {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = ''; // ✅ Also clean up here just in case
    };
  }, [project, onClose]);

  // Render nothing if there's no project
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-center items-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-light text-dark rounded-2xl shadow-lg w-full max-w-4xl h-full max-h-[90vh] overflow-y-auto p-6 relative cursor-default"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 text-dark hover:text-brand text-2xl"
          onClick={onClose}
        >
          ✕
        </button>

        <h2 className="text-3xl font-bold mb-4">{project.title}</h2>

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
  );
};


// --- Main Projects Component ---
const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null)

  return (
    <section id="projects" className="py-12 px-6 md:px-12 bg-light">
      <h2 className="text-4xl font-bold mb-8 text-center text-dark">Projects</h2>
      <h3 className="text-1xl font-bold mb-8 text-center text-dark">(click each tile for more information)</h3>
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
              className="w-full h-48 mt-6 object-contain"
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
