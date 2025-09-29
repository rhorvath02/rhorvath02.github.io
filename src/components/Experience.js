import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const experiences = [
    {
        role: "Vehicle Dynamics Modeling Intern",
        company: "Tesla",
        date: "May 2024 – Aug 2024, May 2025 – Aug 2025",
        details: [
            "Developed high-fidelity MBD models and analysis tools to capture realistic system behavior",
            "Built infrastructure for tire modeling and analysis, used by engineers across the team",
            "Implemented transient maneuver evaluation workflows, generating metrics to support design decisions",
            "Automated signal processing (data → splice → database), significantly reducing manual effort",
            "Conducted vehicle sensitivity studies to inform parallel design decisions across teams",
            "Integrated dev containers and unit tests as needed to improve code quality"
        ],
    },
    {
        role: "Chassis Design Engineering Intern",
        company: "Tesla",
        date: "May 2023 – Aug 2023",
        details: [
            "Designed stamped and machined chassis components, optimizing across strength, weight, and manufacturability",
            "Modeled nonlinear structural components using first-principles methods to validate designs",
            "Performed FEA on new and existing components in Ansys Mechanical to ensure structural integrity",
            "Collaborated with suppliers on part design, pricing, and production"
        ],
    },
    {
        role: "Meshing Software Intern",
        company: "Ansys",
        date: "Jan 2023 – May 2023",
        details: [
            "Developed regression tests for new and existing meshing products, improving software reliability",
            "Automated meshing workflows using PyPrime, enabling end-to-end Python-based scripting",
            "Created JavaScript macros for Ansys Workbench to streamline testing and validation",
            "Implemented image-based comparison to detect abrupt changes in mesh quality",
            "Leveraged Ansys Mechanical, PyPrime, PrimeApp, and version control to support development and testing"
        ],
    },
    {
        role: "Mechanical Engineering Intern",
        company: "Harmonic Bionics",
        date: "May 2022 – Aug 2022",
        details: [
            "Designed actuator life cycle tests to ensure reliable performance between maintenance cycles",
            "Developed calibration fixtures for precise tuning of load cells and validation of commercial springs",
            "Applied GD&T in the drawing and manufacturing process to ensure design accuracy",
            "Adhered to medical device quality system standards, maintaining regulatory compliance"
        ],
    },
];
const Experience = () => {
    return (_jsx("section", { id: "experience", className: "min-h-screen bg-dark text-light py-16", children: _jsxs("div", { className: "max-w-6xl mx-auto px-4", children: [_jsx("h2", { className: "text-4xl font-bold text-center mb-12 text-brand", children: "Experience" }), _jsx("div", { className: "space-y-8", children: experiences.map((exp, idx) => (_jsxs("div", { className: "p-6 bg-gray-800 rounded-2xl shadow", children: [_jsxs("h3", { className: "text-2xl font-semibold", children: [exp.role, " \u2014 ", _jsx("span", { className: "text-brand", children: exp.company })] }), _jsx("p", { className: "text-sm text-light/70 mb-3", children: exp.date }), _jsx("ul", { className: "list-disc list-inside space-y-1 text-light/90", children: exp.details.map((d, i) => (_jsx("li", { children: d }, i))) })] }, idx))) })] }) }));
};
export default Experience;
