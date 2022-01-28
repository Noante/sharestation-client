import { useEffect, useState } from "react";
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

const SOCKET_HOST: any = process.env.SOCKET_HOST || "http://localhost:3004";

/**
 *
 * @returns
 */
function useDocuments() {
	const [socket, setSocket] = useState(io(SOCKET_HOST, {
		reconnection: true,
		auth: {
			token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlQG1haWwuY29tIiwiaWF0IjoxNjQzMzM1MDkwLCJleHAiOjE2NDMzMzUzOTB9.XyE8I_SAv3JbSmlhp8HaaPLuBA5uGFcH6lw4LeOOP0w",
			username: "reactApp",
			type: "client"
		}
	}));

	const [users, setUsers] = useState([]);
    const [host, setHost] = useState<any>({
		username: "clientNode1"
	});
	const [documents, setDocuments] = useState([]);

	useEffect(() => {
		console.log(Object.keys(socket).length);
		
		if(Object.keys(socket).length > 0){
            // socket.auth = {username: "reactApp"};
            loadFiles();
            loadUsers();
            loadDownloadedFile();

            socket.emit("server:listHosts", {
                hosts: [
                    "clientNode1",
                    "clientNode2"
                ]
            });
		}
    }, [socket]);

	useEffect(() => {
		socket.emit("host:listDir", {
			path: "/Users/caiomorais/Documents/Teste2/",
			from: socket.id,
			to: host.userID
		});
    }, [host]);
	
	const loadFiles = () => {
		socket.on("client:listDir", (data: any)=>{
			const documentsList = data.message.map((message: any, i: number) => ({
				id: `${i}`,
				name: message.name,
				isFolder: message.isDir
			}));
			setDocuments(documentsList);
		})
	}
    
    const loadUsers = () => {
		socket.on("client:listHosts", users => {
            if(users.length > 0)
				setHost(users[0])
			console.log(users)
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
