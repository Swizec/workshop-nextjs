import Head from "next/head";
import { Container } from "theme-ui";

export const Layout = ({ title, children }) => {
    return (
        <Container>
            <Head>
                <title>{title}</title>
            </Head>
            {children}
        </Container>
    );
};
