import { useState, useEffect } from "react"; 

export default function App() { 
  const [text, setText] = useState("");

  useEffect(() => {
    document.title = `${text.length} characters`;
  }, [text]);

  return (
    <div style={styles.card}>
      <input 
        value={text}
        onChange={(e) => setText(e.target.value)} 
        placeholder="Type and watch the tab…" 
        style={styles.input} 
      /> 
      <div style={styles.hint}>
        👆 Look at your browser tab title.
      </div>
    </div>
  ); 
} 

const styles = { 
  card: { fontFamily: "system-ui", maxWidth: 360, margin: "40px auto", padding: 24, borderRadius: 16, boxShadow: "0 4px 20px rgba(0,0,0,.08)" }, 
  input: { width: "100%", padding: "10px 12px", borderRadius: 8, border: "1px solid #ccc", fontSize: 15, boxSizing: "border-box" }, 
  hint: { marginTop: 12, fontSize: 13, color: "#888" }, 
};