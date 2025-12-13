import { useState } from "react";
import { useFetch } from "./useFetch";
import { useLocalStorage } from "./useLocalStorage";

export default function Todos() {
  const [inputId, setInputId] = useLocalStorage("lastTodoId", "");

  const [url, setUrl] = useState(
    inputId ? `https://dummyjson.com/todos/${inputId}` : null
  );

  const { data: todoData, isLoading, error } = useFetch(url);

  function handleSubmit() {
    if (!inputId || Number(inputId) <= 0) return;
    setUrl(`https://dummyjson.com/todos/${inputId}`);
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div>
      {/* Input Section */}
      <div style={{ marginBottom: "20px" }}>
        <input
          type="number"
          value={inputId}
          onChange={(e) => setInputId(e.target.value.trim())}
          onKeyDown={handleKeyDown}
          placeholder="Enter Todo ID"
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>

      {/* Result Section */}
      <div>
        {isLoading && <p>Loading...</p>}

        {error && <p style={{ color: "red" }}>Error: {error}</p>}

        {!isLoading && todoData && (
          <div style={{ border: "1px solid #ddd", padding: "10px" }}>
            <h3>Todo Number: {todoData.id}</h3>
            <p>{todoData.todo}</p>
            <p>Completed: {todoData.completed ? "Yes" : "No"}</p>
          </div>
        )}
      </div>
    </div>
  );
}
