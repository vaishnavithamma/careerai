import { useState, forwardRef, type InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const FloatingInput = forwardRef<HTMLInputElement, Props>(function FloatingInput(
  { label, error, className = "", id, type = "text", ...rest }, ref
) {
  const [focused, setFocused] = useState(false);
  const inputId = id || `f-${label.replace(/\s/g, "")}`;
  const hasValue = !!(rest.value && String(rest.value).length) || !!rest.defaultValue;
  const floating = focused || hasValue;

  return (
    <div className={className}>
      <div className={`relative rounded-xl border bg-card/60 backdrop-blur transition ${
        error ? "border-destructive" : focused ? "border-[color:var(--brand)] ring-4 ring-[color:var(--brand)]/15" : "border-border"
      }`}>
        <label
          htmlFor={inputId}
          className={`pointer-events-none absolute left-3 transition-all duration-200 ${
            floating ? "top-1 text-[10px] font-semibold uppercase tracking-wider text-[color:var(--brand)]" : "top-1/2 -translate-y-1/2 text-sm text-muted-foreground"
          }`}
        >
          {label}
        </label>
        <input
          id={inputId}
          ref={ref}
          type={type}
          onFocus={(e) => { setFocused(true); rest.onFocus?.(e); }}
          onBlur={(e) => { setFocused(false); rest.onBlur?.(e); }}
          {...rest}
          className="w-full bg-transparent px-3 pt-5 pb-2 text-sm outline-none placeholder:text-transparent"
        />
      </div>
      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
    </div>
  );
});
