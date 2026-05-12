import fs from 'fs';

const content = fs.readFileSync('c:/Dev/Devopstrio/frontend/src/App.jsx', 'utf8');
const lines = content.split('\n');

const newLines = lines.map(line => {
    // Match: import Name from "./Path";
    const match = line.match(/^import (\w+) from ["'](.+?)["'];?$/);
    if (match) {
        const [full, name, path] = match;
        // Keep some imports static (Navbar, Footer, ScrollToTop, ChatBot, ClickSpark, CookieBanner, Helmet stuff)
        const staticImports = ['Navbar', 'Footer', 'ChatBot', 'ScrollToTop', 'ClickSpark', 'CookieBanner', 'Helmet', 'HelmetProvider', 'Router', 'Routes', 'Route'];
        if (staticImports.some(si => name === si || full.includes(si))) {
            return line;
        }
        // Exclude CSS imports
        if (path.endsWith('.css')) return line;
        
        return `const ${name} = lazy(() => import("${path}"));`;
    }
    return line;
});

// Add lazy, Suspense to react import
let finalContent = newLines.join('\n');
finalContent = finalContent.replace('import { BrowserRouter as Router, Routes, Route } from "react-router-dom";', 'import { lazy, Suspense } from "react";\nimport { BrowserRouter as Router, Routes, Route } from "react-router-dom";');

// Add Suspense around Routes
finalContent = finalContent.replace('<Routes>', '<Suspense fallback={<div style={{height: "100vh", backgroundColor: "#000", display: "flex", justifyContent: "center", alignItems: "center", color: "#fff"}}>Loading...</div>}>\n          <Routes>');
finalContent = finalContent.replace('</Routes>', '</Routes>\n        </Suspense>');

fs.writeFileSync('c:/Dev/Devopstrio/frontend/src/App_new.jsx', finalContent);
