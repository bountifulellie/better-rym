import { h, render } from 'preact'

import { forceQuerySelector, waitForElement } from '../../common/utils/dom'
import { Import } from './components/import'
import injectDateControls from './use-cases/date-controls'
import injectCatalogNumberControls from './use-cases/catalog-number-controls'
import injectLabelControls from './use-cases/label-controls'
import injectCreditsControls from './use-cases/credits-controls'
import injectFileUnderControls from './use-cases/file-under-controls'

const injectImport = async () => {
  const siblingElement = await waitForElement('.submit_step_header')
  const app = document.createElement('div')
  app.id = 'better-rym'
  siblingElement.before(app)
  render(<Import />, app)
}

const injectClearTracklist = async () => {
  const clearAll = await waitForElement('a#clearAll')

  const lengthClear = document.createElement('a')
  lengthClear.id = 'clearAllLengths'
  lengthClear.className = 'btn blue_btn btn_small rating_btn'
  lengthClear.href = 'javascript:void(0);'
  lengthClear.style.cssText = 'margin-left: 1em; visibility: visible;'
  lengthClear.textContent = 'clear lengths'

  lengthClear.addEventListener('click', () => {
    const advancedInputContainer = forceQuerySelector(document)('#tracks_adv')
    const isAdvanced =
      window.getComputedStyle(advancedInputContainer).display !== 'none'

    const advancedInput =
      forceQuerySelector<HTMLTextAreaElement>(document)('#track_advanced')

    if (!isAdvanced)
      forceQuerySelector<HTMLAnchorElement>(document)('#goAdvancedBtn').click()

    advancedInput.value = advancedInput.value
      .split('\n')
      .filter((line) => line.length > 0)
      .map((line) => [...line.split('|').slice(0, 2), ''].join('|'))
      .join('\n')

    if (!isAdvanced)
      forceQuerySelector<HTMLAnchorElement>(document)('#goSimpleBtn').click()
  })

  clearAll.after(lengthClear)
}

export const main = () =>
  Promise.all([
    injectImport(),
    injectClearTracklist(),
    injectFileUnderControls(),
    injectCreditsControls(),
    injectLabelControls(),
    injectCatalogNumberControls(),
    injectDateControls(),
  ])
