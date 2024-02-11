import { Link, LinkProps } from "expo-router";

type LinkButtonProps = LinkProps<string> & {
  title: string
}

export function LinkButton({ title, ...rest }: LinkButtonProps) {
  return (
    <Link {...rest} className="text-neutral-200 text-center text-base font-body underline">
      {title}
    </Link>
  )
}