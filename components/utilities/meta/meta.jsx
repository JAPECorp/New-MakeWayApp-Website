import Head from "next/head";

const Meta = (props) => {
    return (
        <Head>
            {/* pass props as title */}
            <title>{props.title}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta property="og:title" content={props.title} />
            <meta property="og:type" content="website" />
            <meta property="og:image" itemProp="image" content="https://www.makewayapp.com/_next/image?url=%2Fwoman-car.webp&w=750&q=75" />
            <meta property="og:description" content="A free mobile application software that allows you the freedom to notify others on their phones to MAKEWAY for your car to move." />
            <meta property="og:site_name" content={props.title} />
            <meta property="og:image" content="https://i.ibb.co/dkDvVVd/img-2.jpg" />
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:title" content={props.title} />
            <meta name="twitter:image" content="https://twitter.com/MakeWay_app/header_photo" />
            <meta property="og:url" content="https://www.makewayapp.com/" />
            <meta name="twitter:site" content="@MakeWay_app" />
            <meta name="twitter:creator" content="@MakeWay_app" />
            <meta property="twitter:description" content="A free mobile application software that allows you the freedom to notify others on their phones to MAKEWAY for your car to move." />
            <meta name="keywords" content="Makeway App, Ping, Car, Traffic." />
            <meta name="description" content="A free mobile application software that allows you the freedom to notify others on their phones to MAKEWAY for your car to move." />
            <link rel='shortcut icon' href='/v.png' />

        </Head>
    );
}

export default Meta;