function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          Hello React + TypeScript + Tailwind!
        </h1>
        <p className="text-gray-600">
          Tailwind CSS 4.1이 정상적으로 작동하고 있습니다.
        </p>
        <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          클릭해보세요
        </button>
      </div>
    </div>
  );
}

export default App;
