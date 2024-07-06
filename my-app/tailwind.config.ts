import flowbitePlugin from 'flowbite/plugin'

import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],

	// theme: {
	// 	extend: {
    //   colors: {
    //     // flowbite-svelte
    //     primary: {
    //       50: '#FFF5F2',
    //       100: '#FFF1EE',
    //       200: '#FFE4DE',
    //       300: '#FFD5CC',
    //       400: '#FFBCAD',
    //       500: '#FE795D',
    //       600: '#EF562F',
    //       700: '#EB4F27',
    //       800: '#CC4522',
    //       900: '#A5371B'
    //     }
    //   }
    // }
	// },

	theme: {
        extend: {
      colors: {
        // flowbite-svelte
        primary: {
          50: '#F2F8FF', // Light blue
          100: '#E5F3FF',
          200: '#CCE5FF',
          300: '#B3D7FF', // Lighter blue
          400: '#99C9FF',
          500: '#7FB3FF', // Medium blue
          600: '#669CFF',
          700: '#4C85FF', // Darker blue
          800: '#336EFF',
          900: '#1A56FF'  // Dark blue
        }
      }
    }
    },

	plugins: [flowbitePlugin]
} as Config;