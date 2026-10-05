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
  use: {
    
    browserName : 'chromium',
    baseURL: 'https://rahulshettyacademy.com/client', 
    username: 'rsp@test.com',
    password: 'P@ss1234',
    headless : false,
    screenshot : 'on',
    //video : 'retain-on-failure',
    trace : 'on' , //off, on
   //trace : 'retain-on-failure'
  },
  /* Configure projects for major browsers */
 
});


module.exports = config
