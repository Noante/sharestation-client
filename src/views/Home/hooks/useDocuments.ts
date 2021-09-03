import { useEffect, useMemo, useState } from "react";
import { io } from "socket.io-client";

// const socket = io(
//   "http://ec2-18-117-165-1.us-east-2.compute.amazonaws.com:3004",
//   {
//     reconnection: true,
//   }
// );

// socket.auth = { username: "xguhkaa" };

// const [documents, setDocuments] = useState([]);
//   const [users, setUsers] = useState<
//     Record<"username" | "userID", string>[] | null
//   >(null);

//   useEffect(() => {
//     socket.on("user:listUsers", (users) => {
//       setUsers(users);
//     });
//   }, []);

//   useEffect(() => {
//     if (users) {
//       socket.emit("host:listDir", {
//         path: "/Users/caiomorais/Documents/Teste2/",
//         to: users[1].userID ?? "",
//       });
//     }
//   }, [users]);

//   useEffect(() => {
//     socket.on("client:listDir", (documents) => {
//       setDocuments(
//         // @ts-ignore
//         documents.message.map(({ isDir, name }, id) => ({
//           isFolder: isDir,
//           id,
//           name,
//         }))
//       );
//     });
//   }, []);

/**
 *
 * @returns
 */
function useDocuments() {
  const loading = false;

  const hasDocuments = true;

  const documents = Array.from({ length: 35 }, (_, index) => ({
    id: `${index}`,
    name: `Folder ${index + 1}`,
    isFolder: true,
  }));

  return {
    loading,
    hasDocuments,
    documents,
  };
}

export default useDocuments;
