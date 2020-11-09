import React from "react";
import {
    Box,
    Button,
    Container,
    Grid,
    Heading,
    Image,
    Input,
    Label,
    Textarea,
} from "theme-ui";
import Head from "next/head";
// import dancingbaby from "../images/dancing-baby.gif";

const MyEpicPage = () => {
    return (
        <Container>
            <Head>
                <title>Swizec's epic page</title>
            </Head>
            <Heading sx={{ fontSize: [6, 5, 4] }}>Swizec's epic page</Heading>
            <Grid columns={[3, 2, 1]}>
                <Box>
                    <p>Welcome to my homepage, this is where the fun happens</p>
                </Box>
                <Box>
                    <Image src="/images/dancing-baby.gif" />
                </Box>
                <p>
                    Bacon ipsum dolor amet corned beef shank short loin meatball
                    turducken rump jerky meatloaf t-bone.{" "}
                    <b>Shank fatback buffalo</b> short loin tail kevin alcatra.
                    Spare ribs salami andouille, turducken meatloaf pig venison
                    tail ground round buffalo pork ham chislic bacon. Chuck
                    <em>meatball brisket short ribs</em>, venison chislic pork
                    chop buffalo flank. Doner turducken pig short loin. Pork
                    biltong shoulder meatball pork loin.
                </p>
                <form>
                    <Label sx={{ fontSize: [5, 4, 3] }}>
                        Sign my guestbook
                    </Label>
                    <Input placeholder="Name" />
                    <Textarea />
                    <Button type="submit">Send into the void</Button>
                </form>
            </Grid>
        </Container>
    );
};

export default MyEpicPage;
