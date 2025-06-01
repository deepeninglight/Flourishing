import { useState } from 'react'

const demoContent = {
  education: "📖 Education: Khan Academy video + quiz based on topic.",
  work: "💼 Work: Meeting agenda + productivity tools.",
  people: "👤 People: Recent contacts & quick message.",
  lodging: "🏠 Lodging: Rental search & checklist.",
  display: "💻 Display: Brightness & font size options.",
  nutrition: "🌾 Nutrition: Food log & meal detection.",
  ontheway: "↗️ On the Way: Optimized stop suggestions.",
  notes: "🧰 Notes: Extract & save project text.",
  news: "📰 News: Relevant headlines displayed.",
  settings: "⚙️ Settings: Sync, theme, language toggles.",
  statistics: "📊 Stats: Graphs from viewed data.",
  ideas: "💡 Ideas: Project prompt from current content.",
  finance: "💵 Finance: Budget and buy suggestion.",
  calendar: "📆 Calendar: Event extraction & add option.",
  comms: "💬 Comms: Suggested contact from context."
};

export default function App() {
  const [currentMode, setCurrentMode] = useState("education");
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
  };

  return (
    <div className="p-4 max-w-md mx-auto text-center">
      <div className="flex justify-between gap-1 mb-4">
        {['education','work','people','lodging','display'].map(mode => (
          <button key={mode} onClick={() => setCurrentMode(mode)} className="bg-blue-200 px-2 py-1 rounded">
            {demoContent[mode].split(':')[0]}
          </button>
        ))}
      </div>

      <div className="bg-white h-64 mb-4 p-4 rounded shadow overflow-y-auto">
        {selectedButton ? demoContent[selectedButton] : `Welcome to ${demoContent[currentMode]}`}
      </div>

      <div className="mb-2">
        <h3 className="font-semibold">🔲 Square</h3>
        <div className="grid grid-cols-3 gap-2 mt-2">
          {['nutrition','ontheway','notes','news','settings'].map(btn => (
            <button key={btn} onClick={() => handleButtonClick(btn)} className="bg-green-200 rounded p-2">
              {demoContent[btn].split(':')[0]}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold">🔵 Circle</h3>
        <div className="grid grid-cols-3 gap-2 mt-2">
          {['statistics','ideas','finance','calendar','comms'].map(btn => (
            <button key={btn} onClick={() => handleButtonClick(btn)} className="bg-yellow-200 rounded-full p-2">
              {demoContent[btn].split(':')[0]}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}