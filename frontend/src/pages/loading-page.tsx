import { Loader2 } from "lucide-react";

export const LoadingPage = () => {
  return (
    <div className="w-full h-[80vh] flex items-center justify-center flex-col">
      <Loader2 className="animate-spin h-8 w-8 text-primary" />
      <p>Loading...</p>
    </div>
  );
};
