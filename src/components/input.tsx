import { TextInput, TextInputProps } from "react-native";
import colors from "tailwindcss/colors";



export function Input({ ...rest }: TextInputProps) {
  return (
    <TextInput
      multiline
      textAlignVertical="top"
      className="h-32 bg-neutral-800 rounded-md px-4 py-3 font-body text-sm text-neutral-50 border-2 border-neutral-600"
      placeholderTextColor={colors.neutral[400]}
      {...rest}
    />
  )
}