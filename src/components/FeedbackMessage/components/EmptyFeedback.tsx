import { ReactNode } from "react";
import FeedbackMessage from "../FeedbackMessage";
import illustration from "../assets/empty_illustration.svg";

type Params = {
  children: ReactNode;
};

/**
 * what does this component do?
 */
function EmptyFeedback({ children }: Params) {
  return (
    <FeedbackMessage
      message="Parece que você não enviou nenhum arquivo ainda :("
      illustrationSrc={illustration}
    >
      {children}
    </FeedbackMessage>
  );
}

export default EmptyFeedback;
