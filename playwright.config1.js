// @ts-check
import { defineConfig, devices} from '@playwright/test';
import { trace } from 'node:console';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
  testDir: './tests',
 
  timeout: 60*1000,
   expect : {
    timeout: 5000,
   },
  reporter: 'html',

  projects:
  [
    {
      name:'safari',
      use: {
    
    browserName : 'webkit',
    headless : false,
    screenshot : 'off',
    trace : 'on' , //off, on
   //trace : 'retain-on-failure'
           },

    },
    {
        name:'Chrome',
      use: {
    
    browserName : 'Chrome',
    headless : true,
    screenshot : 'on',
    trace : 'retain-on-failure',
    viewport:{width:720, height:720}
           },
    }
  ]
  
  /* Configure projects for major browsers */
 
});

module.exports = config
