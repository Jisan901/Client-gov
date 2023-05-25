import { useEffect } from "react";
function useTitle(title) {
    useEffect(() => {
        document.title = title+' - Influencer products';
    }, [title]);
}

export default useTitle;