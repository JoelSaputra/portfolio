const tabs = [
  { id: "about", label: "About Me" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
];

export default function TopHeaderBar({ activeTab, onTabChange }) {
  return (
    <div className="absolute left-0 top-0 flex w-full items-center gap-8 bg-transparent px-10 py-6">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={
            tab.id === activeTab
              ? "text-lg font-semibold text-white"
              : "text-lg font-normal text-white/40 transition-colors hover:text-white/70"
          }
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
