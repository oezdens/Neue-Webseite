import * as React from "react";

import { cn } from "./utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
    return (
    <textarea
      data-slot="textarea"
      className={cn(
        "resize-none border-input placeholder:text-muted-foreground dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-input-background px-3 py-2 text-base transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        // add explicit purple focus/invalid styles so click focus shows purple ring
        "focus:border-purple-500 focus:ring-2 focus:ring-purple-500/40 focus-visible:border-ring focus-visible:ring-ring/50",
        "invalid:border-purple-500 invalid:ring-2 invalid:ring-purple-500/40 aria-invalid:ring-destructive/20 aria-invalid:border-destructive",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
