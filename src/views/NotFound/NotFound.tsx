import { FeedbackMessage, Link } from "components";
import { HOME } from "router/routes";
import takenIllustration from "./assets/taken_illustration.svg";

/**
 * View responsible for displaying the 404 error with some
 * kind message.
 */
function NotFound() {
  return (
    <FeedbackMessage
      illustrationSrc={takenIllustration}
      message="Oops... Não há nada aqui."
    >
      <Link to={HOME} as="button">
        ir para a home
      </Link>
    </FeedbackMessage>
  );
}

export default NotFound;
