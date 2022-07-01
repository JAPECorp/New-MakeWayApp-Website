import Head from "next/head";

const Meta = (props) => {
    return (
        <Head>
            {/* pass props as title */}
            <title>{props.title}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta property="og:title" content={props.title} />
            <meta property="og:type" content="website" />
            <meta property="og:image" itemProp="image" content="https://i.ibb.co/dkDvVVd/img-2.jpg" />
            <meta property="og:description" content="Mande helps ambitious professionals like you to track their impact & growth and boost their career & income." />
            <meta property="og:site_name" content={props.title} />
            <meta property="og:image" content="https://i.ibb.co/dkDvVVd/img-2.jpg" />
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:title" content={props.title} />
            <meta name="twitter:image" content="https://i.ibb.co/dkDvVVd/img-2.jpg" />
            <meta property="og:url" content="https://mande.mycareerwheel.com" />
            <meta name="twitter:site" content="@theMandEapp" />
            <meta name="twitter:creator" content="@theMandEapp" />
            <meta property="twitter:description" content="Mande helps ambitious professionals like you to track their impact & growth amd boost their career & income." />
            <meta name="keywords" content="The Mande App, Track your achievements, Career journal" />
            <meta name="description" content="Mande helps ambitious professionals like you to track their impact & growth and boost their career & income." />
            <link rel='shortcut icon' href='/v.png' />

        </Head>
    );
}

export default Meta;