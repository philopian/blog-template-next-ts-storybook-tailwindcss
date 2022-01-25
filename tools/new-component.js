const fs = require('fs')
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

function templateContent(titleName) {
  const index = `export { default } from './${titleName}'`
  const tsx = `type Props = {
  message: string
  textColor?: string
}

const styles = {
  wrapper: 'bg-gray-100 border border-gray-200 dark:border-gray-700 rounded-md dark:bg-green-600 text-sm p-4',
}

export default function ${titleName}({
  message,
  textColor = 'white',
}: Props) {
  return (
    <div className={styles.wrapper}>
      <span style={{ color: textColor }}>{message} </span>
    </div>
  )
}
`

  const test = `import React from 'react'
import { render, screen } from '@testing-library/react'
import ${titleName} from './${titleName}'

describe('${titleName}', () => {
  test('should have welcome message', () => {
    render(<${titleName} message="helllo" />)
    const welcomeElement = screen.getByText(/helllo/)
    expect(welcomeElement).toBeInTheDocument()
  })
})
`

  const storybook = `import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import ${titleName} from './${titleName}'

export default {
  title: 'Components/${titleName}',
  component: ${titleName},
  argTypes: {
    textColor: { control: 'color' },
  },
} as ComponentMeta<typeof ${titleName}>

const Template: ComponentStory<typeof ${titleName}> = (args) => (
  <${titleName} {...args} />
)

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  message: '${titleName} ${titleName} ${titleName}',
}
`

  return { index, tsx, test, storybook }
}

rl.question('Give your component a name ? ', (titleName) => {
  console.log(` [Creating] ${titleName} component`)

  const folderName = `./components/${titleName}`
  if (fs.existsSync(folderName)) {
    console.log(' [ERROR] Looks like that folder already exists')
    rl.close()
  }

  // Make component folder
  fs.mkdirSync(folderName)

  // Make files
  const { index, tsx, test, storybook } = templateContent(titleName)
  fs.writeFileSync(`./components/${titleName}/index.tsx`, index)
  fs.writeFileSync(`./components/${titleName}/${titleName}.tsx`, tsx)
  fs.writeFileSync(`./components/${titleName}/${titleName}.test.tsx`, test)
  fs.writeFileSync(`./components/${titleName}/${titleName}.stories.tsx`, storybook)

  rl.close()
})

rl.on('close', function () {
  console.log(`\nCheckout ./components/ directory for your new files`)
  process.exit(0)
})
