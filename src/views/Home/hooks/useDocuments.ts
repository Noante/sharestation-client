/**
 *
 * @returns
 */
function useDocuments() {
  const loading = false;

  const hasDocuments = true;

  const documents = Array.from({ length: 35 }, (_, index) => ({
    id: `${index}`,
    title: `Folder ${index + 1}`,
  }));

  return {
    loading,
    hasDocuments,
    documents,
  };
}

export default useDocuments;
