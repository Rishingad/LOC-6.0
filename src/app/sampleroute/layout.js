import { Inter } from 'next/font/google'
import '../globals.css'



const inter = Inter({ subsets: ['latin'] })
// import Head from 'next/head'
export const metadata = {
    title: 'Lines Of Code 6.0',
    description: 'Lines Of Code 6.0 is an international hackathon hosted by DJSCE ACM',
}
// common code in layout such as navbar across different pages
export default function SampleLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link href='https://fonts.googleapis.com/css?family=Monoton' rel='stylesheet'></link>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Rowdies&display=swap" rel="stylesheet" />
            </head>
            <body className={inter.className}>
                {children}
            </body>
        </html>

    )
}
