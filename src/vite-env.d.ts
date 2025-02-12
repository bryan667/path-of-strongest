interface ImportMetaEnv {
    VITE_API_URL: string;
    VITE_API_KEY: string;
    VITE_DEFAULT_ACCOUNT_NAME: string;
    VITE_DEFAULT_CHARACTER_NAME: string;
}

interface ImportMeta {
readonly env: ImportMetaEnv;
}