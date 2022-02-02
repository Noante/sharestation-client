import {
  Button,
  FeedbackMessage,
  File,
  Folder,
  NavigationContext,
} from "components";
import useDocuments from "./hooks/useDocuments";
import PrivateTemplate from "templates/PrivateTemplate";
import selectFiles from "select-files";

/**
 * Main page on opening the application. Responsible for
 * showing all user folders.
 */
function Home() {
  const { documents, hasDocuments, loading } = useDocuments();

  const handleFileSelection = () =>
    selectFiles({ multiple: true }).then(console.log);

  // TODO: add placeholder
  if (loading) return null;

  if (!hasDocuments)
    return (
      <PrivateTemplate>
        <FeedbackMessage.EmptyFeedback>
          <Button onClick={handleFileSelection}>Enviar arquivo</Button>
        </FeedbackMessage.EmptyFeedback>
      </PrivateTemplate>
    );

  return (
    <PrivateTemplate>
      <NavigationContext title="Meus arquivos">
        {documents.map(({ id, name, isFolder }) =>
          isFolder ? (
            <Folder key={id} id={id} name={name} />
          ) : (
            <File key={id} name={name} />
          )
        )}
      </NavigationContext>
    </PrivateTemplate>
  );
}

export default Home;
