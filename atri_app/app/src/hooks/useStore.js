import create from "zustand";

// unsafe merge state
// and mew properties will added or existing properties will be changed
// but the type of value of the property must not change
function mergeState(baseState, newState) {
  if (
    typeof newState === "object" &&
    !Array.isArray(newState) &&
    newState !== null
  ) {
    const keys = Object.keys(newState);
    keys.forEach((key) => {
      // create a new key in base if not exists
      if (!(key in baseState)) {
        baseState[key] = {};
      }
      if (typeof newState[key] === "object" && !Array.isArray(newState[key]))
        mergeState(baseState[key], newState[key]);
      else baseState[key] = newState[key];
    });
  }
}

const useStore = create((set) => {
  return {
    setPage: (pageName, newState) =>
      set((state) => {
        const pageState = JSON.parse(JSON.stringify(state[pageName]));
        mergeState(pageState, newState);
        return { [pageName]: pageState };
      }),
  };
});

export function updateStoreStateFromController(pageName, newState) {
  useStore.getState().setPage(pageName, newState);
}

const desktopModeProps = {
  ...{
  "Home": {
    "Div7": {
      "callbacks": {}
    },
    "Flex6": {
      "callbacks": {}
    },
    "Flex7": {
      "callbacks": {}
    },
    "Flex9": {
      "callbacks": {}
    },
    "Flex10": {
      "callbacks": {}
    },
    "Flex11": {
      "callbacks": {}
    },
    "Flex12": {
      "callbacks": {}
    },
    "Div15": {
      "callbacks": {}
    },
    "Div14": {
      "callbacks": {}
    },
    "Flex21": {
      "callbacks": {}
    },
    "Div22": {
      "callbacks": {}
    },
    "Div23": {
      "callbacks": {}
    },
    "Div24": {
      "callbacks": {}
    },
    "Div25": {
      "callbacks": {}
    },
    "Flex13": {
      "callbacks": {}
    },
    "Div16": {
      "callbacks": {}
    },
    "Flex24": {
      "callbacks": {}
    },
    "Div34": {
      "callbacks": {}
    },
    "Div35": {
      "callbacks": {}
    },
    "Div36": {
      "callbacks": {}
    },
    "Div37": {
      "callbacks": {}
    },
    "Flex14": {
      "callbacks": {}
    },
    "Div18": {
      "callbacks": {}
    },
    "Flex23": {
      "callbacks": {}
    },
    "Div30": {
      "callbacks": {}
    },
    "Div31": {
      "callbacks": {}
    },
    "Div32": {
      "callbacks": {}
    },
    "Div33": {
      "callbacks": {}
    },
    "Flex15": {
      "callbacks": {}
    },
    "Div20": {
      "callbacks": {}
    },
    "Flex22": {
      "callbacks": {}
    },
    "Div26": {
      "callbacks": {}
    },
    "Div27": {
      "callbacks": {}
    },
    "Div28": {
      "callbacks": {}
    },
    "Div29": {
      "callbacks": {}
    },
    "Flex25": {
      "callbacks": {}
    },
    "Flex26": {
      "callbacks": {}
    },
    "Flex29": {
      "callbacks": {}
    },
    "Div48": {
      "callbacks": {}
    },
    "Div50": {
      "callbacks": {}
    },
    "Flex30": {
      "callbacks": {}
    },
    "Div46": {
      "callbacks": {}
    },
    "Flex31": {
      "callbacks": {}
    },
    "Flex33": {
      "callbacks": {}
    },
    "Div56": {
      "callbacks": {}
    },
    "Div57": {
      "callbacks": {}
    },
    "Div58": {
      "callbacks": {}
    },
    "Flex40": {
      "callbacks": {}
    },
    "Flex34": {
      "callbacks": {}
    },
    "Div98": {
      "callbacks": {}
    },
    "Div99": {
      "callbacks": {}
    },
    "Div100": {
      "callbacks": {}
    },
    "Div101": {
      "callbacks": {}
    },
    "Div102": {
      "callbacks": {}
    },
    "Div103": {
      "callbacks": {}
    },
    "Div104": {
      "callbacks": {}
    },
    "Div105": {
      "callbacks": {}
    },
    "Flex45": {
      "callbacks": {}
    },
    "Flex46": {
      "callbacks": {}
    },
    "Div94": {
      "callbacks": {}
    },
    "Div95": {
      "callbacks": {}
    },
    "Flex47": {
      "callbacks": {}
    },
    "Div71": {
      "callbacks": {}
    },
    "Div72": {
      "callbacks": {}
    },
    "Div73": {
      "callbacks": {}
    },
    "Flex48": {
      "callbacks": {}
    },
    "Div89": {
      "callbacks": {}
    },
    "Div90": {
      "callbacks": {}
    },
    "Div91": {
      "callbacks": {}
    },
    "Flex49": {
      "callbacks": {}
    },
    "Div86": {
      "callbacks": {}
    },
    "Div87": {
      "callbacks": {}
    },
    "Div88": {
      "callbacks": {}
    },
    "Flex50": {
      "callbacks": {}
    },
    "Div83": {
      "callbacks": {}
    },
    "Div84": {
      "callbacks": {}
    },
    "Div85": {
      "callbacks": {}
    },
    "Flex51": {
      "callbacks": {}
    },
    "Div74": {
      "callbacks": {}
    },
    "Div75": {
      "callbacks": {}
    },
    "Div76": {
      "callbacks": {}
    },
    "Div69": {
      "callbacks": {}
    },
    "Flex54": {
      "callbacks": {}
    },
    "Div107": {
      "callbacks": {}
    },
    "Flex55": {
      "callbacks": {}
    },
    "Div108": {
      "callbacks": {}
    },
    "Div109": {
      "callbacks": {}
    },
    "Div110": {
      "callbacks": {}
    },
    "Div111": {
      "callbacks": {}
    },
    "Div112": {
      "callbacks": {}
    },
    "Div113": {
      "callbacks": {}
    },
    "Div114": {
      "callbacks": {}
    },
    "Div12": {
      "callbacks": {}
    },
    "TextBox13": {
      "custom": {
        "text": "Past Projects"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div38": {
      "callbacks": {}
    },
    "Div51": {
      "callbacks": {}
    },
    "Div106": {
      "callbacks": {}
    },
    "TextBox2": {
      "custom": {
        "text": "WebFolio X"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox3": {
      "custom": {
        "text": "Pages"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox4": {
      "custom": {
        "text": "Contact"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox6": {
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox9": {
      "custom": {
        "text": "Portfolio"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image3": {
      "custom": {
        "alt": "Car",
        "src": "/app-assets/shopping-bag.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox10": {
      "custom": {
        "text": "I'm Sam, and I design user interfaces for startups"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox11": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ad minim veniam quis nostrud"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image5": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/img-1.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox23": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ad minim veniam quis nostrud."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox22": {
      "custom": {
        "text": "Website Design for finance startup"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox21": {
      "custom": {
        "text": "AppX      —    Web Design "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link2": {
      "custom": {
        "text": "View Project",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image9": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/right.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image6": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/img-4.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image12": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/right.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link5": {
      "custom": {
        "text": "View Project",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox30": {
      "custom": {
        "text": "Education X — Illustrations"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox31": {
      "custom": {
        "text": "Illustration Design for Education X"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox32": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ad minim veniam quis nostrud."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image7": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/img-3.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image11": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/right.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link4": {
      "custom": {
        "text": "View Project",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox27": {
      "custom": {
        "text": "ConsultingX — Web Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox28": {
      "custom": {
        "text": "Website Redesign for ConsultingX"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox29": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ad minim veniam quis nostrud."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image8": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/img-2.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image10": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/right.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link3": {
      "custom": {
        "text": "View Project",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox24": {
      "custom": {
        "text": "Technology — Branding"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox25": {
      "custom": {
        "text": "Brand refresh for Technology App"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox26": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ad minim veniam quis nostrud."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox33": {
      "custom": {
        "text": "Browse Portfolio"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image13": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/right.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox45": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing, sed do eiusmod tempor incididunt ut labor."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox44": {
      "custom": {
        "text": "Who’s behind all this great work?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link13": {
      "custom": {
        "text": "About Me",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image20": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/right.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image21": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/img-girl.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image34": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/About%20Me%20Img.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox50": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet tragon consectetur adipiscing elit mattis faucibus odio feugiat arcu scelerisque"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox53": {
      "custom": {
        "text": "WebFolio X"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Input1": {
      "custom": {
        "value": "",
        "placeholder": "Enter your email"
      },
      "callbacks": {}
    },
    "Link16": {
      "custom": {
        "text": "Subscribe",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image23": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/right.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox80": {
      "custom": {
        "text": "Utility Pages"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox81": {
      "custom": {
        "text": "Start Here"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox82": {
      "custom": {
        "text": "Style Guide"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox83": {
      "custom": {
        "text": "404 Not Found"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox88": {
      "custom": {
        "text": "Password Protect"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox85": {
      "custom": {
        "text": "Licenses"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox86": {
      "custom": {
        "text": "Changelog"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox87": {
      "custom": {
        "text": "More Templates"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div96": {
      "callbacks": {}
    },
    "TextBox79": {
      "custom": {
        "text": "Product"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox78": {
      "custom": {
        "text": "About V3"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox63": {
      "custom": {
        "text": "Home V1"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox64": {
      "custom": {
        "text": "Blog V1"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox65": {
      "custom": {
        "text": "Portfolio"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox77": {
      "custom": {
        "text": "Contact"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox76": {
      "custom": {
        "text": "Shop"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox75": {
      "custom": {
        "text": "About  V2"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox74": {
      "custom": {
        "text": "Newsletter"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox73": {
      "custom": {
        "text": "Blog Post"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox72": {
      "custom": {
        "text": "About V1"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox71": {
      "custom": {
        "text": "Past Clients"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox70": {
      "custom": {
        "text": "Blog V3"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox69": {
      "custom": {
        "text": "Home V3"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox66": {
      "custom": {
        "text": "Home V2"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox67": {
      "custom": {
        "text": "Blog V2"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox68": {
      "custom": {
        "text": "Case Study"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox62": {
      "custom": {
        "text": "Menu"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox90": {
      "custom": {
        "text": "Copyright © Webfolio X | Designed by BRIX Templates - Powered by Webflow (Cloned by Anadee)"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image24": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/facebook-app-symbol.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image25": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/twitter.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image26": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/instagram.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image27": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/linkedin.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image28": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/youtube.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image29": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/dribble.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image30": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/behance.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    }
  }
}};

useStore.setState(desktopModeProps);

export default useStore;
