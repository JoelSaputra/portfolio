const defaultTextPosition = { bottom: 260, right: 160 };

export default function createProjectTile(
  name,
  description = "",
  techStack = [],
  thumbnailColor = null,
  thumbnailImage = null,
  backgroundImage = null,
  links = {},
  textPosition = {},
  thumbnailColors = null,
) {
  const id = name.toLowerCase().replace(/\s+/g, "-");
  const textPos = { ...defaultTextPosition, ...textPosition };

  return {
    id,
    Thumbnail() {
      return (
        <div
          className="flex h-full w-full items-center justify-center rounded-md"
          style={{
            background: thumbnailColors
              ? `linear-gradient(105deg, ${thumbnailColors.join(", ")})`
              : thumbnailColor
              ? `linear-gradient(135deg, ${thumbnailColor}, #0a0a0a 85%)`
              : "#1a1a1a",
          }}
        >
          {thumbnailImage ? (
            <img
              src={thumbnailImage}
              alt={`${name} thumbnail`}
              className="h-4/5 w-4/5 object-contain"
            />
          ) : (
            <p className="px-3 text-center text-[12px] font-semibold text-white">{name}</p>
          )}
        </div>
      );
    },
    Background() {
      return (
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div
            className="absolute inset-0 scale-105"
            style={{
              background: thumbnailColor
                ? `linear-gradient(105deg, ${thumbnailColor}, #0a0a0a 85%)`
                : "#0a0a0a",
              ...(backgroundImage
                ? {
                    backgroundImage: `linear-gradient(rgba(10,10,10,0.75), rgba(10,10,10,0.75)), url("${backgroundImage}")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    filter: "blur(2px)",
                  }
                : {}),
            }}
          />

         
          <div
            className="absolute max-w-2xl bg-gray-600/10 border-2 backdrop-blur-md rounded-2xl p-8"
            style={{
              top: textPos.top,
              bottom: textPos.bottom,
              left: textPos.left,
              right: textPos.right,
            }}
          >
            <h2 className="text-6xl font-semibold">{name}</h2>
            <p className="mt-4 text-lg text-white/70 whitespace-pre-line">
              {description || "Description coming soon."}
            </p>

            {techStack.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/30 px-3 py-1 text-sm text-white/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}

            {(links.github || links.demo) && (
              <div className="mt-6 flex gap-4">
                {links.github && (
                  <a
                    href={links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-white px-6 py-2 text-sm font-medium text-[#0a0a0a] transition-colors hover:bg-white/80"
                  >
                    GitHub
                  </a>
                )}
                {links.demo && (
                  <a
                    href={links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-white/30 px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-white hover:text-[#0a0a0a]"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            )}
          </div>
          </div>
      );
    },
  };
}
