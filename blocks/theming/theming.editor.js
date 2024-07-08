import { MessagesEvents } from '../../scripts/editor.js';
import { publish } from '../../scripts/pubsub.js';
import Theming from './theming.js';

let listener = false;
let themeInstance = null;

export default function config() {
  // init editor if message from parent
  if (!listener) {
    [themeInstance] = window.raqnInstances[Theming.name.toLowerCase()];

    publish(
      MessagesEvents.theme,
      { name: 'theme', data: themeInstance.themeJson },
      { usePostMessage: true, targetOrigin: '*' },
    );

    listener = true;
    window.addEventListener('message', (e) => {
      if (e && e.data) {
        const { message, params } = e.data;
        if (message && message === MessagesEvents.themeUpdate) {
          [themeInstance] = window.raqnInstances[Theming.name.toLowerCase()];
          const { name, data } = params;
          const row = Object.keys(data).map((key) => data[key]);
          themeInstance.defineVariations(themeInstance.readValue(row, name));
          themeInstance.styles();
        }
      }
    });
  }
  return {
    variables: {},
  };
}
