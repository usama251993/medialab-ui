import { Injectable, isDevMode, Renderer2, RendererFactory2 } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class AppStyleService {

  // https://medium.com/@svenbudak/how-to-implement-dark-light-mode-in-angular-mateiral-with-prefers-color-scheme-ce3e980e2ea5
  // line:38 is the point of interest when theme toggling comes into play

  private _renderer: Renderer2
  private _color: string


  constructor(
    private _rendererFactory: RendererFactory2
  ) {
    this._renderer = this._rendererFactory.createRenderer(null, null)
  }

  private _detectPreferredColorScheme() {
    // if (window.matchMedia('(prefers-color-scheme)').media !== 'not all') 
    //   this._color = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    // else 
    //   this._color = 'dark'
  }

  private _getColorScheme() {
    // if (localStorage.getItem(COLOR_THEME.CURRENT_THEME))
    this._color = localStorage.getItem(COLOR_THEME.CURRENT_THEME)
    // else this._detectPreferredColorScheme()
  }

  private _setColorScheme(_: string) {
    localStorage.setItem(COLOR_THEME.CURRENT_THEME, _)
  }

  public load(): void {
    // this._getColorScheme() // uncomment this to get started
    // this._color = isDevMode() ? COLOR_THEME.DARK : COLOR_THEME.LIGHT
    this._renderer.addClass(document.body, `${MAT_CLASSES.PREFIX}-${MAT_CLASSES.TYPOGRAPHY}`)
    this._renderer.addClass(document.body, `${MAT_CLASSES.PREFIX}-${MAT_CLASSES.BACKGROUND}`)
    this._renderer.addClass(document.body, `${COLOR_THEME.PREFIX}-${COLOR_THEME.LIGHT}`)
    this._renderer.addClass(document.body, `${MAT_CLASSES.DEFAULT_BODY}`)
    // this._renderer.addClass(document.body, `${COLOR_THEME.PREFIX}-${isDevMode() ? COLOR_THEME.DARK : COLOR_THEME.LIGHT}`)
  }

  update(_: string) {
    this._setColorScheme(_)
    this._renderer.removeClass(document.body, `${COLOR_THEME.PREFIX}-${isDevMode() ? COLOR_THEME.DARK : COLOR_THEME.LIGHT}`)
    this._renderer.addClass(document.body, `${COLOR_THEME.PREFIX}-${_}`)
  }

  currentTheme(): string {
    return this._color
  }

}

enum COLOR_THEME {
  PREFIX = 'app',
  DARK = 'dark',
  LIGHT = 'light',
  CURRENT_THEME = 'currentTheme'
}

enum MAT_CLASSES {
  PREFIX = 'mat',
  TYPOGRAPHY = 'typography',
  BACKGROUND = 'app-background',
  DEFAULT_BODY = 'body-1'
}
