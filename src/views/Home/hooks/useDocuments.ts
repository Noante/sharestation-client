import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import axios from "axios";

const SOCKET_HOST: any = process.env.SOCKET_HOST || "http://localhost:3004";

/**
 *
 * @returns
 */
function useDocuments() {
	const [socket, setSocket] = useState<any>();

    const [token, setToken] = useState<string>("");
	const [users, setUsers] = useState([]);
    const [host, setHost] = useState<any>({
		username: "clientNode1"
	});
    const [documents, setDocuments] = useState([]);
    
    useEffect(() => {
        axios.post("http://localhost:3000/api/auth", {
            email: "teste@mail.com",
            password: "12345678"
        }).then((response) => {
            setToken(response.data.token);
        }).catch((error) => {
            console.error("An error has occurred on fetch auth API");
            console.error(error);
        })
    }, [])

    useEffect(() => {
        token && setSocket(io(SOCKET_HOST, {
            reconnection: true,
            auth: {
                token: token,
                username: "reactApp",
                type: "client"
            }
        }))
    }, [token])

	useEffect(() => {		
		if(socket && Object.keys(socket).length > 0){
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
		socket && host && listDir()
    }, [host]);

    const listDir = () => {
        socket.emit("host:listDir", {
			path: "/Users/caiomorais/Documents/Teste2/",
			from: socket.id,
			to: host.userID
		});
    }
	
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
		socket.on("client:listHosts", (users: any) => {
            if(users.length > 0)
				setHost(users[0])
            setUsers(users);
        });
    }

    const loadDownloadedFile = () => {
        const chunks: any = [];
		socket.on("client:downloadFile", (data: any) => {
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
    listDir,
	loadDownloadedFile,
	handleDownload
  };
}

export default useDocuments;
