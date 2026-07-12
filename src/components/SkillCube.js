const SIZE = 180;
const HALF = SIZE / 2;

const faces = [
  { transform: `rotateY(0deg) translateZ(${HALF}px)`, image: "/images/Python-Thumbnail.png" },
  { transform: `rotateY(180deg) translateZ(${HALF}px)`, image: "/images/JavaThumbnailLogo.png" },
  { transform: `rotateY(90deg) translateZ(${HALF}px)`, image: "/images/JavaScript-Symbol-Thumbnail.png" },
  { transform: `rotateY(-90deg) translateZ(${HALF}px)`, image: "/images/HTML5-Thumbnail.png" },
  { transform: `rotateX(90deg) translateZ(${HALF}px)`, image: "/images/CSS-logo-Thumbnail.png" },
  { transform: `rotateX(-90deg) translateZ(${HALF}px)`, image: "/images/Cprogramming-Thumbnail.png" },
];

export default function SkillCube() {
  return (
    <div
      className="flex items-center justify-center"
      style={{ width: SIZE, height: SIZE, perspective: 800 }}
    >
      <div
        className="animate-slow-spin-y relative"
        style={{
          width: SIZE,
          height: SIZE,
          transformStyle: "preserve-3d",
        }}
      >
        {faces.map((face) => (
          <div
            key={face.image}
            className="absolute flex items-center justify-center rounded-md border border-white/20 bg-white/10 backdrop-blur-sm"
            style={{
              width: SIZE,
              height: SIZE,
              transform: face.transform,
            }}
          >
            <p>Born 2006</p>
          </div>
        ))}
      </div>
    </div>
  );
}
