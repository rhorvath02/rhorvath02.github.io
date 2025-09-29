import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Navbar = () => {
    return (_jsx("nav", { className: "fixed top-0 left-0 w-full bg-gray-900 text-white shadow-md z-50", children: _jsxs("div", { className: "max-w-6xl mx-auto px-4 py-3 flex justify-between items-center", children: [_jsx("h1", { className: "text-xl font-bold", children: "Robert Horvath Portfolio" }), _jsxs("ul", { className: "flex gap-6", children: [_jsx("li", { children: _jsx("a", { href: "#hero", className: "hover:text-blue-400", children: "Home" }) }), _jsx("li", { children: _jsx("a", { href: "#projects", className: "hover:text-blue-400", children: "Projects" }) }), _jsx("li", { children: _jsx("a", { href: "#experience", className: "hover:text-blue-400", children: "Experience" }) })] })] }) }));
};
export default Navbar;
