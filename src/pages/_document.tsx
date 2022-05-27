import Document,{Head, Html, Main, NextScript} from 'next/document'

export default class MyDocument extends Document {

    render() {
        return(
            <Html>
                <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <script src="https://kit.fontawesome.com/b298279f12.js" ></script>
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;500;600&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet"/>
                </Head>
                <body>
                   <Main />
                   <NextScript />
                </body>
            </Html>
        )
    }
}