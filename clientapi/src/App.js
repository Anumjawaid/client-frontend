import { useEffect } from 'react';
import AppRouter from './Router';
import { store } from './Store/store'
import { Provider } from 'react-redux'
// import {io} from "socket.io-client";
// const socket = io.connect("http://localhost:3001");
function App() {
    // useEffect(() => {
    //   socket.on("getSocketId", data => {
    //    console.log(data)
    //   });
    //   socket.emit('click',data=>{
    //     console.log("ckick")
    //   })
    // }, []);
    // useEffect(() => {
    //   socket.on("getSocketId", data => {
    //    console.log(data,"ggg")
    //   });
      
    // },);
  return (
    <Provider store={store} >
  <AppRouter />
  </Provider>
  );
}

export default App;