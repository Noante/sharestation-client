import { EmptyFeedback } from "components/FeedbackMessage";
import Button from "components/Button";
import NavigationContext from "components/NavigationContext";
import Folder from "components/Folder";
import useDocuments from "./hooks/useDocuments";
import PrivateTemplate from "templates/PrivateTemplate";

/**
 * Main page on opening the application. Responsible for
 * showing all user folders.
 */
function Home() {
  const { documents, hasDocuments, loading } = useDocuments();

  // TODO: add placeholder
  if (loading) return null;

  if (!hasDocuments)
    return (
      <PrivateTemplate>
        <EmptyFeedback>
          <Button>Enviar arquivo</Button>
        </EmptyFeedback>
      </PrivateTemplate>
    );

  return (
    <PrivateTemplate>
      <NavigationContext title="Meus arquivos">
        {documents.map(({ id, title }) => (
          <Folder key={id} id={id} title={title} />
        ))}
      </NavigationContext>
    </PrivateTemplate>
  );
}

export default Home;
