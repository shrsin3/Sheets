import "./style.css";

import { LocaleType, Univer, UniverInstanceType, Tools} from "@univerjs/core";
import { defaultTheme } from "@univerjs/design";
import { UniverDocsPlugin } from "@univerjs/docs";
import { UniverDocsUIPlugin } from "@univerjs/docs-ui";
import { UniverFormulaEnginePlugin } from "@univerjs/engine-formula";
import { UniverRenderEnginePlugin } from "@univerjs/engine-render";
import { UniverSheetsPlugin } from "@univerjs/sheets";
import { UniverSheetsFormulaPlugin } from "@univerjs/sheets-formula";
import { UniverSheetsUIPlugin } from "@univerjs/sheets-ui";
import { UniverUIPlugin } from "@univerjs/ui";
import '@univerjs/sheets-conditional-formatting-ui/lib/index.css';


/**
 * The ability to import locales from virtual modules and automatically import styles is provided by Univer Plugins. For more details, please refer to: https://univer.ai/guides/sheet/advanced/univer-plugins.
 * If you encounter issues while using the plugin or have difficulty understanding how to use it, please disable Univer Plugins and manually import the language packs and styles.
 * 
 * 【从虚拟模块导入语言包】以及【自动导入样式】是由 Univer Plugins 提供的能力，详情参考：https://univer.ai/zh-CN/guides/sheet/advanced/univer-plugins
 * 如果您在使用该插件的时候出现了问题，或者无法理解如何使用，请禁用 Univer Plugins，并手动导入语言包和样式
 */
// import { zhCN, enUS } from 'univer:locales'
import SheetsConditionalFormattingUIEnUS from '@univerjs/sheets-conditional-formatting-ui/locale/en-US';
import {UniverSheetsConditionalFormattingUIPlugin} from "@univerjs/sheets-conditional-formatting-ui";

const univer = new Univer({
  theme: defaultTheme,
  locale: LocaleType.EN_US,
  locales: {
    [LocaleType.EN_US]: Tools.deepMerge(
          SheetsConditionalFormattingUIEnUS
      ),
  },
});

univer.registerPlugin(UniverRenderEnginePlugin);
univer.registerPlugin(UniverFormulaEnginePlugin);
univer.registerPlugin(UniverSheetsConditionalFormattingUIPlugin);

univer.registerPlugin(UniverUIPlugin, {
  container: 'app',
});

univer.registerPlugin(UniverDocsPlugin, {
  hasScroll: false,
});
univer.registerPlugin(UniverDocsUIPlugin);

univer.registerPlugin(UniverSheetsPlugin);
univer.registerPlugin(UniverSheetsUIPlugin);
univer.registerPlugin(UniverSheetsFormulaPlugin);

// create univer sheet instance
univer.createUnit(UniverInstanceType.UNIVER_SHEET, {
  "id": "gyI0JO",
  "sheetOrder": [
      "RSfWjJFv4opmE1JaiRj80"
  ],
  "name": "",
  "appVersion": "0.1.11",
  "locale": "enUS",
  "styles": {},
  "sheets": {
      "RSfWjJFv4opmE1JaiRj80": {
          "id": "RSfWjJFv4opmE1JaiRj80",
          "name": "Sheet 1",
          "tabColor": "",
          "hidden": 0,
          "rowCount": 30,
          "columnCount": 10,
          "zoomRatio": 4,
          "freeze": {
              "startRow": -1,
              "startColumn": -1,
              "ySplit": 0,
              "xSplit": 0
          },
          "scrollTop": 0,
          "scrollLeft": 0,
          "defaultColumnWidth": 73,
          "defaultRowHeight": 23,
          "mergeData": [],
          "cellData": {
              0: {
                  // first column
                  0: { v: 'S. No.',
                        s: {
                            fs: 15,
                            tb: false,
                            bl: 1
                            }
                        },
                  1: { v: 'List of things to To-Do',
                      s: {
                          fs: 15,
                          tb: true,
                          bl: 1
                      }
                  },
                  2: { v: 'Duration for task completion',
                      s: {
                          fs: 15,
                          tb: true,
                          bl: 1
                      }
                  },
              },
              1: {
                  // first column
                  0: { v: '8',
                      s: {
                          fs: 12,
                          tb: false
                      }
                  },
                  1: { v: 'Exercise',
                      s: {
                          fs: 12,
                          tb: true
                      }
                  },
                  2: { v: 0.5,
                      t: 2,
                      s: {
                          fs: 12,
                          tb: true
                      }
                  },
              },
              2: {
                  // first column
                  0: { v: '#######',
                      s: {
                          fs: 12,
                          tb: false
                      }
                  },
                  1: { v: '######',
                      s: {
                          fs: 12,
                          tb: true
                      }
                  },
                  2: { v: '##########',
                      s: {
                          fs: 12,
                          tb: true
                      }
                  },
              },
              3: {
                  // first column
                  0: { v: '4',
                      s: {
                          fs: 12,
                          tb: false
                      }
                  },
                  1: { v: 'Work',
                      s: {
                          fs: 12,
                          tb: true
                      }
                  },
                  2: { v: 4.25,
                      t: 2,
                      s: {
                          fs: 12,
                          tb: true
                      }
                  },
              },
              4: {
                  // first column
                  0: { v: '1',
                      s: {
                          fs: 12,
                          tb: false
                      }
                  },
                  1: { v: 'Morning Routine',
                      s: {
                          fs: 12,
                          tb: true
                      }
                  },
                  2: { v: 1.5,
                      t: 2,
                      s: {
                          fs: 12,
                          tb: true
                      }
                  },
              },
              5: {
                  // first column
                  0: { v: '9',
                      s: {
                          fs: 12,
                          tb: false
                      }
                  },
                  1: { v: 'Freshen-Up',
                      s: {
                          fs: 12,
                          tb: true
                      }
                  },
                  2: { v: 0.5,
                      t: 2,
                      s: {
                          fs: 12,
                          tb: true
                      }
                  },
              },
              6: {
                  // first column
                  0: { v: '#######',
                      s: {
                          fs: 12,
                          tb: false
                      }
                  },
                  1: { v: '######',
                      s: {
                          fs: 12,
                          tb: true
                      }
                  },
                  2: { v: '##########',
                      s: {
                          fs: 12,
                          tb: true
                      }
                  },
              },
              7: {
                  // first column
                  0: { v: '3',
                      s: {
                          fs: 12,
                          tb: false
                      }
                  },
                  1: { v: 'Commute',
                      s: {
                          fs: 12,
                          tb: true
                      }
                  },
                  2: { v: 0.25,
                      t: 2,
                      s: {
                          fs: 12,
                          tb: true
                      }
                  },
              },
              8: {
                  // first column
                  0: { v: '5',
                      s: {
                          fs: 12,
                          tb: false
                      }
                  },
                  1: { v: 'Lunch',
                      s: {
                          fs: 12,
                          tb: true
                      }
                  },
                  2: { v: 1,
                      t: 2,
                      s: {
                          fs: 12,
                          tb: true
                      }
                  },
              },
              9: {
                  // first column
                  0: { v: '10',
                      s: {
                          fs: 12,
                          tb: false
                      }
                  },
                  1: { v: 'Dinner',
                      s: {
                          fs: 12,
                          tb: true
                      }
                  },
                  2: { v: 1,
                      t: 2,
                      s: {
                          fs: 12,
                          tb: true
                      }
                  },
              },
              10: {
                  // first column
                  0: { v: '7',
                      s: {
                          fs: 12,
                          tb: false
                      }
                  },
                  1: { v: 'Walk',
                      s: {
                          fs: 12,
                          tb: true
                      }
                  },
                  2: { v: 0.5,
                      t: 2,
                      s: {
                          fs: 12,
                          tb: true
                      }
                  },
              },
              11: {
                  // first column
                  0: { v: '2',
                      s: {
                          fs: 12,
                          tb: false
                      }
                  },
                  1: { v: 'Breakfast',
                      s: {
                          fs: 12,
                          tb: true
                      }
                  },
                  2: { v: 0.5,
                      t: 2,
                      s: {
                          fs: 12,
                          tb: true
                      }
                  },
              },
              12: {
                  // first column
                  0: { v: '6',
                      s: {
                          fs: 12,
                          tb: false
                      }
                  },
                  1: { v: 'Work',
                      s: {
                          fs: 12,
                          tb: true
                      }
                  },
                  2: { v: 3,
                      t: 2,
                      s: {
                          fs: 12,
                          tb: true
                      }
                  },
              },
          },
          "rowData": {},
          "columnData": {
              "0": {
                  "w": 125,
                  "hd": 0
              },
              "1": {
                  "w": 50,
                  "hd": 0
              },
              "2": {
                  "w": 20,
                  "hd": 0
              },
              "3": {
                  "w": 125,
                  "hd": 0
              },
              "4": {
                  "w": 125,
                  "hd": 0
              },
              "5": {
                  "w": 125,
                  "hd": 0
              },
              "6": {
                  "w": 125,
                  "hd": 0
              },
              "7": {
                  "w": 125,
                  "hd": 0
              },
              "8": {
                  "w": 125,
                  "hd": 0
              },
              "9": {
                  "w": 125,
                  "hd": 0
              }
          },
          "showGridlines": 1,
          "rowHeader": {
              "width": 46,
              "hidden": 0
          },
          "columnHeader": {
              "height": 20,
              "hidden": 0
          },
          "selections": [
              "A1"
          ],
          "rightToLeft": 0
      }
  },
  "resources": [
      {
          "name": "SHEET_DEFINED_NAME_PLUGIN",
          "data": ""
      }
  ]
}
);
