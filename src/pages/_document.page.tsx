import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ReactElement } from 'react'

import { getCssText } from '../../stitches.config'

class MyDocument extends Document {
  render(): ReactElement {
    return (
      <Html lang='en'>
        <Head>
          {/* Enables CSS styling on SSR */}
          <style
            id='stitches'
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
