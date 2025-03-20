import React, { useLayoutEffect, useState } from "react";
import styles from "./ConsoleLogViewer.module.scss";

const ConsoleLogViewer: React.FC = () => {
  const [logs, setLogs] = useState<string[]>([]);

  useLayoutEffect(() => {
    // Store the original console.log function
    const originalConsoleLog = console.log;

    // Override console.log to capture logs
    console.log = (...args) => {
      const message = args
        .map((arg) =>
          typeof arg === "object" ? JSON.stringify(arg, null, 2) : String(arg)
        )
        .join(" ");
      setLogs((prevLogs) => [...prevLogs, message]);

      // Call the original console.log to still log in the browser console
      originalConsoleLog(...args);
    };

    return () => {
      // Restore the original console.log when the component unmounts
      console.log = originalConsoleLog;
    };
  }, []);

  return (
    <div
      className={styles.consoleLogViewer}
      style={{
        background: "#111",
        color: "#0f0",
        padding: "10px",
        fontFamily: "monospace",
        maxHeight: "200px",
        overflow: "auto",
      }}
    >
      <h3>Console Logs</h3>
      {logs.map((log, index) => (
        <div
          key={index}
          style={{ borderBottom: "1px solid #333", padding: "5px 0" }}
        >
          {log}
        </div>
      ))}
    </div>
  );
};

export default ConsoleLogViewer;
