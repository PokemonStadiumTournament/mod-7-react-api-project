import { useEffect, useState } from "react";
import MainComponent from "../components/MainComponent";

const MainPage = () => {
    const [component, setComponent] = useState();

    useEffect(() => {
        const timedComponent = setTimeout(() => {
            setComponent(<MainComponent/>);
        }, 1000);
        return () => clearTimeout(timedComponent);
    }, [])

    return (
        component
    );
};

export default MainPage;