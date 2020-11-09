import { ThemeProvider } from "theme-ui";
import { future } from "@theme-ui/presets";

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider theme={future}>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
