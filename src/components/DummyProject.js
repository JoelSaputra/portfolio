export const id = "dummy-project";

export function Thumbnail() {
  return (
    <div
      className="h-full w-full rounded-md"
      style={{ background: "linear-gradient(135deg, #ff7a4faa, #111 85%)" }}
    />
  );
}

export function Background() {
  return (
    <div
      className="fixed inset-0 -z-10"
      style={{ background: "radial-gradient(circle at 30% 40%, #ff7a4f55, #0d1117 70%)" }}
    >
      <div className="absolute bottom-16 left-10 max-w-lg">
        <h2 className="text-3xl font-semibold">Dummy Project</h2>
        <p className="mt-2 text-white/70">Placeholder project tile.</p>
      </div>
    </div>
  );
}
