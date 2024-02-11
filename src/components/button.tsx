
import { TouchableOpacityProps, TouchableOpacity, Text, TextProps } from "react-native"


type ButtonProps = TouchableOpacityProps & {
  children: React.ReactNode
}

type ButtonTextProps = TextProps & {
  children: React.ReactNode
}
type ButtonIconProps = {
  children: React.ReactNode
}

function Button({ children, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      className="h-12 bg-orange-400 rounded-md items-center justify-center flex-row"
      {...rest}
      activeOpacity={0.8}
    >
      {children}
    </TouchableOpacity>
  )
}

function ButtonText({ children, ...rest }: ButtonTextProps) {

  return (
    <Text
      {...rest}
      className="text-orange-950 font-heading text-base mx-2"
    >
      {children}
    </Text>
  )
}


function ButtonIcon({ children }: ButtonIconProps) {

  return children
}

Button.Text = ButtonText
Button.Icon = ButtonIcon

export {
  Button
}