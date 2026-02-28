export default function TaskCard({
  step,
  onComplete,
  onRepeat
}: any) {
  return (
    <div className="max-w-md p-8 rounded-2xl shadow-lg text-xl bg-white">
      <h2 className="text-2xl font-bold mb-6">Current Step</h2>
      <p className="mb-6 leading-relaxed">{step}</p>

      <div className="flex gap-4">
        <button
          onClick={onComplete}
          className="bg-green-500 px-6 py-3 rounded-xl text-white"
        >
          Done
        </button>

        <button
          onClick={onRepeat}
          className="bg-blue-500 px-6 py-3 rounded-xl text-white"
        >
          🔊 Repeat
        </button>
      </div>
    </div>
  );
}