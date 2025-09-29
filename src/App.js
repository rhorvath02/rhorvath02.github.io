import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
// import Contact from "./components/Contact"
function App() {
    return (_jsxs("div", { className: "font-sans bg-dark text-light", children: [_jsx(Navbar, {}), _jsxs("main", { className: "pt-16", children: [_jsx(Hero, {}), _jsx(Projects, {}), _jsx(Experience, {})] })] }));
}
export default App;
