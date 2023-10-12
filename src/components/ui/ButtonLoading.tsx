import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";

export function ButtonLoading() {
  return (
    <Button
      disabled
      className="w-full bg-gray-800 text-white font-semibold text-md"
    >
      <Loader2 className="mr-2 h-6 w-6 animate-spin" />
      Please wait
    </Button>
  );
}
