import { useEffect, useState } from "react";
import MainComponent from "../components/MainComponent";
import Loading from "../components/loading";

const MainPage = () => {
    const [component, setComponent] = useState(<Loading/>);

    useEffect(() => {
        setTimeout(() => {
            setComponent(<MainComponent/>);
        }, 1000);
    }, [])

    return (
        component
    );
};

export default MainPage;