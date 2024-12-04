// src/app/layout.js

/*import { Providers } from './providers'

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}*/

'use client';

import { ChakraProvider } from '@chakra-ui/react';

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <ChakraProvider>
                    {children}
                </ChakraProvider>
            </body>
        </html>
    );
}
