const worksnowfall = [
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
const playsnowfall = [
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
    "🛣️",
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
    "🛣️"
];
const workcontainer = document.getElementById("worksnowfall");
worksnowfall.forEach((text) => {
    const element = document.createElement("span");
    element.textContent = text;
    element.classList.add("work-snow-item");
    // Random horizontal position
    element.style.left = `${Math.random() * 100}%`;
    // Random starting delay
    element.style.animationDelay = `${Math.random() * 5}s`;
    // Random falling speed
    element.style.animationDuration =
        `${3 + Math.random() * 5}s`;
    workcontainer?.appendChild(element);
});
const playcontainer = document.getElementById("playsnowfall");
playsnowfall.forEach((text) => {
    const element = document.createElement("span");
    element.textContent = text;
    element.classList.add("play-snow-item");
    // Random horizontal position
    element.style.left = `${Math.random() * 100}%`;
    // Random starting delay
    element.style.animationDelay = `${Math.random() * 5}s`;
    // Random falling speed
    element.style.animationDuration =
        `${3 + Math.random() * 5}s`;
    playcontainer?.appendChild(element);
});
export {};
//# sourceMappingURL=snowfall.js.map