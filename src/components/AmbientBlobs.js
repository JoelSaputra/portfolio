export default function AmbientBlobs() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#0a0a0a]">
      <div
        className="ambient-blob ambient-blob-1"
        style={{
          width: 500,
          height: 500,
          top: -100,
          left: -100,
          background: "#22c55e",
        }}
      />
      <div
        className="ambient-blob ambient-blob-2"
        style={{
          width: 400,
          height: 400,
          bottom: -50,
          right: "10%",
          background: "#16a34a",
        }}
      />
      <div
        className="ambient-blob ambient-blob-3"
        style={{
          width: 350,
          height: 350,
          top: "30%",
          right: -80,
          background: "#4ade80",
        }}
      />
    </div>
  );
}
