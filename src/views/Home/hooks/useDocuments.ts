import { useEffect, useMemo, useState } from "react";
import { io } from "socket.io-client";

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

const SOCKET_HOST: any = process.env.SOCKET_HOST;

/**
 *
 * @returns
 */
function useDocuments() {
	const [socket, setSocket] = useState(io(SOCKET_HOST, {
		reconnection: true,
		auth: {
			token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlQG1haWwuY29tIiwiaWF0IjoxNjMwODYwNTY3LCJleHAiOjE2MzA4NjA4Njd9.w2iFV47QRkoaJ_cxcbARzXhKkEXnbr2hfQR5B5Y6-bM",
			username: "reactApp",
			type: "client"
		}
	}));

	const [users, setUsers] = useState([]);
    const [host, setHost] = useState<any>({});
    const [files, setFiles] = useState([]);
	const [documents, setDocuments] = useState([]);

	useEffect(() => {
		if(Object.keys(host).length > 0){
            socket.emit("host:listDir", {
                path: "/Users/caiomorais/Documents/Teste2/",
                from: socket.id,
                to: host.userID
            });
		}
    }, [host]);
	
	const loadFiles = () => {
		socket.on("client:listDir", (data)=>{
            setDocuments(data.message);
		});
    }
    
    const loadUsers = () => {
		socket.on("client:listHosts", users => {
            if(users.length > 0)
                setHost(users[0])
            setUsers(users);
        });
    }

    const loadDownloadedFile = () => {
        const chunks: any = [];
		socket.on("client:downloadFile", data => {
            if(data.status === "in_progress"){
                chunks.push(data.chunk);
            } else {
                const blob = new Blob(chunks, {type: data.type});
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = data.filename;
                a.click();
            }
            console.log(data);
        });
    }

    const handleDownload = (document: any) => {
        window.alert(document.name);
		socket.emit("host:downloadFile", {
            path: "/Users/caiomorais/Documents/Teste2/",
            filename: document.name,
            from: socket.id,
            to: host.userID
        });
    }

	const loading = false;
	const hasDocuments = true;

//   const documents = Array.from({ length: 35 }, (_, index) => ({
//     id: `${index}`,
//     name: `Folder ${index + 1}`,
//     isFolder: true,
//   }));

  return {
    loading,
    hasDocuments,
	documents,
	loadFiles,
	loadUsers,
	loadDownloadedFile,
	handleDownload
  };
}

export default useDocuments;
