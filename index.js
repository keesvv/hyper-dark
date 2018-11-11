const backgroundColor = '#002b36'
const foregroundColor = '#9db3b7'
const cursorColor = 'rgba(106, 247, 240, 0.5)'
const borderColor = 'transparent'

const colors = {
  lightBlack:     '#8a979b',
  black:          '#073642',
  lightGreen:     '#42f4aa',
  lightYellow:    '#657b83',
  lightBlue:      '#75c8ef',
  lightCyan:      '#7affff',
  white:          '#fffaef',
  lightWhite:     '#fdf6e3',
  yellow:         '#ceba08',
  lightRed:       '#cb4b16',
  red:            '#dc322f',
  magenta:        '#d33682',
  lightMagenta:   '#6c71c4',
  blue:           '#268bd2',
  cyan:           '#2aa198',
  green:          '#74b201'
}



exports.decorateConfig = config => {

  return Object.assign({}, config, {
    foregroundColor,
    backgroundColor,
    borderColor,
    cursorColor,
    colors,
    termCSS: `
      ${config.termCSS || ''}
    `,
    css: `
      ${config.css || ''}
      * {
      	text-rendering: optimizeLegibility;
        font-weight: 500;
      }
      .tabs_list {
      	border: 0;
      }
      .tabs_nav {
      	background-color: #001f27;
      }
      .tab_tab {
        color: ${foregroundColor};
        background-color: #001f27;
				border-color: ${borderColor};
      }
      .tab_tab:before {
      	border: 0;
      }
      .tab_tab.tab_active {
        border: transparent;
        font-weight: bold;
        color: #b3b3b3;
        background-color: ${backgroundColor};
      }
      .splitpane_divider {
      	background-color: #001f27;
      }
    `
  })
}
