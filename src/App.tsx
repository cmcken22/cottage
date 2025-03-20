import { useOrientation } from "./Hooks";
import Router from "./Router";

function App() {
  const orientation = useOrientation();

  return <Router key={orientation} />;
}

export default App;
