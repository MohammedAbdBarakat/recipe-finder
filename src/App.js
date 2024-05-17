import { useState } from "react";
import SignInSystem from "./signInSystem";
import Welcome from "./Welcome";

function App() {

  let [userID , setUserID] = useState("-1");

  return (
      <div className="App">
        <div className="content">
            {userID == "-1" && <SignInSystem setUserID={setUserID} />}
            {userID !="-1" && <Welcome userID={userID} setUserID={setUserID} />}
        </div>
      </div>
    );
  }

export default App;