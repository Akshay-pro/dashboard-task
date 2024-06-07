import {
    Route,
    Routes,
    BrowserRouter,
} from "react-router-dom";
import { Login, Signup, Dashboard, DataManager } from "./pages";
import { useAppSelector } from "./hooks/storeHook";


const App = () => {
    const { user } = useAppSelector((state) => state.auth);

    return (
        <>
            <BrowserRouter>
                <Routes>
                    {Boolean(!user) && (
                        <>
                            <Route path="/" element={<Signup />} />
                            <Route path="/login" element={<Login />} />
                        </>
                    )}
                    
                    <Route path="/dashboard" element={<Dashboard />}>
                        <Route path="data-manager" element={<DataManager />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};
export default App;
