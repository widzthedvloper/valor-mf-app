import React, {Suspense} from "react";
const RemoteApp = React.lazy(() => import("remote/App"));
import '@shared/styles.css';

const App = () => {
  return (
    <div>
      <Suspense fallback={"loading..."}>
        <RemoteApp/>
      </Suspense>
    </div>)
}


export default App;
