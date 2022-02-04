import { Button } from "components";
import { Link as RouterLink, LinkProps } from "react-router-dom";

type Props = LinkProps & {
  as?: "button";
};

/**
 * Allow the user to browse through routes.
 */
function Link({ as, children, to, ...props }: Props) {
  if (as === "button" && typeof to === "string")
    return (
      <Button as="a" href={to}>
        {children}
      </Button>
    );

  return (
    <RouterLink to={to} {...props}>
      {children}
    </RouterLink>
  );
}

export default Link;
