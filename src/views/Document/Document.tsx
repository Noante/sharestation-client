import NavigationContext from "components/NavigationContext";
import File from "components/File";
import PrivateTemplate from "templates/PrivateTemplate";

const files = [
  { id: "uuid-00", name: "Estudos dos macacos pelados.ppt" },
  { id: "uuid-01", name: "macacos pelados.jpg" },
  { id: "uuid-02", name: "gemidos do macaco pelado.mp3" },
  { id: "uuid-03", name: "reprodução dos macacos pelados.mp4" },
];

/**
 * View responsible for displaying the available files inside
 * the previous selected folder.
 */
function Document() {
  return (
    <PrivateTemplate>
      <NavigationContext title="Meus arquivos">
        {files.map(({ id, name }) => (
          <File key={id} name={name} />
        ))}
      </NavigationContext>
    </PrivateTemplate>
  );
}

export default Document;
