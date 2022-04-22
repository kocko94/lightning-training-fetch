/*
 * If not stated otherwise in this file or this component's LICENSE file the
 * following copyright and licenses apply:
 *
 * Copyright 2020 Metrological
 *
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Lightning, Utils } from '@lightningjs/sdk'
import { getPerson } from './lib/api'

export default class App extends Lightning.Component {
  static getFonts() {
    return [{ family: 'Regular', url: Utils.asset('fonts/Roboto-Regular.ttf') }]
  }

  static _template() {
    return {
      Background: {
        rect: true,
        w: 1920,
        h: 1080,
        color: 0xfffbb03b,
      },
      Results: {
        rect: true,
        color: 0xff808080,
        flex: {
          direction: 'column',
          padding: 20,
        },
        children: [],
      },
    }
  }

  async _init() {
    let data = await getPerson()

    const people = data.results.map(person => {
      return {
        text: {
          text: person.name,
        },
      }
    })

    this.tag('Results').patch({
      children: people,
    })
    // this.tag('Results').children = pData
  }
}
