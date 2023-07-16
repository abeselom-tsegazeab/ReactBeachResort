import { createClient } from "contentful";
export default createClient({
    space: import.meta.env.VITE_REACT_APP_API_SPACE,
    accessToken: import.meta.env.VITE_REACT_APP_ACCESS_TOKEN,
})

// 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