import { useState } from "react";
import { Button } from "@/components/ui/button";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="grid place-items-center h-screen">
      <div>
        <h1 className="text-3xl font-bold">Hello World</h1>
        <p>Count: {count}</p>
        <Button variant={"ghost"} onClick={() => setCount(count + 1)}>Increment</Button>
      </div>
    </div>
  );
}

export default App;
