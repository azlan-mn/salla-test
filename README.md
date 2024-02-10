# salla-test
This is short example of Playwright/Typescript for the Salla e-commerce platform.

# Install
Clone the repo and init.
```
git clone git@github.com:azlan-mn/salla-test.git
npm install
```

# Execute
The test expects SALLAUSERNAME and SALLAPASSWORD in the environment variables:
```
export SALLAUSERNAME='the-username'
export SALLAPASSWORD='the-password'
```

Playwright can then be executed the usual way.
```
npx playwright test --ui
```

