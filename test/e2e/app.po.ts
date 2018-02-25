import { browser, by, element } from 'protractor'

export class AppPage {
  navigateTo(url: string = '/') {
    return browser.get(url)
  }

  getElementText(elementPath: string) {
    return element(by.css(elementPath)).getText()
  }
}
