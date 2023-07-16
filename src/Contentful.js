import { createClient } from "contentful";
export default createClient({
    space: import.meta.env.VITE_REACT_APP_API_SPACE,
    accessToken: import.meta.env.VITE_REACT_APP_ACCESS_TOKEN,
})

// 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