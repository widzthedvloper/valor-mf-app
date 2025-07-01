import React, {Suspense} from 'react';
// import ReactDOM from 'react-dom'; The new way to import createRoot:
import { createRoot } from "react-dom/client";
// import App from './containers/App';
import 'tachyons';
// import registerServiceWorker from './registerServiceWorker';
const App = React.lazy(() => import('./containers/App'));
import '@shared/styles.css';


const root = createRoot(document.getElementById('root'));
root.render(
<Suspense fallback={"loading..."}>
    <App />
</Suspense>
);


// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
