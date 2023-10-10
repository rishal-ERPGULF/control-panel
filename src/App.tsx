import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { ModeToggle } from "./components/ui/ModeToggle";
function App() {
  const [count, setCount] = useState(0);
  const { theme, setTheme } = useTheme();
  return (
    <div className="grid place-items-center h-screen">
      <div>
        <h1 className="text-3xl font-bold">Hello World</h1>
        <p>Count: {count}</p>
        <Button variant={"ghost"} onClick={() => setCount(count + 1)}>
          Increment
        </Button>
        <Button
          onClick={() => {
            setTheme(theme === "light" ? "dark" : "light");
          }}
          variant="outline"
          size="icon"
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
        <ModeToggle />
      </div>
    </div>
  );
}

export default App;
