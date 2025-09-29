import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
// src/components/Projects.tsx
import { useState, useEffect } from "react";
import { MathJax, MathJaxContext } from "better-react-mathjax";
// --- Define projects with JSX content ---
const projects = [
    {
        title: "Longhorn Racing Electric",
        image: "src/assets/lre.png",
        content: (_jsxs(_Fragment, { children: [_jsx("p", { children: "Led vehicle modeling, suspension, and dynamics development for UT Austin's Formula SAE electric team." }), _jsx("p", { children: "Inline math example: $E = mc^2$ and block example:" }), _jsx("p", { children: "$$F = ma$$" }), _jsx("img", { src: "src/assets/lre_extra.png", alt: "LRE Example", className: "w-full rounded-xl my-4" }), _jsx("p", { children: "More text and analysis here..." })] })),
    },
    {
        title: "Vehicle Dynamics Tools",
        image: "src/assets/dynamics.png",
        content: (_jsxs(_Fragment, { children: [_jsx("p", { children: "Built high-fidelity simulation tools for handling and stability analysis. Inline: $\\\\tau = J \\\\alpha$, block:" }), _jsx("p", { children: "$$\\\\tau = I \\\\alpha$$" }), _jsx("img", { src: "src/assets/dynamics_plot.png", alt: "Dynamics Plot", className: "w-full rounded-xl my-4" })] })),
    },
    {
        title: "Automation & CI/CD",
        image: "src/assets/automation.png",
        content: (_jsxs(_Fragment, { children: [_jsx("p", { children: "Implemented regression test frameworks, automated data/meshing workflows, and containerized development environments." }), _jsx("img", { src: "src/assets/automation_workflow.png", alt: "Automation Workflow", className: "w-full rounded-xl my-4" })] })),
    },
];
// --- Overlay component ---
const ProjectOverlay = ({ project, onClose }) => {
    if (!project)
        return null;
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === "Escape")
                onClose();
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [onClose]);
    return (_jsx("div", { className: "fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-center items-center p-4", onClick: onClose, children: _jsxs("div", { className: "bg-light text-dark rounded-2xl shadow-lg w-full max-w-4xl h-full max-h-[90vh] overflow-y-auto p-6 relative cursor-default", onClick: (e) => e.stopPropagation(), children: [_jsx("button", { className: "absolute top-4 right-4 text-dark hover:text-brand text-2xl", onClick: onClose, children: "\u2715" }), _jsx("h2", { className: "text-3xl font-bold mb-4", children: project.title }), _jsx("img", { src: project.image, alt: project.title, className: "w-full h-64 object-cover rounded-xl mb-4" }), _jsx(MathJaxContext, { config: {
                        tex: {
                            inlineMath: [['$', '$'], ['\\(', '\\)']],
                            displayMath: [['$$', '$$'], ['\\[', '\\]']],
                        },
                    }, children: _jsx(MathJax, { dynamic: true, children: _jsx("div", { className: "prose max-w-none", children: project.content }) }) })] }) }));
};
// --- Main Projects Component ---
const Projects = () => {
    const [activeProject, setActiveProject] = useState(null);
    return (_jsxs("section", { id: "projects", className: "py-12 px-6 md:px-12 bg-light", children: [_jsx("h2", { className: "text-4xl font-bold mb-8 text-center text-dark", children: "Projects" }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6", children: projects.map((project, idx) => (_jsxs("div", { className: "bg-white text-dark rounded-xl shadow hover:scale-105 transition transform cursor-pointer overflow-hidden", onClick: () => setActiveProject(project), children: [_jsx("img", { src: project.image, alt: project.title, className: "w-full h-48 object-cover" }), _jsx("div", { className: "p-4", children: _jsx("h3", { className: "text-xl font-semibold", children: project.title }) })] }, idx))) }), _jsx(ProjectOverlay, { project: activeProject, onClose: () => setActiveProject(null) })] }));
};
export default Projects;
