import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { ControllerRenderProps, FieldValues, Path } from "react-hook-form"

interface NumberInputProps<
  TFieldValues extends FieldValues,
  TName extends Path<TFieldValues>
> {
  field: ControllerRenderProps<TFieldValues, TName>
  className?: string
  placeholder?: string
  pattern?: string
  disabled?: boolean
  step?: string | number
  inputMode?:
    | "search"
    | "text"
    | "email"
    | "tel"
    | "url"
    | "numeric"
    | "none"
    | "decimal"
}

export default function NumberInput<
  TFieldValues extends FieldValues,
  TName extends Path<TFieldValues>
>({
  field,
  placeholder,
  className,
  inputMode,
  pattern,
  disabled,
  step,
}: NumberInputProps<TFieldValues, TName>) {
  return (
    <Input
      type="number"
      inputMode={inputMode ?? "numeric"}
      placeholder={placeholder}
      pattern={pattern}
      disabled={disabled}
      className={cn("w-full", className)}
      {...field}
      step={step}
      value={field.value ?? ""}
      onChange={(e) => {
        if (e.target.value === "") return field.onChange(undefined)
        field.onChange(Number(e.target.value))
      }}
    />
  )
}
