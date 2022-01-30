import { EmptyFeedback } from "components/FeedbackMessage";
import Button from "components/Button";
import NavigationContext from "components/NavigationContext";
import Folder from "components/Folder";
import useDocuments from "./hooks/useDocuments";
import PrivateTemplate from "templates/PrivateTemplate";
import File from "components/File";
import selectFiles from "select-files";

/**
 * Main page on opening the application. Responsible for
 * showing all user folders.
 */
function Home() {
  const { documents, hasDocuments, loading, listDir } = useDocuments();

  const handleFileSelection = () =>
    selectFiles({ multiple: true }).then(console.log);

  // TODO: add placeholder
  if (loading) return null;

  if (!hasDocuments)
    return (
      <PrivateTemplate>
        <EmptyFeedback>
          <Button onClick={handleFileSelection}>Enviar arquivo</Button>
        </EmptyFeedback>
      </PrivateTemplate>
    );

  return (
    <PrivateTemplate>
      <NavigationContext title="Meus arquivos" listDir={listDir}>
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
