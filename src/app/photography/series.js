// Web-optimized copies (2560px AVIF, ~100-300KB each) live in portfolio-web/;
// the full-res masters stay in portfolio/ and are never served.
const DIR = "/photos/photography/portfolio-web";

const toPhoto = (filename) => ({
    src: `${DIR}/${encodeURIComponent(filename.replace(/\.[^.]+$/, ".avif"))}`,
    alt: filename.replace(/\.[^.]+$/, ""),
});

// Photo series, each shown on its own page under /photography.
export const series = {
    origins: [
        ...Array.from({ length: 10 }, (_, i) => `origins - ${String(i + 1).padStart(3, "0")}.png`),
        "mini - 01.png",
    ].map(toPhoto),

    hotfire: Array.from({ length: 11 }, (_, i) => `Hotfire - ${String(i + 1).padStart(3, "0")}.png`).map(toPhoto),

    documentary: [
        ...Array.from({ length: 8 }, (_, i) => `jmail bots - ${String(i + 1).padStart(2, "0")}.png`),
        "jmail.png",
        ...Array.from({ length: 11 }, (_, i) => `shoots - ${String(i + 1).padStart(3, "0")}.png`),
        "dedalus - 01.png",
    ].map(toPhoto),
};
