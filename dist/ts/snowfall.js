const worksnowfallitem = [
    "🧩",
    "🔄",
    "▶️",
    "⏯️",
    "🌐",
    "☁️",
    "🧑‍💻",
    "🖥️",
    "⌨️",
    "🖱️",
    "</>",
    "{}",
    "[]",
    "()",
    "=>",
    "===",
    "!=",
    "&&",
    "||",
    "//",
    "/* */",
    "#",
    "$",
    ">_",
    "if",
    "else",
    "for",
    "while",
    "return",
    "const",
    "let",
    "var",
    "class",
    "function",
    "async",
    "await",
    "import",
    "export",
    "new",
    "null",
    "true",
    "false",
    "API",
    "JSON",
    "HTTP",
    "REST",
    "SQL",
    "Git",
    "CI/CD",
    "SDK",
    "npm",
    "iOS",
    "Android",
    "TS",
    "JS",
    "Swift",
    "Kotlin"
];
const playsnowfallitems = [
    "⛑️",
    "🪖",
    "🔧",
    "🛠️",
    "⚙️",
    "🔩",
    "🚴",
    "🚴‍♂️",
    "🚴‍♀️",
    "🚲",
    "🚵",
    "🚵‍♂️",
    "🚵‍♀️",
    "⛑️",
    "🪖",
    "🔧",
    "🛠️",
    "⚙️",
    "🔩",
    "🚴",
    "🚴‍♂️",
    "🚴‍♀️",
    "🚲",
    "🚵",
    "🚵‍♂️",
    "🚵‍♀️",
    "🏁",
    "🚩",
    "⛑️",
    "🪖",
    "🏁",
    "🚩",
    "⛑️",
    "🪖",
    "🔧",
    "🛠️",
    "⚙️",
    "🔩",
    "🚴",
    "🚴‍♂️",
    "🚴‍♀️",
    "🚲",
    "🚵",
    "🚵‍♂️",
    "🚵‍♀️",
    "🏁",
    "🚩",
];
function createSnowfall(containerId, snowItems, itemClass) {
    const workcontainer = document.getElementById(containerId);
    snowItems.forEach((text) => {
        const element = document.createElement("span");
        element.textContent = text;
        element.classList.add("itemClass");
        // Random horizontal position
        element.style.left = `${Math.random() * 100}%`;
        // Random starting delay
        element.style.animationDelay = `${Math.random() * 5}s`;
        // Random falling speed
        element.style.animationDuration =
            `${3 + Math.random() * 5}s`;
        workcontainer?.appendChild(element);
    });
    createSnowfall("worksnowfall", worksnowfallitem, "work-snow-item");
    createSnowfall("playsnowfall", playsnowfallitems, "play-snow-item");
}
;
export {};
//# sourceMappingURL=snowfall.js.map