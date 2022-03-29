import {useEffect, useState} from "react";

export default function useOffsetY () {
    const [offsetY, setOffsetY] = useState(0);

    const handleScroll = () => setOffsetY(window.pageXOffset);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return [offsetY, setOffsetY];
}