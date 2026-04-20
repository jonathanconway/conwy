




## Requirements [^requirements]

- [ ] Ensure all and only the original requirements satisfied.<br /> #general--requirements #nfr--correctness
- [ ] Ensure non-functional requirements addressed, correctly applied and properly prioritised.<br />For example: in some projects, correctness is more important than performance. Or scalability is not a concern.<br /> #general--requirements
- [ ] For changes that affect many execution paths, performance may be more critical, as slowness will have a massive impact.<br /> #general--requirements
- [ ] Don't build features not explicitly documented in requirements.<br /> When in doubt, ask for clarification and/or update requirements.<br /> #general--requirements

[^requirements]: Requirements items in this checklist cover requirements as they apply to front end development tasks.




## Solution design [^solution-design]

- [ ] Keep it simple, don't over-engineer.<br /> #general--solution-design
- [ ] Check that the solution design you're using is up-to-date.<br /> #general--solution-design
- [ ] Perform impact analysis.<br />Measure how big the impact is. How many features, components, pages, products, apps, etc it impacts.<br />[Blog: Organizing Your Code to Minimize the 'Blast Radius'](https://brad.westness.cc/2024/04/07/organizing-your-code-to-minimize-the-blast-radius/)<br /> #general--solution-design
- [ ] Longevity of the feature.<br />Check if there a start/end date. Perhaps it is seasonal or otherwise periodic. Check if there is a plan for removal.<br /> #general--solution-design #nfr--maintainability
- [ ] Inherent vs accidental complexity.<br />Try to find a simpler solution.<br /> #general--solution-design #nfr--readability #nfr--maintainability
- [ ] Don't rely on assumptions that haven't been tested and verified.<br /> #general--solution-design #nfr--correctness

[^solution-design]: Solution design in this checklist covers solution design as it applies to front end development tasks.




## Architecture [^architecture]

- [ ] Codebase<br />One codebase tracked in revision control, many deploys<br />[Article: The 12 Factor App - Codebase](https://12factor.net/codebase)<br /> #general--architecture
- [ ] Dependencies<br />Explicitly declare and isolate dependencies<br />[Article: The 12 Factor App - Dependencies](https://12factor.net/dependencies)<br /> #general--architecture
- [ ] Config<br />Store config in the environment<br />[Article: The 12 Factor App - Config](https://12factor.net/config)<br /> #general--architecture
- [ ] Backing services<br />Treat backing services as attached resources<br />[Article: The 12 Factor App - Backing services](https://12factor.net/backing-services)<br /> #general--architecture
- [ ] Build, release, run<br />Strictly separate build and run stages<br />[Article: The 12 Factor App - Build, release, run](https://12factor.net/build-release-run)<br /> #general--architecture
- [ ] Processes<br />Execute the app as one or more stateless processes<br />[Article: The 12 Factor App - Processes](https://12factor.net/processes)<br /> #general--architecture
- [ ] Port binding<br />Export services via port binding<br />[Article: The 12 Factor App - Port binding](https://12factor.net/port-binding)<br /> #general--architecture
- [ ] Concurrency<br />Scale out via the process model<br />[Article: The 12 Factor App - Concurrency](https://12factor.net/concurrency)<br /> #general--architecture
- [ ] Disposability<br />Maximize robustness with fast startup and graceful shutdown<br />[Article: The 12 Factor App - Disposability](https://12factor.net/disposability)<br /> #general--architecture
- [ ] Dev/prod parity<br />Keep development, staging, and production as similar as possible<br />[Article: The 12 Factor App - Dev/prod parity](https://12factor.net/dev-prod-parity)<br /> #general--architecture
- [ ] Logs<br />Treat logs as event streams<br />[Article: The 12 Factor App - Logs](https://12factor.net/logs)<br /> #general--architecture
- [ ] Admin processes<br />Run admin/management tasks as one-off processes<br />[Article: The 12 Factor App - Admin processes](https://12factor.net/admin-processes)<br /> #general--architecture

[^architecture]: Architecture items in this checklist relate to code that influences, or is influenced by, architecture decisions.




{/*  */}




## State [^state]

- [ ] Choose appropriate state management facility, considering all available options.<br />Scoped variable, Global variable, Component state, Context state, Global state, URL, Local/session storage, In-browser database, Server-side.<br /> #general--state
- [ ] Represent state to the user.<br />For example: URL path/querystring.<br /> #general--state
- [ ] Keep on server state that is sensitive or otherwise belongs there.<br /> #general--state
- [ ] Avoid contradictions or inconsistencies in state if possible.<br />At least, within the same state structure. Clearly document any contradictions.<br /> #general--state
- [ ] Avoid duplicated or redundant state.<br />Use calculated/memoized fields.<br /> #general--state

[^state]: State refers to any kind of state management in the application.




## Errors [^errors]

- [ ] Handle expected errors only.<br /> #general-errors
- [ ] Use global error handling to ensure exceptions don't break the whole app and block the user.<br /> #general-errors
- [ ] Don't handle exceptions without re-throwing unless it's necessary.<br />For example: a bug in the API that can't be resolved just yet. If necessary, thoroughly document and have a plan to fix up in future. If an exception does happen, we want to let it bubble up and be handled by the general exception handling mechanism, such as an error boundary at the app level.<br /> #general-errors #nfr--correctness
- [ ] Define exceptions / errors out of existence where possible.<br />[Book: A Philosophy of Software Design, Ch 10](https://web.stanford.edu/~ouster/cgi-bin/aposd.php)<br /> #general--code #general--errors

[^errors]: Errors covers errors or exceptions that might occur within the application and how they are dealt with.




## Caching [^caching]

- [ ] Invalidate a cache when the same data needs to be fetched freshly in a different context.<br />Use invalidation tags if available.<br /> #general--caching #nfr--correctness
- [ ] Avoid use of `localStorage`, `sessionStorage` and similar where possible.<br />As they introduce complications and maintenance overhead.<br /> #general--caching #nfr--maintainability
- [ ] Select `localStorage`  vs `sessionStorage` correctly depending on how long data needs to live.<br /> #general--caching
- [ ] Cache service-service or service-database calls to improve performance.<br />For example, in a NextJS backend, wrap API service calls in `cache`.<br /> #general--caching #nfr--performance
- [ ] When choosing caching strategy, consider whether cached call is idempotent, and treat appropriately.<br /> #general--caching
- [ ] Consider additional layer of caching for calls made many times.<br />For example: each item in a long list of items.<br /> #general--caching

[^caching]: Caching refers to storage of values, over various time-scales, for faster retrieval by the application.




## Paging and sorting [^paging-sorting]

- [ ] Careful with locally sorting server-requested data.<br />Might not play nicely with server-side pagination.<br /> #general--paging-sorting
- [ ] Represent totals correctly – total of all items vs. current page items.<br /> #general--paging-sorting
- [ ] Ordering of paging vs. sorting – apply sort beforehand.<br /> #general--paging-sorting

[^paging-sorting]: Paging and sorting covers paging (or infinite scroll) and sorting (or ordering) of data sets in the application.




## Localisation [^localisation]

- [ ] Localise all the text, and keep in a separate file or service.<br /> #general--localisation
- [ ] Look for similar words/phrases and re-use for consistency.<br /> #general--localisation
- [ ] Use readable, understandable naming for localisation keys.<br /> #general--localisation
- [ ] Use consistent, hierarchical naming for localisation keys.<br />Similar sense of structure as for components or feature folders.<br /> #general--localisation
- [ ] Put language and locale in URL.<br />For example: `mysite.com/en/AU/foo/bar`.<br /> #general--localisation
- [ ] Search for other surrounding/similar/related localisation keys.<br />Make sure they are named and positioned consistently and hierarchically.<br /> #general--localisation #nfr--maintainability

[^localisation]: Localisation refers to the ability of the application to adapt to varying local factors, such as time-zone, language and formatting conventions.




## Feature flags [^feature-flags]

- [ ] Put feature behind a feature flag as needed.<br /> #general--feature-flags
- [ ] Don't add in shared package, keep in application code, so it can be properly specific.<br /> #general--feature-flags
- [ ] Minimise usage of feature flags.<br /> #general--feature-flags
- [ ] Ensure there is a removal or maintenance plan.<br /> #general--feature-flags
- [ ] Check flag once at the highest level to avoid checking repeatedly at lower levels.<br />For example: if a flag turns off a whole list, put the if at the list level, not the list item level.<br /> #general--feature-flags
- [ ] Regression test. Features not controlled by a feature flag should remain unaffected.<br /> #general--feature-flags
- [ ] Hide or disable a whole page or route if its feature flag is off.<br />For example: prevent early disclosure or tip-off if we don't want the public to be aware of an upcoming feature.<br /> #general--feature-flags
- [ ] Ensure the right people know about a feature flag.<br />For example: product-wide concern vs. engineering-only. Or inter-team concern vs. team-specific. Make sure appropriate people are informed.<br /> #general--feature-flags
- [ ] Descriptions and any commentary should be accurate.<br />Check accuracy with regards to purpose of the flag, code and behaviour impacted, release dates, removal plan, etc.<br /> #general--feature-flags #general--documentation
- [ ] Ensure feature flag is applied to correct environment if configurable.<br />For example: dev only or also UAT and Prod.<br /> #general--feature-flags
- [ ] Use case for feature flag: feature requires pen-testing before going live.<br /> #general--feature-flags
- [ ] Ensure feature flag is added to relevant lists, documentation, etc.<br /> #general--feature-flags
- [ ] Ensure feature flag is added to relevant back-end systems, configuration files, databases, etc.<br /> #general--feature-flags
- [ ] Ensure feature flag is configured to be writeable via cookies or similar, if appropriate and required.<br /> #general--feature-flags

[^feature-flags]: Feature flags refer to configuration settings that turn features on or off.




## Analytics [^analytics]

- [ ] Add analytics code if needed.<br /> #general--analytics
- [ ] Make sure names / labels / tags passed are correct. Not excessive or insufficient.<br /> #general--analytics
- [ ] Check analytics calls, make sure they're not either excessive or being suppressed somehow.<br /> #general--analytics

[^analytics]: Analytics refers to reporting of web application traffic and events, helping stakeholders understand user behavior and improve it.




## Tests [^tests]

### Tests - General

- [ ] Choose the right kind of test.<br />UI tests, Unit tests, Integration tests, E2E tests, Browser tests, PACT tests, Visual diff tests.<br /> #general--tests
- [ ] Prefer integration tests.<br />[Blog: Write tests. Not too many. Mostly integration.](https://kentcdodds.com/blog/write-tests)<br /> #general--tests
- [ ] Think about what value each test adds.<br /> #general--tests
- [ ] Break specific parts of the code under test and ensure tests fail in correct ways.<br /> #general--tests
- [ ] Keep tests small and concise.<br /> #general--tests
- [ ] Encode knowledge of how the code works in the test.<br /> #general--tests
- [ ] Don't overly nest describe blocks.<br /> #general--tests
- [ ] Don't overly split describe blocks such as many describe blocks that only have one test block inside.<br /> #general--tests
- [ ] Use test utils/helpers where they can simplify test code.<br /> #general--tests
- [ ] Minimise test running time.<br /> #general--tests
- [ ] Eliminate errors and warnings in console when running test.<br /> #general--tests
- [ ] Name tests appropriately.<br /> #general--tests
- [ ] Avoid `let`, use `const` where possible, or split into utility functions or before/after blocks.<br /> #general--tests
- [ ] Place tests in appropriate folder with appropriate meaningful filename.<br /> #general--tests
- [ ] Avoid `data-testid` if desired. Prefer to query by title, label, aria role, etc.<br />[Blog: Test IDs are an a11y smell](https://tkdodo.eu/blog/test-ids-are-an-a11y-smell)<br /> #general--tests
- [ ] Use appropriate formatting and values for `data-testid` - short, kebab-case, appropriate identifier.<br /> #general--tests
- [ ] Use `beforeAll` rather than `beforeEach` where possible to minimise overhead.<br /> #general--tests
- [ ] Use descriptive name rather than index for `const`s. For example: `usernameLabel` rather than `label0`.<br /> #general--tests
- [ ] Only cover behaviour, including errors, that we expect to happen.<br /> #general--tests
- [ ] Avoid `beforeEach`, prefer to keep setup in individual tests.<br /> #general--tests
- [ ] No need to cover behaviour built-in to the framework.<br /> #general--tests
- [ ] Group test code into chunks and give each a descriptive comment, for readability.<br /> #general--tests
- [ ] Keep tests in the right file. Split or combine as needed.<br /> #general--tests
- [ ] Think about how the test could fail, write the test test to fail, make it pass.<br /> #general--tests
- [ ] Improve or extend test data to more precisely capture test target and failure cases.<br /> #general--tests

### Tests - Manual

- [ ] Manually test the application, exercising every important code path impacted.<br /> #nfr--correctness
- [ ] Prioritise testing effort. For example: test high impact stuff first, then easy-to-test stuff, then the rest.<br /> #general--tests
- [ ] Test Required input fields - they should not accept blank spaces, strange characters, etc.<br /> #general--tests
- [ ] Test fields with extreme values, For example: very low or high numbers or very long strings.<br /> #general--tests
- [ ] Perform actions fast and/or with simulated slow conditions and ensure no breakage.<br /> #general--tests
- [ ] Test Lists, tables with very large data-sets, if expected, and ensure they scale.<br /> #general--tests
- [ ] Exercise every important code path that might be impacted by your change.<br /> #general--tests
- [ ] Consider whether a "transfer" type transaction should be supported with the same source and destination.<br />For example: sending a message to oneself, paying oneself, etc.<br /> #general--tests
- [ ] Test all paths that can lead to a particular piece of code running.<br />Not just the path that you're currently focussed on.<br />  #nfr--correctness
- [ ] Test all applications or APIs your changes might impact.<br />For example: logic that affects both a customer facing website and a staff admin dashboard.<br /> 
- [ ] Compare application before and after changes, to ensure there are no hidden regressions.

### Tests - Unit

- [ ] Maximise code coverage.<br /> #general--tests
- [ ] Put common behaviour (such as rendering) in functions rather than repeating in each test block.<br /> #general--tests
- [ ] Don't perform axe tests redundantly in unit tests, prefer E2E such as Playwright, as it's more realistic.<br /> #general--tests
- [ ] When mocking APIs, assert they were called with correct parameters (inside the mock function declaration).<br /> #general--tests
- [ ] No need to necessarily write unit tests if behaviour already covered by higher level (such as integration) and they are adding no value.<br /> #general--tests

### Tests - Mocking

- [ ] Mock structure - should be aligned with Backend API specs.<br /> #general--tests
- [ ] Mock values should be realistic, close to real data.<br /> #general--tests
- [ ] Keep mock objects as clean and simple as possible.<br /> #general--tests
- [ ] Clear mocks between assertions; this makes each assertion independent and prevents false positives.<br /> #general--tests
- [ ] Avoid mocking whole modules.<br />[Blog: Alternatives to module mocks in your unit tests](https://reacttdd.com/alternatives-to-module-mocks/)<br /> #general--tests
- [ ] Use mock data specific to your test, to avoid your test breaking when mock data changes.<br /> #general--tests
- [ ] Be careful about re-using mock data.<br />It can create a lot of complexity. Sometimes it's better to just completely declare the whole mock separately in each unit test, especially if the mocks can be kept very simple and only take maybe a few lines.<br /> #general--tests
- [ ] When mocks get big and complex, put a "base mock" in a separate mocks file and re-use it.<br />In each test, create an individual constant, using spread operator with type assertions.<br /> #general--tests
- [ ] Use typed `assert` statements to traverse mocks with a deep nested structure and lots of nested optional fields.<br /> #general--tests
- [ ] Avoid importing lots of mocks from many different sources.<br />It's a sign that the tests or underlying code is highly coupled and needs to be broken down a bit or abstracted more.<br /> #general--tests
- [ ] Use object cloning and assignment to set deeply nested field values as an alternative to complicated, deeply nested spread operators.<br /> #general--tests
- [ ] Mock endpoints such as network calls. Don't make real network calls inside unit tests.<br /> #general--tests
- [ ] No need to add full mocks or test coverage for features that are still under incremental development and behind feature flags, and where regression testing is adequate.<br /> #general--tests

### Tests - Assertions

- [ ] Nice error messages on test failure if possible.<br /> #general--tests
- [ ] Use Regex pattern when asserting absences, so tests cover a wider range of failure cases.<br /> #general--tests
- [ ] Use literals when asserting presences, so tests cover a narrower range of success cases, and so that failures are very clear.<br /> #general--tests
- [ ] When asserting on collections, assert on expected length first, so test breaks earlier and faster, and failure is faster to debug.<br /> #general--tests
- [ ] Assert counterfactuals. For example expect element not to exist.<br /> #general--tests
- [ ] Simplify big asserts.<br /> #general--tests
- [ ] Careful about modifying large asserts - make sure original intent is preserved.<br /> #general--tests
- [ ] Assert number of times function is called.<br /> #general--tests
- [ ] Omit field in asserted objects/arrays that aren't actually needed for the assertion to be correct and add value.<br /> #general--tests
- [ ] Ensure each and every assert works correctly in the failure cases.<br />Remove or modify code under test so that it fails.<br /> #general--tests
- [ ] Assert on parameter values of function calls.<br /> #general--tests
- [ ] Don't include unnecessary assertions.<br />For example: if clicking a button as part of an integration test, you don't necessarily need to assert on the button itself – its label, size, etc. – if the button is not the primary focus of the test.<br /> #general--tests

### Tests - Assertions - Jest

- [ ] Assert `toBe(true)` rather than `toBeTruthy()` if the expected value is exactly `true`.<br /> #general--tests #framework--jest #language--javascript
- [ ] Prefer explicit checks for existence (such as `.toBeInTheDocument()`) over more ambiguous checks (such as `.toBeTruthy()`).<br /> #general--tests #framework--jest #language--javascript
- [ ] Assert on specific field values with dot notation (`foo.bar`) rather than cumbersome deeply nested `objectContains` or similar.<br /> #general--tests #framework--jest #language--javascript

### Tests - React

- [ ] use `<Component>` as easily recognisable title for component tests.<br /> #general--tests #framework--react
- [ ] Use `exact: false` and/or `selector: "foo"` to select elements by partial text matching; more accurate than just using a `RegExp`.<br /> #general--tests #framework--react

### Tests - Jest

- [ ] Use `waitForNextUpdate` when testing hooks rather than wrapping in `waitFor`.<br /> #general--tests #framework--jest #language--javascript
- [ ] Only use `waitFor` (avoid `act`) and explicitly wait for a side-effect (some text to appear, callback to be called, etc).<br />[Blog: Understanding act](https://reacttdd.com/understanding-act/)<br /> #general--tests #framework--jest #language--javascript
- [ ] Use `waitFor` and `queryBy*` when asserting that an element was *not* rendered.<br /> #general--tests #framework--jest #language--javascript
- [ ] Don't use free-standing `wait`, wrap the code in `wait(() => { ... })` block.<br /> #general--tests #framework--jest #language--javascript
- [ ] Check far async causing unit test breakage to not get picked up by test.<br /> #general--tests #framework--jest #language--javascript
- [ ] Use helpers: `makeAxiosError`, `mockRoles`.<br /> #general--tests #framework--jest #language--javascript
- [ ] Avoid `waitFor` blocks. Just use `findBy*` where possible. Simpler.<br /> #general--tests #framework--jest #language--javascript
- [ ] Prefer `userEvent` rather than `fireEvent`, it's a higher abstraction level.<br /> #general--tests #framework--jest #language--javascript
- [ ] Call `userEvent.setup()` and use its return value, to isolate it per-test.<br /> #general--tests #framework--jest #language--javascript
- [ ] Don't use `jest.mock`. Prefer `jest.spyOn`.<br />[StackOverflow Post: Why use `spyOn` with mock implementation rather than `jest.fn`?](https://stackoverflow.com/a/64930781/23341)<br /> #general--tests #framework--jest #language--javascript

### Tests - Reliability

- [ ] Use `void` rather than `async` prefix with `renderAsyncComponent`, then wait for one of its elements to render (using `findBy*` or `waitFor` block).<br />This avoids a race condition between the component loading and test logic that expects it to have loaded.<br /> #general--tests
- [ ] Always `await` calls to `userEvent` such as `userEvent.click()`, etc.<br /> #general--tests
- [ ] Run the test many times repeatedly to test for flakiness (time permitting).<br /> #general--tests
- [ ] Add longer timeouts, where necessary, to prevent timeout failures.<br />Add to test locators, assertions or whole test files.<br /> #general--tests
- [ ] When there's a chain of API calls, see if you can wait for each to evaluate first, before asserting, to reduce likelihood of flakiness.<br /> #general--tests
- [ ] Don't assert on animation events like aria-busy if they cause flakiness.<br /> #general--tests
- [ ] Use `getBy` subsequently, once component has loaded. Using `findBy` on the first component, to wait for it to be loaded, followed by `getBy` to assert on the loaded elements.<br /> #general--tests

### Tests - E2E

- [ ] Add if needed.<br /> #general--tests
- [ ] Log a task for it, if it's involved work.<br /> #general--tests
- [ ] Use `test.step` to divide the internals of a test into smaller, well described sub-tests.<br /> #general--tests
- [ ] When in doubt, remove code under test and ensure test assertions fail appropriately.<br /> #general--tests
- [ ] Be mindful when writing E2E tests to reduce flakiness and slowness.<br /> #general--tests
- [ ] After navigation or reload, wait for page to load before continuing.<br /> #general--tests
- [ ] Use `toBeInViewport` vs `toBeVisible` appropriately, depending on how the elements are rendering.<br /> #general--tests
- [ ] condense element lookup into one expect if possible rather than multiple DOM accesses and traversals, which take up time.<br /> #general--tests
- [ ] Remove unnecessary `test.slow` or `test.setTimeout`.<br /> #general--tests
- [ ] Add accessibility tests (such as `axe`).<br /> #general--tests
- [ ] Clear input before populating with new value.<br /> #general--tests
- [ ] Run tests and check for accessibility violations as "warn" entries in console.<br /> #general--tests
- [ ] Avoid checks that are redundant because the code would have failed by that point.<br /> #general--tests

[^tests]: Tests refers to test specification and implementation, used to verify correctness and quality of the application. Both manual and automated testing is covered here.




## Version control [^version-control]

- [ ] Rebase on main/master regularly.<br /> #general--version-control

[^version-control]: Version control system (VCS), such as Git or Mercurial.




## Logging, monitoring and observability [^monitoring-logging-and-observability]

- [ ] Remove logging, observability or other diagnostics if not intended to go into prod.<br /> #general--logging-monitoring-and-observability #nfr--observability
- [ ] Add observability or other diagnostics if intended to go into prod.<br /> #general--logging-monitoring-and-observability #nfr--observability
- [ ] Careful to avoid private data being leaked via logs.<br />For example, PII [^pii] or secrets.<br /> #general--logging-monitoring-and-observability #nfr--observability

[^monitoring-logging-and-observability]: Logging (for debugging purposes) and monitoring and observability (for understanding system performance and behavior).
[^pii]: Personally Identifiable Information



## Pull request [^pull-request]

- [ ] Keep small and focussed, split where needed to keep each PR small.<br /> #general--pull-request #nfr--readability 
- [ ] Include links to task, designs, requirements, specifications, etc.<br /> #general--pull-request #general--documentation
- [ ] Ensure that all automated checks pass before sending the PR for review.<br /> #general--pull-request
- [ ] Make sure everything is provided for devs to checkout and test from scratch.<br />For example: installation instructions, credentials, test accounts.<br /> #general--pull-request
- [ ] Create preview / staging site.<br />And include instructions to access if needed.<br /> #general--pull-request
- [ ] Apply changes in separate commits to allow history to be viewed and discussed.<br /> #general--pull-request
- [ ] Remove temporary settings before setting PR to Open.<br />For example: temporary test-only configurations or feature flag settings.<br /> #general--pull-request
- [ ] Review with stakeholders (design, analysts, etc) before merge, if needed.<br /> #general--pull-request #nfr--correctness
- [ ] Split functional and non-functional changes into separate PRs.<br /> #general--pull-request
- [ ] Split features and bug fixes or refactoring into separate PRS.<br /> #general--pull-request
- [ ] In description and inline comments, address non-functional requirements (NFRs).<br />Accessibility, performance, security, etc.<br /> #general--pull-request
- [ ] Seriously consider any AI bot suggestion.<br /> #general--pull-request #general--ai
- [ ] Regression-test everything after actioning PR feedback.<br />In case the actioning of the feedback itself contained a bug.<br /> #general--pull-request

[^pull-request]: Pull request items relate to pull request process and structure.




## Documentation [^documentation]

- [ ] Add `README.md`.<br />Detail what this is and link to other docs for specific details.<br /> #general--documentation
- [ ] Add how to install instructions.<br /> #general--documentation
- [ ] Add how to contribute instructions in `CONTRIBUTING.md`.<br /> #general--documentation
- [ ] Ensure it is as easy as possible for new starters to get started.<br />Try installing and running the application yourself, from scratch, as if a new joiner. Go through some of the major flows.<br /> #general--documentation
- [ ] Ensure new starters can readily find information needed.<br />For example: ensure documentation is available and searchable.<br /> #general--documentation
- [ ] In lists of steps, avoid one step getting too big.<br />Split out to separate steps as needed.<br /> #general--documentation
- [ ] In lists of steps, avoid too many small steps that are closely related.<br />Merge into a bigger step as needed.<br /> #general--documentation
- [ ] Ensure steps are clearly indicated as "required", if necessary.<br /> #general--documentation
- [ ] Ensure code samples match up with instructions.<br /> #general--documentation
- [ ] Check if design, code, documentation, etc. need to be updated so they are all consistent.<br /> #general--documentation #nfr--correctness

### Documentation - Comments

- [ ] Describe the why not the what, let the code describe the what.<br /> #general--documentation
- [ ] Describe “why not” to communicate why one solution was chosen over another seemingly better solution.<br />For example: "We went with z. Why not y? Because z.<br /> #general--documentation
- [ ] Comment anything that needs fixing later with `TODO` only if that's the convention.<br />Otherwise, log an appropriate ticket.<br /> #general--documentation
- [ ] Describe function parameters, object fields, types, interfaces, constants, etc. with JSDoc comments, if not apparent.<br /> #general--documentation
- [ ] Describe advanced features the consumer is unlikely to know.<br /> #general--documentation
- [ ] Add warnings where needed.<br /> #general--documentation
- [ ] Use shorter, more precise sentences.<br /> #general--documentation
- [ ] Communicate intent.<br /> #general--documentation
- [ ] Use information-dense words.<br />For example: refer to the name of a software pattern rather than explaining the whole thing.<br /> #general--documentation
- [ ] Don't include anything likely to create tedious maintenance overhead.<br />Such as specific amounts, etc.<br /> #general--documentation

### Documentation - Commits

- [ ] Explain **why** not what, audience is seeing it through git blame.<br /> #general--documentation
- [ ] Brief, respect people's time.<br /> #general--documentation

### Documentation - Bug Reports

- [ ] Expected vs actual and reproduction steps and test data.<br /> #general--documentation
- [ ] Dig into the code to find out why and report what you found.<br /> #general--documentation

[^documentation]: Documentation refers to written documentation, code comments or self-documenting code.




{/*  */}




## Compatibility [^compatibility]

- [ ] Test on all major browsers <br />Chrome, Edge, Firefox, Safari, Opera, etc.<br /> #nfr--compatibility
- [ ] Ensure browser features used are commonly supported.<br />[Tool: CanIUse](http://caniuse.com)<br /> #nfr--compatibility

### Compatibility - Screen sizes

- [ ] Use shortcuts where component library makes them available.<br />For example: `tablet-and-larger` rather than `tablet, desktop, wide`.<br /> #nfr--compatibility
- [ ] Use a layout that works on all devices without device-specific overrides.<br /> #nfr--compatibility
- [ ] Take advantage of container queries.<br /> #nfr--compatibility

### Compatibility - Offline

- [ ] Use service workers to enable offline access.<br />[Article: Using Service Workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers)<br /> #nfr--compatibility

### Compatibility - Mobile devices

- [ ] Use web application manifest to enable the site to be saved and run as an app-like experience on a phone.<br />[Article: Web application manifest](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Manifest)<br /> #nfr--compatibility

[^compatibility]: Compatibility refers to the ability of an application to run smoothly on a variety of browsers, operating systems and devices.




## Accessibility [^accessibility]

- [ ] Use semantic HTML elements.<br /> #nfr--accessibility #language--html
- [ ] Use lightweight plain HTML elements where possible, For example: `<div>` instead of `<Box>`.<br /> #nfr--accessibility #language--html
- [ ] No new errors in unit tests such as Axe, including whole page scan.<br /> #nfr--accessibility #language--javascript #general--tests
- [ ] For loading indicators, apply `role=status` and include "Loading" text in nested, screen-reader-only element.<br />[Docs: Bootstrap - Spinners](https://getbootstrap.com/docs/4.5/components/spinners/) <br /> #language--html #nfr--accessibility
- [ ] Use `aria-label` or `aria-labelled-by` (with matching id) to label elements if appropriate.<br /> #language--html #nfr--accessibility
- [ ] Label should describe what component is for, not just repeat the value.<br /> #nfr--accessibility
- [ ] Select box should read out selected value over screen-reader when focussed.<br /> #nfr--accessibility
- [ ] Test IDs probably mean elements aren't specified well enough by semantically, by tag name, aria tags, etc.<br />[Blog: Test IDs are an a11y smell](https://tkdodo.eu/blog/test-ids-are-an-a11y-smell)<br /> #nfr--accessibility #general--tests

### Accessibility - Perceivable

- [ ] Screen can be navigated with screen-reader.<br /> #nfr--accessibility
- [ ] Heading announced by screen-reader.<br /> #nfr--accessibility
- [ ] Buttons and nav links are announced as buttons by screen-reader.<br /> #nfr--accessibility
- [ ] Items navigated in the correct order by screen-reader.<br /> #nfr--accessibility

### Accessibility - Operable

- [ ] All important elements and controls can be accessed with keyboard only.<br /> #nfr--accessibility
- [ ] Avoid nested clickable regions. Just choose one element to be clickable.<br /> #nfr--accessibility

### Accessibility - Understandable

- [ ] Use simple, plain language.<br /> #nfr--accessibility
- [ ] Use definition lists to define terms that are not commonly understood.<br /> #nfr--accessibility

### Accessibility - Robust

- [ ] Elements render correctly with all common screen-sizes.<br />Ideally: wide desktop, desktop, tablet, mobile. And: vertical and horizontal.<br /> #nfr--accessibility
- [ ] Elements render correctly in dark or light mode.<br /> #nfr--accessibility
- [ ] Text scales correctly with zoom.<br /> #nfr--accessibility

### Accessibility - Content

- [ ] Use plain language and avoid figures of speech, idioms, and complicated metaphors.<br />[Article: WCAG - Reading Level](https://www.w3.org/WAI/WCAG22/Understanding/reading-level.html)<br /> #nfr--accessibility #accessibility--content
- [ ] Make sure that <code>button</code>, <code>a</code>, and <code>label</code> element content is unique and descriptive.<br />[Article: WCAG - Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html)<br /> #nfr--accessibility #accessibility--content
- [ ] Use left-aligned text for left-to-right (<abbr>LTR</abbr>) languages, and right-aligned text for right-to-left (<abbr>RTL</abbr>) languages.<br />[Article: WCAG - Visual Presentation](https://www.w3.org/WAI/WCAG22/Understanding/visual-presentation.html)<br /> #nfr--accessibility #accessibility--content

### Accessibility - Global code

- [ ] Validate your HTML.<br />[Article: WCAG - Parsing](https://www.w3.org/WAI/WCAG22/Understanding/parsing.html)<br /> #nfr--accessibility #accessibility--global-code
- [ ] Use a <code>lang</code> attribute on the <code>html</code> element.<br />[Article: WCAG - Language of Page](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page.html)<br /> #nfr--accessibility #accessibility--global-code
- [ ] Provide a unique <code>title</code> for each page or view.<br />[Article: WCAG - Page Titled](https://www.w3.org/WAI/WCAG22/Understanding/page-titled.html)<br /> #nfr--accessibility #accessibility--global-code
- [ ] Ensure that viewport zoom is not disabled.<br />[Article: WCAG - Resize text](https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html)<br /> #nfr--accessibility #accessibility--global-code
- [ ] Use landmark elements to indicate important content regions.<br />[Article: WCAG - Name, Role, Value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)<br /> #nfr--accessibility #accessibility--global-code
- [ ] Ensure a linear content flow.<br />[Article: WCAG - Focus Order](https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html)<br /> #nfr--accessibility #accessibility--global-code
- [ ] Avoid using the <code>autofocus</code> attribute.<br />[Article: WCAG - Focus Order](https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html)<br /> #nfr--accessibility #accessibility--global-code
- [ ] Allow extending session timeouts.<br />[Article: WCAG - Timing Adjustable](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable.html)<br /> #nfr--accessibility #accessibility--global-code
- [ ] Remove <code>title</code> attribute tooltips.<br />[Article: WCAG - Name, Role, Value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)<br /> #nfr--accessibility #accessibility--global-code

### Accessibility - Keyboard

- [ ] Make sure there is a visible focus style for interactive elements that are navigated to via keyboard input.<br />[Article: WCAG - Focus Visible](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html)<br /> #nfr--accessibility #accessibility--keyboard
- [ ] Check to see that keyboard focus order matches the visual layout.<br />[Article: WCAG - Meaningful Sequence](https://www.w3.org/WAI/WCAG22/Understanding/meaningful-sequence.html)<br /> #nfr--accessibility #accessibility--keyboard
- [ ] Remove invisible focusable elements.<br />[Article: WCAG - Focus Order](https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html)<br /> #nfr--accessibility #accessibility--keyboard

### Accessibility - Images

- [ ] Make sure that all <code>img</code> elements have an <code>alt</code> attribute.<br />[Article: WCAG - Non-text Content](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html)<br /> #nfr--accessibility #accessibility--images
- [ ] Make sure that decorative images use null <code>alt</code> (empty) attribute values.<br />[Article: WCAG - Non-text Content](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html)<br /> #nfr--accessibility #accessibility--images
- [ ] Provide a text alternative for complex images such as charts, graphs, and maps.<br />[Article: WCAG - Non-text Content](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html)<br /> #nfr--accessibility #accessibility--images
- [ ] For images containing text, make sure the alt description includes the image's text.<br />[Article: WCAG - Non-text Content](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html)<br /> #nfr--accessibility #accessibility--images

### Accessibility - Headings

- [ ] Use heading elements to introduce content.<br />[Article: WCAG - Headings or Labels](https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels.html)<br /> #nfr--accessibility #accessibility--headings
- [ ] Use only one <code>h1</code> element per page or view.<br />[Article: WCAG - Headings or Labels](https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels.html)<br /> #nfr--accessibility #accessibility--headings
- [ ] Heading elements should be written in a logical sequence.<br />[Article: WCAG - Headings or Labels](https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels.html)<br /> #nfr--accessibility #accessibility--headings
- [ ] Don't skip heading levels.<br />[Article: WCAG - Headings or Labels](https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels.html)<br /> #nfr--accessibility #accessibility--headings

### Accessibility - Lists

- [ ] Use list elements (<code>ol</code>, <code>ul</code>, and <code>dl</code> elements) for list content.<br />[Article: WCAG - Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html)<br /> #nfr--accessibility #accessibility--lists

### Accessibility - Controls

- [ ] Use the <code>a</code> element for links.<br />[Article: WCAG - Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html)<br /> #nfr--accessibility #accessibility--controls
- [ ] Ensure that links are recognizable as links.<br />[Article: WCAG - Use of Color](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html)<br /> #nfr--accessibility #accessibility--controls
- [ ] Ensure that controls have <code>:focus</code> states.<br />[Article: WCAG - Focus Visible](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html)<br /> #nfr--accessibility #accessibility--controls
- [ ] Use the <code>button</code> element for buttons.<br />[Article: WCAG - Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html)<br /> #nfr--accessibility #accessibility--controls
- [ ] Provide a skip link and make sure that it is visible when focused.<br />[Article: WCAG - Bypass Blocks](https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks.html)<br /> #nfr--accessibility #accessibility--controls
- [ ] Identify links that open in a new tab or window.<br />[Article: WCAG - Giving users advanced warning when opening a new window](https://www.w3.org/WAI/WCAG22/Techniques/general/G201)<br /> #nfr--accessibility #accessibility--controls

### Accessibility - Tables

- [ ] Use the <code>table</code> element to describe tabular data.<br />[Article: WCAG - Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html)<br /> #nfr--accessibility #accessibility--tables
- [ ] Use the <code>th</code> element for table headers (with appropriate <code>scope</code> attributes).<br />[Article: WCAG - Parsing](https://www.w3.org/WAI/WCAG22/Understanding/parsing.html)<br /> #nfr--accessibility #accessibility--tables
- [ ] Use the <code>caption</code> element to provide a title for the table.<br />[Article: WCAG - Headings or Labels](https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels.html)<br /> #nfr--accessibility #accessibility--tables

### Accessibility - Forms

- [ ] All inputs in a form are associated with a corresponding <code>label</code> element.<br />[Article: WCAG - On Input](https://www.w3.org/WAI/WCAG22/Understanding/on-input.html)<br /> #nfr--accessibility #accessibility--forms
- [ ] Use <code>fieldset</code> and <code>legend</code> elements where appropriate.<br />[Article: WCAG - Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html)<br /> #nfr--accessibility #accessibility--forms
- [ ] Inputs use <code>autocomplete</code> where appropriate.<br />[Article: WCAG - Identify Input Purpose](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html)<br /> #nfr--accessibility #accessibility--forms
- [ ] Make sure that form input errors are displayed in list above the form after submission.<br />[Article: WCAG - Error Identification](https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html)<br /> #nfr--accessibility #accessibility--forms
- [ ] Associate input error messaging with the input it corresponds to.<br />[Article: WCAG - Error Identification](https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html)<br /> #nfr--accessibility #accessibility--forms
- [ ] Make sure that error, warning, and success states are not visually communicated by just color.<br />[Article: WCAG - Use of Color](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html)<br /> #nfr--accessibility #accessibility--forms

### Accessibility - Media

- [ ] Make sure that media does not autoplay.<br />[Article: WCAG - Audio Control](https://www.w3.org/WAI/WCAG22/Understanding/audio-control.html)<br /> #nfr--accessibility #accessibility--media
- [ ] Ensure that media controls use appropriate markup.<br />[Article: WCAG - Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html)<br /> #nfr--accessibility #accessibility--media
- [ ] Check to see that all media can be paused.<br />[Article: WCAG - Keyboard](https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html)<br /> #nfr--accessibility #accessibility--media

### Accessibility - Video

- [ ] Confirm the presence of captions.<br />[Article: WCAG - Captions](https://www.w3.org/WAI/WCAG22/Understanding/captions-prerecorded.html)<br /> #nfr--accessibility #accessibility--video
- [ ] Remove seizure triggers.<br />[Article: WCAG - Three Flashes or Below Threshold](https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html)<br /> #nfr--accessibility #accessibility--video

### Accessibility - Audio

- [ ] Confirm that transcripts are available.<br />[Article: WCAG - Non-text Content](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html)<br /> #nfr--accessibility #accessibility--audio

### Accessibility - Appearance

- [ ] Check your content in specialized browsing modes.<br />[Article: WCAG - Use of Color](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html)<br /> #nfr--accessibility #accessibility--appearance
- [ ] Increase text size to 200%.<br />[Article: WCAG - Resize text](https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html)<br /> #nfr--accessibility #accessibility--appearance
- [ ] Double-check that good proximity between content is maintained.<br />[Article: WCAG - Sensory Characteristics](https://www.w3.org/WAI/WCAG22/Understanding/sensory-characteristics.html)<br /> #nfr--accessibility #accessibility--appearance
- [ ] Make sure color isn't the only way information is conveyed.<br />[Article: WCAG - Use of Color](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html)<br /> #nfr--accessibility #accessibility--appearance
- [ ] Make sure instructions are not visual or audio-only.<br />[Article: WCAG - Sensory Characteristics](https://www.w3.org/WAI/WCAG22/Understanding/sensory-characteristics.html)<br /> #nfr--accessibility #accessibility--appearance
- [ ] Use a simple, straightforward, and consistent layout.<br />[Article: WCAG - Reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html)<br /> #nfr--accessibility #accessibility--appearance

### Accessibility - Animation

- [ ] Ensure animations are subtle and do not flash too much.<br />[Article: WCAG - Three Flashes or Below Threshold](https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html)<br /> #nfr--accessibility #accessibility--animation
- [ ] Provide a mechanism to pause background video.<br />[Article: WCAG - Pause, Stop, Hide](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html)<br /> #nfr--accessibility #accessibility--animation
- [ ] Make sure all animation obeys the <code>prefers-reduced-motion</code> media query.<br />[Article: WCAG - Animation from Interactions](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html)<br /> #nfr--accessibility #accessibility--animation

### Accessibility - Color contrast

- [ ] Check the contrast for all normal-sized text.<br />[Article: WCAG - Contrast](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)<br /> #nfr--accessibility #accessibility--color-contrast
- [ ] Check the contrast for all large-sized text.<br />[Article: WCAG - Contrast](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)<br /> #nfr--accessibility #accessibility--color-contrast
- [ ] Check the contrast for all icons.<br />[Article: WCAG - Non-text Contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html)<br /> #nfr--accessibility #accessibility--color-contrast
- [ ] Check the contrast of borders for input elements (text input, radio buttons, checkboxes, etc.).<br />[Article: WCAG - Non-text Contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html)<br /> #nfr--accessibility #accessibility--color-contrast
- [ ] Check text that overlaps images or video.<br />[Article: WCAG - Contrast](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)<br /> #nfr--accessibility #accessibility--color-contrast
- [ ] Check custom <code>::selection</code> colors.<br />[Article: WCAG - Contrast](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)<br /> #nfr--accessibility #accessibility--color-contrast

### Accessibility - Mobile and touch

- [ ] Check that the site can be rotated to any orientation.<br />[Article: WCAG - Orientation](https://www.w3.org/WAI/WCAG22/Understanding/orientation.html)<br /> #nfr--accessibility #accessibility--mobile-and-touch
- [ ] Remove horizontal scrolling.<br />[Article: WCAG - Reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html)<br /> #nfr--accessibility #accessibility--mobile-and-touch
- [ ] Ensure that button and link icons can be activated with ease.<br />[Article: WCAG - Target Size](https://www.w3.org/WAI/WCAG22/Understanding/target-size-enhanced.html)<br /> #nfr--accessibility #accessibility--mobile-and-touch
- [ ] Ensure sufficient space between interactive items in order to provide a scroll area.<br />[Article: WCAG - Bypass Blocks](https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks.html)<br /> #nfr--accessibility #accessibility--mobile-and-touch

[^accessibility]: Accessibility covers accessibility features and techniques to ensure usability by everyone, including people with disabilities.




## Performance [^performance]

- [ ] Use early-return, ordered from cheapest to most expensive operations, when a sequence of checks need to be done, to minimise unnecessary processing.<br /> #nfr--performance
- [ ] Optimise algorithms, or replace them with calls to libraries / third-party implementations that have been optimised.<br /> #nfr--performance
- [ ] Use indexed lookups instead of loops for random-access.<br /> #nfr--performance
- [ ] Use caching to prevent redundant, expensive computations.<br /> #nfr--performance
- [ ] Minimise jank.<br />[Article: Jank - Glossary | MDN](https://developer.mozilla.org/en-US/docs/Glossary/Jank)<br /> #nfr--performance
- [ ] Minimise largest contentful paint (LCP).<br />[Article: Largest Contentful Paint - web.dev](https://web.dev/articles/lcp)<br /> #nfr--performance
- [ ] Minimise first input delay.<br />[Article: First Input Delay (FID) - Glossary | MDN](https://developer.mozilla.org/en-US/docs/Glossary/First_input_delay)<br /> #nfr--performance
- [ ] Avoid or minimise Flash of Unstyled Content (FOUC).<br />[Wiki: Flash of unstyled content ](https://en.wikipedia.org/wiki/Flash_of_unstyled_content)<br /> #nfr--performance
- [ ] Careful with triggering re-renters of large component trees in React.<br />[Book: Advanced React, Ch 2](https://www.advanced-react.com)<br /> #nfr--performance
- [ ] Check for unnecessary render cycles (React) using Chrome Performance Tools or similar.<br /> #nfr--performance
- [ ] Identity expensive algorithms and optimise them.<br /> #nfr--performance
- [ ] Use `reduce` efficiently: don't return result but set accumulator and return it (pass by reference).<br /> #nfr--performance
- [ ] Reduce function calls to minimise function-call overhead.<br /> #nfr--performance
- [ ] Combine into one function operations that integrate many pieces of date into one structure, to avoid excessive calling/returning of functions.<br /> #nfr--performance
- [ ] Avoid "waterfall" requests - chains of dependent requests that, as a whole, take a long time to finish.<br />[Book: Advanced React, Ch 14](https://www.advanced-react.com)<br /> #nfr--performance
- [ ] Make imports specific, to keep bundle size small.<br />[Blog: Please Stop Using Barrel Files](https://tkdodo.eu/blog/please-stop-using-barrel-files)<br /> #nfr--performance
- [ ] Keep components small and focussed, use composition as needed.<br /> #nfr--performance
- [ ] Minimise number of DOM elements, attributes and styles, to minimise browser rendering effort.<br /> #nfr--performance
- [ ] Minimise delays without visual feedback - always be instantly responsive to user input.<br />Perceived performance.<br />[Article: Perceived performance - MDN](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Performance/Perceived_performance).<br /> #nfr--performance
- [ ] Configure build system to use minification to compress scripts and stylesheets.<br /> #nfr--performance
- [ ] Use edge hosting (such as CDNs) to speed up user access.<br /> #nfr--performance
- [ ] Use parallelisation to reduce total task completion time.<br /> #nfr--performance
- [ ] Increase resources depending on workloads.<br />For example: compute-heavy workloads might require faster processors or data-heavy workloads might require more memory or storage.<br /> #nfr--performance
- [ ] Prefetch and cache data on startup that we know will be needed during the user's session.<br /> #nfr--performance
- [ ] Use async (micro-task) and/or timers (`setTimeout`, event queue) to defer processing, to improve responsiveness (perceived performance) to the user.<br />[Article: Window: setTimeout() method](https://developer.mozilla.org/en-US/docs/Web/API/Window/setTimeout)<br />[Blog: https://www.crio.do/blog/why-settimeout-is-useful-2025-javascript-criodo/](https://www.crio.do/blog/why-settimeout-is-useful-2025-javascript-criodo/)<br /> #nfr--performance
- [ ] Use web worker to run background tasks separately from the main user interface thread.<br />[Article: An overview of web workers](https://web.dev/learn/performance/web-worker-overview)<br /> #nfr--performance
- [ ] Check for memory leaks or CPU overuse.<br />Use Chrome Performance Tools, use a debugger, local system monitor (MacOS Activities, Windows Task Manager or Linux `atop`) or monitor metrics in monitoring tool.<br />[Article: Chrome Dev Tools - Get performance insights](https://developer.chrome.com/docs/devtools#performance)<br />[Article: DynaTrace Live Debugger](https://docs.dynatrace.com/docs/observe/application-observability/live-debugger)<br /> #nfr--performance

[^performance]: Performance refers to operating speed of the application, either real or perceived.




## Reliability [^reliability]

- [ ] If the change alters the inputs being received and passed to the Backend, ensure those won't break.<br /> #nfr--reliability
- [ ] Avoid throwing exceptions, as that can cause the whole app to break.<br />Instead, use conditionals, etc with logic to deal with expected edge-cases.<br /> #nfr--reliability
- [ ] Avoid handling exceptions without throwing up to the highest layer possible.<br />Ideally log to a structured logging system such as Sentry. Otherwise issues can be masked.<br /> #nfr--reliability
- [ ] Handle incorrect (but expected) values that might be returned by the Backend.<br /> #nfr--reliability
- [ ] Check parameters are present and correct if there is good reason to expect that wrong values might be received sometimes.<br /> #nfr--reliability
- [ ] Null-check and/or optional-chain where a field needs to be accessed which might be nil.<br /> #nfr--reliability
- [ ] Handle non-numeric values when attempting a numeric operation, if expected.<br /> #nfr--reliability
- [ ] Compare different devices - behaviour or logic should be consistent.<br /> #nfr--reliability
- [ ] Refresh and navigate back/forward - ensure it does not result in an error.<br /> #nfr--reliability
- [ ] Reset state after accessing the same context again.<br />For example: a button that goes into loading state on click should likely reset after we close then re-open the same page/screen.<br /> #nfr--reliability
- [ ] Format a value consistently wherever it appears.<br />For example: format a date the same way in a date picker input control as display.<br /> #nfr--reliability
- [ ] Careful with animations and timeouts.<br />Make sure to test, by quickly clicking/switching around, ensure it doesn't mess up.<br /> #nfr--reliability
- [ ] Before manipulating a string, check it first.<br />If possible to make sure it's in the expected input format.<br /> #nfr--reliability

[^reliability]: Reliability refers to the probability the application will operate with minimal (or acceptable) level of failures.




## Economy [^economy]

- [ ] Minimise operating cost by offloading processing, storage, etc. to the client side.<br /> #nfr--economy

[^economy]: Economy refers to the cost effectiveness of operating the application.




## Security [^security]

- [ ] Careful what you send in requests over non-HTTPS.<br /> #nfr--security
- [ ] Disable after first click to protect against rapidly repeated submissions / spamming.<br />Use delay, debounce or other rate limiting<br /> #nfr--security
- [ ] Apply least privilege principle.<br />Don't allow or expose anything except what the user/consumer needs.<br /> #nfr--security
- [ ] Minimise client-exposed interfaces to reduce attack surface area.<br /> #nfr--security
- [ ] Don't expose env vars to build or dev server that don't need to be exposed.<br /> #nfr--security
- [ ] Check for cross-site scripting attack (XSS) vulnerability.<br /> #nfr--security
- [ ] Check for unmasking customer personally identifiable information (PII) vulnerability.<br /> #nfr--security
- [ ] Check for misleading the customer vulnerability.<br /> #nfr--security
- [ ] Check OWASP Top 10.<br /> #nfr--security
- [ ] Careful with calling new APIs that have not been consumed before. Make sure they're security vetted.<br /> #nfr--security
- [ ] Careful with integrating with existing API already in Prod with different clients.<br />For example: native client when building a new web client. Input may be less constrained in web, opening a potential vulnerability. Make sure back-end is hardened for such a new use case.<br /> #nfr--security
- [ ] Careful integrating via new flows that haven't been used before.<br />Make sure they're security vetted before going to Prod.<br /> #nfr--security
- [ ] Careful when adding new input fields / user input / URL Parameters.<br /> #nfr--security
- [ ] Careful about significant changes to underlying platform or control.<br />Such as updates to vendor systems (logging frameworks, etc) or migrations to new cloud/hosting providers.<br /> #nfr--security
- [ ] Check for replay vulnerability.<br />This is where the network request is captured and submitted again without modification.<br /> #nfr--security
- [ ] Ensure pen-testing process is in place if needed.<br />Be sure to request pen-testing as per processes in your organisation.<br /> #nfr--security
- [ ] Entering HTML entity into an input should not create a vulnerability.<br />It might need to be sanitised when displayed back to the user, to avoid injection attack. For example: `<script>` should be sanitised so that the browser does not execute code within.<br /> #nfr--security
- [ ] Use timeouts to reduce attack surface.<br />For example, generated secure redirect URLs could timeout after a few minutes.<br /> #nfr--security
- [ ] If you render `<a href={user.website}>`, beware of the user whose website is `'javascript: stealYourPassword()'`.<br /> #nfr--security
- [ ] Avoid spreading user input like `<div {...userData}>` or any object that might contain user input.<br />[Blog: Why Do React Elements Have a typeOf Property?](https://overreacted.io/why-do-react-elements-have-typeof-property/)<br /> #nfr--security
- [ ] DevSecOps: Shift left.<br />Try to anticipate and address security issues as early as possible, such as in planning, design or build.<br /> #nfr--security
- [ ] Never put potentially sensitive data somewhere insecure.<br />For example: client storage (`localStorage`, `sessionStorage`)<br /> #nfr--security
- [ ] Avoid putting putting sensitive data in GET query-string parameters, headers, etc.<br />Even behind HTTP it might still show up in logs or other insecure places.<br /> #nfr--security
- [ ] Non-reversible locators are Ok.<br /> #nfr--security
- [ ] Careful with `id`s that are publicly visible.<br />Make sure they are totally non-identifiable with regard to the data they reference.<br /> #nfr--security
- [ ] Keep experience for security admins separate from that for users.<br />Users should have maximum convenience and simplicity but minimal control that would render systems vulnerable.<br /> #nfr--security

[^security]: Security refers to protection of the application and data from unauthorized access, use, or destruction, ensuring confidentiality, integrity, and availability.





{/* USABILITY */}




## Date and time [^date-and-time]

- [ ] Ensure multiple time-zones are supported if necessary. Test with simulated time-zone.<br /> #general--date-and-time
- [ ] Formatting date or time values should follow user's locale format and show value in correct time-zone.<br /> #general--date-and-time
- [ ] Ensure time-zone differences between hosting location and user's browser location do not create issues.<br /> #general--date-and-time

[^date-and-time]: Date and time items relate to code and systems that deal with date and time directly or are impacted by date and time factors such as the user's time-zone.




## Numbers [^numbers]

- [ ] Format numeric values correctly.<br />For example, currencies should use correct comma and currency symbol or code if needed.<br /> #general--numbers
- [ ] Parse numeric values received as a string to the correct number format.<br /> #general--numbers

[^numbers]: Numbers items relate to code and systems that deal with numeric values.



## Design [^design]

### Design - Interaction

- [ ] Handle error states with helpful messages and feedback.<br /> #general--design
- [ ] Handle loading states with appropriate visual / textual cues, without breaking anything.<br /> #general--design
- [ ] Smooth loading states, eliminate weird artefacts, distortion, etc.<br /> #general--design
- [ ] Always represent user's input even if invalid; show validation alongside invalid value.<br /> #general--design
- [ ] Responsive, snappy, instant feedback even if it's just transition to a loading state.<br /> #general--design

### Design - Modals

- [ ] Capture focus on open.<br /> #general--design
- [ ] Easily closable.<br /> #general--design
- [ ] Use modal props, not conditional rendering, to support animation on modal open/close.<br /> #general--design
- [ ] Present the outcome of a multi-step process in a way that makes sense to the user.<br />For example: making a transfer in a banking app should results in a success screen with summary of the details; also the transfer should be shown in the transactions list.<br /> #general--design
- [ ] Careful when consuming context inside a modal – ensure it works in every case where the modal appears.<br /> #general--design
- [ ] Ensure `Esc` keypress is handled, as a way to quickly close the modal.<br /> #general--design

### Design - Visual

- [ ] Light/dark mode.<br /> #general--design
- [ ] Accessible colour contrast.<br /> #general--design
- [ ] Compare with design, ensure alignment.<br /> #general--design
- [ ] Should conform to general UI guidelines if provided.<br /> #general--design
- [ ] Disable / hide actions if a system error will make them inaccessible.<br /> #general--design
- [ ] Whole button should be clickable, not just part of it.<br /> #general--design
- [ ] Loading indicators.<br /> Spinners, indicators or skeletons.<br /> #general--design
- [ ] Correct mouse pointer.<br /> #general--design

### Design - Text

- [ ] Shorten very long text and ensure it does not break layout.<br />Use ellipsis, wrap or summarise and add "more" button.<br /> #general--design
- [ ] Consistent casing.<br /> #general--design
- [ ] Correct localisation / internationalisation as needed.<br /> #general--design
- [ ] Sort lists correctly. For example: alphabetically.<br /> #general--design
- [ ] Avoid user seeing duplicate labels / names of things and getting confused.<br /> #general--design
- [ ] Unless specified otherwise, all text rendered should be selectable and copyable.<br /> #general--design

### Design - Design system

- [ ] Use correct layout components.<br /> #general--design
- [ ] Use existing design system patterns or library components, don't re-invent.<br /> #general--design
- [ ] Make sure look & feel is broadly consistent with the rest of the site; question the design as needed.<br /> #general--design
- [ ] Careful not to accidentally deviate from design system by blindly following design mock-up.<br /> #general--design

### Design - Component library

- [ ] Before using custom classes, props, etc. check if it's part of component library already.<br /> #general--design
- [ ] Keep component library version up-to-date.<br /> #general--design
- [ ] Prefer to use component props where possible rather than manual CSS styling.<br /> #general--design
- [ ] Look for usage examples in component library and keep consistent with them.<br /> #general--design

### Design - Usability

- [ ] Minimise Cumulative Layout Shift (CLS).<br /> #general--design #nfr--usability
- [ ] Handle errors that can occur in a user friendly way.<br /> #general--design #nfr--usability
- [ ] Handle failed requests as errors.<br /> #general--design #nfr--usability
- [ ] Handle loading states with appropriate visual / textual cues, without breaking anything.<br /> #general--design #nfr--usability
- [ ] Smooth state transitions to/from loading and error.<br /> #general--design #nfr--usability
- [ ] Eliminate weird artefacts, distortion, etc.<br /> #general--design #nfr--usability
- [ ] Error pages for failed full page loads.<br /> #general--design #nfr--usability
- [ ] Ensure any update to a value in one place reflected in the value in another place.<br /> #general--design #nfr--usability
- [ ] Ensure any update on one device is reflected on other devices.<br /> #general--design #nfr--usability

[^design]: Design items in this checklist relate to code used to implement a visual design.




## Content [^content]

- [ ] Run basic spelling and grammar check.<br /> #general--content
- [ ] Use consistent phrasing, formatting.<br /> #general--content
- [ ] Use slanted single-quotes where possible instead of instead of straight.<br /> #general--content

[^content]: Content items relate to code used to convey textual information to the user.




## Forms [^forms]

- [ ] Do not handle button click while in loading or saving state.<br />Use ally attrs appropriately.<br /> #general--forms #nfr--reliability
- [ ] Don't disable buttons when form is in invalid state.<br />[Article: Do not disable buttons](https://marcoheine.com/blog/do-not-disable-buttons)<br /> #general--forms #nfr--accessibility
- [ ] Careful not to let initial values be wiped when there's a background data refresh.<br /> #general--forms
- [ ] Consider whether one input should filter another input.<br />For example: transfer from one account to another should nat allow transfer from one account to itself.<br /> #general--forms #nfr--usability
- [ ] Pre-fill field values where it improves usability.<br /> #general--forms #nfr--usability
- [ ] Order similar sequences of elements similarly.<br />For example: From and To accounts should be ordered the same for Payment as for Transfer.<br /> #general--forms #nfr--usability
- [ ] Careful not to allow multiple rapid form submits or actions.<br />This could expose automated DOS attacks.<br /> #general--forms #nfr--security

[^forms]: Forms refers to collections of inputs that users fill in with data on a web page.




{/* PIPELINE */}




## Configuration [^configuration]

- [ ] Ensure entries are in alphabetic order, where that is the standard.<br /> #nfr--consistency #general--configuration

[^configuration]: Configuration refers to configuration files and configuration-as-code, such as CI/CD, environment, feature flags, etc.




## Package [^package]

- [ ] Put dependencies in the right category - developer vs. production.<br /> [Blog: Categorize Your Dependencies](https://antfu.me/posts)<br /> #general--package
- [ ] Remove package that is made unnecessary due to the current code change.<br /> #general--package
- [ ] Careful about supply-chain vulnerabilities. Ensure packages being consumed do not contain significant vulnerabilities.<br /> #general--package #nfr--security

[^package]: Package covers management of packages, such as third-party libraries, either consumed by or exposed by the application.




## Build [^build]

- [ ] Cache or otherwise re-use dependencies that don’t change often, to speed up the build.<br />[Article: PNPM GitHub Actions Cache](https://theodorusclarence.com/shorts/github/pnpm-github-actions-cache)<br /> #general--build

[^build]: Build covers issues related to building the application for deployment to an environment.




## Deployment [^deployment]

- [ ] Time deployment to minimise disruption.<br />For example, avoid deploying during peak or critical usage periods if possible.<br /> #general--deployment

[^deployment]: Deployment covers issues related to deploying the built application to an environment.




{/* CODE */}




## Code [^code]

### Code - General

- [ ] Check for typos (accidental keystrokes) or accidental mis-spellings.<br /> #general--code
- [ ] Ensure pass-by-value vs. pass-by-reference are being used correctly.<br /> #general--code

### Code - Style

- [ ] Use clean code.<br />Minimal - remove unnecessary code. Simple - use "boring" code.<br /> #general--code
- [ ] Ensure either the code is self-documenting or there are sufficient comments to aid understanding.<br /> #general--code
- [ ] Scan the code quickly and ensure it is understandable.<br /> #general--code
- [ ] Simplify and flatten deeply nested structures for readability.<br />For example; nested `if`, `switch` statements.<br /> #general--code
- [ ] Replace multiple `if` statements with one `switch` statement if possible.<br /> #general--code
- [ ] Use pattern matching style.<br /> #general--code
- [ ] Split large function to smaller functions.<br /> #nfr--readability #general--code
- [ ] Extract sequences of complex routines to separate functions.<br />Function calls can then be scanned more quickly for a high level overview.<br /> #general--code
- [ ] Remove unnecessary or improper import order changes accidentally committed.<br />For example: because of formatter issues.<br /> #general--code
- [ ] Group related statements with whitespace between.<br /> #general--code
- [ ] Remove unnecessary, unused function parameters where possible.<br /> #general--code
- [ ] Remove unused code where possible.<br /> #general--code
- [ ] Use more condensed syntax where still readable.<br />For example: inline conditionals (`x ? y : z`) for very simple logic.<br /> #general--code
- [ ] Use expanded syntax for function declaration.<br />For example: `function foo() { ... }` in Typescript. This makes it easier to later insert logging or other statements.<br /> #general--code
- [ ] Pass single param object rather than many parameters.<br /> #general--code
- [ ] Extract filtering, mapping and other logic to nicely named pure functions.<br />For example: `flights.filter(byDestination(foo))` or `invitees.map(toFullName)`.<br /> #general--code
- [ ] Use idiomatic coding style.<br />As appropriate to the language and frameworks in the current code base.<br /> #general--code
- [ ] Use coding style consistent with the surrounding code-base.<br />For maintainability, upgradeability and easier readability by the current team. Alternately, clearly communicate and agree on scope and phases of change to coding style.<br /> #general--code
- [ ] Don't suppress errors when it would be more proper to let them surface.<br />For example: so we can uncover and resolve them, say through monitoring/observability.<br /> #general--code
- [ ] Avoid nested ternaries where possible, as they're difficult to read.<br />Expand into nested `if`/`then`/`else` and/or extract to separate functions.<br /> #general--code
- [ ] Instead of making all param object fields optional, just make whole param optional.<br /> #general--code
- [ ] Use library and language facilities correctly. Don't re-invent the wheel.<br /> #general--code #nfr--readability #nfr--performance

### Code - Structure

- [ ] Fit in with existing code unless new best practice is documented.<br /> #general--code #nfr--readability
- [ ] Leave it cleaner than you found it.<br />For example: remove code that is no longer needed.<br /> #general--code #nfr--readability #nfr--maintainability
- [ ] Don't clutter shared folders like atoms with components only used in one file.<br />Just declare them inline in that file.<br /> #general--code
- [ ] Deep classes, shallow interfaces.<br />[Book: A Philosophy of Software Design, Ch 4](https://web.stanford.edu/~ouster/cgi-bin/aposd.php)<br /> #general--code
- [ ] Define overly complex structures out of existence.<br />Change the design so that they are unnecessary.<br /> #general--code #nfr--readability #nfr--maintainability
- [ ] Use a more specific structure (function, variable, etc) if appropriate.<br /> #general--code
- [ ] Re-use an existing structure (function, variable, etc) if appropriate.<br />Move it to a shared folder/package/module and export.<br /> #general--code
- [ ] Re-use code in a higher-level folder/package/module where possible.<br /> #general--code
- [ ] Keep list entries in alphabetical order when adding or moving, if that's the convention.<br /> #general--code
- [ ] Don't add specific things to generic components.<br /> #general--code
- [ ] Move code to a common/shared module if appropriate.<br /> #general--code
- [ ] Move code to a more specific module or deeper sub-folder if appropriate.<br /> #general--code
- [ ] Move common data to a higher-level function and pass down (or otherwise share) to more lower-level functions.<br /> #general--code
- [ ] Pull a file up to a higher folder level if it is consumed by sub-folders of that level.<br /> #general--code
- [ ] Look at other adjacent or nearby similar constructs and think about how they should be modified (or left the same).<br /> #general--code
- [ ] Don't extract functions that are extremely trivial, where there is no complexity to hide.<br />For example: it doesn't make sense to extract: `foo > 0` to `isGreaterThanZero`. Having a whole separate function for something so trivial does not add value.<br /> #general--code
- [ ] Don't do barrel exports.<br />[Blog: Please Stop Using Barrel Files](https://tkdodo.eu/blog/please-stop-using-barrel-files)<br /> #general--code

### Code - Reliability

- [ ] Check parameters and early return / throw if unexpected.<br />Use typed `assert` if possible, for conciseness.<br /> #general--code #nfr--correctness #language--typescript
- [ ] Avoid code that dynamically accesses other code without the developer being aware, and might break if that code changes.<br /> #general--code #nfr--maintainability #nfr--reliability
- [ ] Perform impact analysis if adding an entry in some structure.<br />For example: dictionary, enum, etc. Be careful that there isn't some code that dynamically operates on that structure, which is impacted.<br /> #general--code #nfr--correctness

### Code - Naming

- [ ] Simple plain English as much as possible.<br /> #general--code
- [ ] Choose specific words carefully and deliberately.<br /> #general--code
- [ ] Use names that won't go out of date in future.<br /> #general--code
- [ ] Use consistent prefixes. pronouns, similar.<br />For example: `has{Foo}` if that's the convention in the code-base. Prefix booleans with `is`, `can`, `has`, `should`, etc.<br /> #general--code
- [ ] Use consistent pluralisation.<br />For example: `Features` vs `Feature`.<br /> #general--code
- [ ] Use specific rather than generic names, where that's clearer.<br /> #general--code
- [ ] Use consistent casing.<br />For example: `camelCase`, `PascalCase`, etc.<br /> #general--code
- [ ] Reference appropriate units.<br />For example: dollars, pixels, etc.<br /> #general--code
- [ ] Include important information.<br />For example: `plaintextPassword` if that matters for security.<br /> #general--code
- [ ] Think about how long name should be.<br />Keep it as short as possible.<br /> #general--code
- [ ] Use name formatting to pack extra information.<br />For example: local members prefixed with `l`.<br /> #general--code
- [ ] Name ranges intuitively.<br />For example: min/max for inclusive limits, first/last for inclusive ranges.<br /> #general--code
- [ ] Match expectations of consumers.<br />For example: don't name expensive calculation like a simple "getter".<br /> #general--code
- [ ] Enum values should match up with keys and use correct formatting.<br />For example: `snake-case`.<br /> #general--code
- [ ] Avoid single-letter or otherwise cryptic names.<br /> #general--code
- [ ] Naming should be intuitive.<br /> #general--code
- [ ] Name files consistent with their main purpose, main export, etc.<br /> #general--code
- [ ] Use longer names with rigorous prefixing, to prevent name clashes, where that's likely.<br /> #general--code
- [ ] Avoid duplicating names within the same structure.<br />For example: don't name a variable inside a function the same as the containing function.<br /> #general--code
- [ ] Structural naming, when important.<br />Have a hierarchy, such as FooBar, FooBarBaz, FooBiz, etc.<br /> #general--code

### Code - Removing or modifying

- [ ] When adding or removing an item in a hard-coded set, be careful of the impact.<br />For example: when changing an enumeration, check that there isn't any code that dynamically loops over it, which gets inadvertently impacted.<br />  #general--code
- [ ] If code is removed, also find and remove now-unused / "orphaned" code.<br /> #nfr--readability #nfr--maintainability.<br /> #general--code
- [ ] Careful when modifying big complex statements or code blocks.<br />Ensure original meaning and function is preserved.<br /> #general--code #nfr--readability #nfr--correctness

### Code - Logic

- [ ] Check for off-by-one errors.<br /> #general--code
- [ ] Check for false-positives.<br />For example: a `true` check that seems superficially correct, but is actually the wrong way round.<br /> #general--code
- [ ] Check for expressions being implicitly coerced to incorrect boolean values.<br />For example: `if (foo)` where `foo` is assumed to evaluate to `false` under certain conditions, but actually does not.<br /> #general--code
- [ ] Incorrect filtering, such as excluding when you intended to include.<br /> #general--code
- [ ] Mixing destructive and non-destructive set operations, resulting in missing items.<br />For example: slicing first then sorting.<br /> #general--code

[^code]: Code refers to any kind of code in any language.




## Javascript [^javascript]

- [ ] Use map with inline lookup rather than `switch`.<br />Like this: `{ key1: "value1", key2: "value2", ... }[key]`.<br /> #language--javascript
- [ ] Choose between third-party library like `lodash` vs. custom function or built-in Browser API.<br />Correct solution depends on the context. For example: if minimising package size, a custom function might be best.<br /> #language--javascript
- [ ] Explicitly compare value rather than using implicit `truthy/falsy` casting, for clarity.<br />For example: `if (arr.length > 0)` is probably clearer than `if (arr.length)`.<br /> #language--javascript
- [ ] Remove unnecessary template strings.<br /> #language--javascript
- [ ] Keep objects as simple as possible, avoid deep complex nested structures where possible.<br /> #language--javascript
- [ ] Don't declare function as async unnecessarily.<br /> #language--javascript
- [ ] Use destructuring import statements rather than `import * from `, where possible.<br /> #language--javascript
- [ ] Use code splitting, dynamic import and/or lazy loading to speed up load times in complex applications.<br />[Article: Implementing Dynamic Import and Code Splitting](https://www.icodeit.com.au/posts/dynamic-import)<br /> #language--javascript #nfr--performance

### Javascript - API calls

- [ ] Ensure API request parameters and response fields are used correctly.<br /> Verify with Backend developers if uncertain and ensure correct usage is clearly spelled out in code or documented somewhere.<br /> #nfr--correctness #backend-calls
- [ ] Check for bad values returned from API calls.<br />Ensure they're logged and handled as smoothly as possible from user's perspective.<br /> #nfr--correctness

[^javascript]: Javascript items relate to Javascript and code that compiles to Javascript, such as Typescript.




## Typescript [^typescript]

- [ ] Don't unnecessarily cast to a type or specify a type, where it is already implicitly or explicitly cast or specified.<br /> #language--typescript
- [ ] Don't use JSDocs to communicate type information where Typescript types can do it.<br /> #language--typescript
- [ ] Generally avoid fallbacks, just deal with falsy values as they are.<br /> #language--typescript
- [ ] Don't use unusual or whimsical fallbacks/defaults.<br />Just pass through the falsy value or fall back to `undefined` when in doubt (explicitly or implicitly) and handle it explicitly where necessary.<br /> #language--typescript
- [ ] Eliminate optional chaining operators where possible (`?.`, `!.`) by making the type non-nullish from the start.<br /> #language--typescript
- [ ] Use optional types and chaining operators (`?.`) if the value really might not exist.<br />For example: when the API specification clearly states it might not exist, or if there have been cases in past when it did not exist.<br /> #language--typescript
- [ ] Observe where declared types are different from actual runtime values and fix where possible.<br /> #language--typescript
- [ ] Avoid using `as` explicit type-casting, but work with the types as they actually are.<br />Use `as`to express real and appropriate intent. Do not use as a hack, to just make something compile.<br /> #language--typescript
- [ ] Use empty array (`[]`) rather than `undefined` as the type of a list that is actually empty.<br />Use `undefined` rather than empty array (`[]`) where there is no list and this really needs to be treated distinctly from an empty list.<br /> #language--typescript
- [ ] Prefer all values to be typed; avoid `any` or `unknown` where possible.<br /> #language--typescript
- [ ] Prefer `unknown` over `any` if unable to type.<br /> #language--typescript
- [ ] Ensure as much of the code base as possible / as desired is typed.<br /> #language--typescript
- [ ] Choose between optional field vs. `| undefined` field type.<br /> #language--typescript
- [ ] Use `satisfies` instead of `as` to preserve the original type.<br /> #language--typescript
- [ ] Use type-guarding `assert`, to ensure values really are correct at runtime.<br />Rather than leaning on `as` casting and risking value being different than expected at runtime.<br /> #language--typescript
- [ ] Don't use `assert` if you reasonably expect the value might be typed differently than expected.<br />We don't want the system to crash in that case.<br /> #language--typescript
- [ ] Move `assert`s to the top of the function body where possible for clarity.<br /> #language--typescript
- [ ] Avoid duck-typing. Where we must do duck-typing, prefer more explicit or informative checks.<br />For example: `type === "duck"` and/or extract to a clearly named function, For example: `isDuck(value): value is Duck`.<br /> #language--typescript
- [ ] Keep interfaces / types as simple as possible.<br />Avoid deep complex nested structures where possible.<br /> #language--typescript
- [ ] Explicitly type const objects/arrays when using spread operator, defensively.<br /> #language--typescript

[^typescript]: Typescript items relate to Typescript code.




## HTML [^html]

- [ ] Semantic HTML - Group related controls.<br /> #language--html
- [ ] Semantic HTML - Use correct elements.<br />For example: buttons for things that actually respond to clicks.<br /> #language--html
- [ ] Omit attributes that are not needed because the behaviour is enabled by default.<br /> #language--html

[^html]: HTML items relate to HTML and code that compiles to HTML, such as template syntax.




## CSS [^css]

- [ ] For size and spacing, use appropriate units, preferring rems and percentages.<br /> #language--css
- [ ] Ensure images respond correctly to light and dark mode.<br />[Blog: How to make images react to light and dark mode](https://larsmagnus.co/blog/how-to-make-images-react-to-light-and-dark-mode)<br /> #language--css

[^css]: CSS items relate to CSS and code that compiles to CSS, such as LESS or SASS.




{/* FRAMEWORKS */}




## React [^react]

- [ ] Remove unnecessary fragments.<br /> #framework--react
- [ ] Prefer custom hooks over HOCs and renderProps.<br /> #framework--react
- [ ] Avoid unnecessary re-rendering of child components.<br />For example: do not pass prop values that change in ways that unnecessarily trigger rendering. Apply memoization as needed.<br /> #framework--react
- [ ] Careful with use of context in ways that trigger unnecessary re-rendering.<br />Apply techniques as needed: memoization, split contexts, reducers, context selectors.<br />[Book: Advanced React, Ch 8](https://www.advanced-react.com)<br /> #framework--react
- [ ] Catch expected errors in event handlers, callbacks and other functions running outside the render lifecycle.<br />Use recommended techniques to handle them.<br /> #framework--react
- [ ] Catch expected errors in render lifecycle using error boundary.<br /> #framework--react
- [ ] Avoid `useEffect` and `useCallback` if possible.<br />Prefer inline calculation, `useMemo` or other techniques. But it is valid to use it for initial data loading.<br />[Blog: When to useMemo and useCallback](https://kentcdodds.com/blog/usememo-and-usecallback)<br />[Blog: useMemo and useCallback](https://www.joshwcomeau.com/react/usememo-and-usecallback/)<br /> #framework--react

### React - Props

- [ ] Keep props as simple as possible.<br />Avoid deep complex nested structures where possible.<br /> #framework--react
- [ ] Re-use defined types in props, where that keeps the overall solution simpler and is ok for performance.<br />For example: simpler rendering, co-located rendering related to that object.<br /> #framework--react
- [ ] Remove unnecessary or unused props.<br /> #framework--react
- [ ] Don't call components like functions, use `<Component>` JSX syntax.<br />[Blog: Don't call a React function component](https://kentcdodds.com/blog/dont-call-a-react-function-component)<br /> #framework--react
- [ ] Early return if we don't want to render anything; `return null`.<br /> #framework--react
- [ ] Don't pass props that are not needed because the behaviour is enabled by default.<br /> #framework--react
- [ ] Avoid excessive props-drilling.<br />Consider using a cleaner pattern such as composition or context.<br />[Blog: Prop drilling and component composition in React](https://alexsidorenko.com/blog/react-prop-drilling-composition)<br />[Blog: What is prop drilling and how to avoid it](https://marcoheine.com/blog/what-is-prop-drilling-and-how-to-avoid-it)<br /> #framework--react

### React - JSX

- [ ] When rendering dynamic array of objects, provide `key` prop and make sure value is suitable.<br />That is, not just `index` if items might change order or if item in same position might need to re-render.<br /> #framework--react

### React - Components

- [ ] Order and group a component's inner structures sensibly.<br />For example: constants, hook calls, event handlers, util functions then return with JSX.<br /> #framework--react #nfr--readability
- [ ] When there are repeated similar component calls, consider extracting them to a common component.<br /> #framework--react
- [ ] Anticipate what might trigger unnecessary re-renders and reduce them.<br />For example: instead of changing just 1-2 props, causing the whole component to re-render, extract just the changing parts to a separate component and rendering it inside `children` or a render prop.<br /> #framework--react
- [ ] Consider conditional rendering, where we expect the value being displayed might be falsy (`null`, `undefined`, `false`, etc).<br /> #framework--react

### React - Hooks

- [ ] Use intuitive field names in the hook result object if appropriate.<br />For example: `return { orders }` instead of `return { data }`.<br /> #framework--react
- [ ] Careful about initialising return value of array to empty (`[]`) in hook without providing some kind of loading indicator.<br />Semantically, `[]` might mean it's empty, so maybe `undefined` or `null` is more accurate, during initial load or if there's an error on initial load.<br /> #framework--react #nfr--readability
- [ ] When calling a hook from another hook, careful about state changes cascading, causing unexpected re-renders, slowing down the app.<br />In this regard, treat hooks like render props.<br />[Book: Advanced React, Ch 4](https://www.advanced-react.com)<br /> #framework--react
- [ ] When hooks include JSX structures, extract them to components or design them out of existence.<br /> #framework--react
- [ ] Don't use a hook where a simpler structure, such as a `function` or `const`, would be sufficient.<br /> #framework--react
- [ ] Careful about using a hook in a context where its data is unavailable.<br />It might crash the app unexpectedly.<br /> #framework--react 

### React - State

- [ ] Keep state as local as possible.<br /> #framework--react
- [ ] Group related values into one memo / state object.<br /> #framework--react
- [ ] Don't mirror props in state.<br /> #framework--react
- [ ] Consider which inputs should be controlled vs. uncontrolled.<br /> #framework--react
- [ ] Use best practices when persisting to localStorage.<br />[Blog: Persisting React State in localStorage](https://www.joshwcomeau.com/react/persisting-react-state-in-localstorage/)<br /> #framework--react

### React - Bug prevention

- [ ] Ensure a hook does not depend context which is not available.<br />If context is not available, it should not break the app when the hook is rendered.<br /> #framework--react

### React - Performance

- [ ] Combine `useMemo` where helpful.<br /> #framework--react
- [ ] Memoise whole component where helpful using `memo`.<br /> #framework--react

### React - Forms

- [ ] When disabling all fields, pass "disabled" to useForm hook (react-hook-form) and ensure it's passed.<br /> #framework--react

[^react]: React refers to code that runs on the React framework.




## NextJS [^nextjs]

- [ ] Only use "server only" or "client only" where necessary.<br />Server components are by default. Only need explicit "client only" to manipulate the dom or "server only" to ensure security for sensitive logic.<br /> #framework--nextjs
- [ ] No need to call `use` on an async function call in an async server-rendered function.<br />Better to avoid it. Just make it async/await function and await the promise.<br />[Docs: use – React](https://react.dev/reference/react/use#caveats)<br /> #framework--nextjs
- [ ] Server rendered components and server actions (data-fetching functions that execute server-side) should not do formatting that is client-dependent.<br />For example: browser local date/time or light/dark mode. They should do server-side-appropriate processing and return data sufficient for the client-side to take over client-dependent work.<br /> #framework--nextjs
- [ ] Avoid "use client"; better to default to server rendering, for performance, and let NextJS apply client-side as needed.<br />Where it must be used, move it as far down the component tree as possible.<br /> #framework--nextjs
- [ ] Use specific NextJS redirect functions as needed.<br />Such as `notFound` when route cannot be resolved, `permanentRedirect` if something is permanently moved, etc.<br />[Docs: API Reference: Functions – NextJS](https://nextjs.org/docs/app/api-reference/functions)<br /> #framework--nextjs
- [ ] Use NextS file conventions.<br />Such as `not-found.tsx`, `error.tsx`, `loading.tsx`, etc. Prefer these over `<Suspense>` / `fallback`, as they are a NextJS convention and NextJS can pre-cache them.<br /> #framework--nextjs
- [ ] Keep server actions in separate file.<br /> #framework--nextjs
- [ ] Careful creating an`error.tsx` when there are sub-folders.<br />It means that errors in the sub-folders bubble up to this file, which might not create the right UX.<br /> #framework--nextjs
- [ ] Careful With Server Action calls immediately before redirect.<br />NextJS seems to cancel them.<br /> #framework--nextjs

### NextJS - Security

- [ ] Put `"use server"` at the top for sensitive server-side functions.<br />Prevents them ever being shared with the client.<br /> #framework--nextjs #nfr--security

### NextJS - Caching

- [ ] When using `cache`, provide separate params, don't use `params` object.<br /> #framework--nextjs #general--caching

[^nextjs]: NextJS refers to code that runs on the NextJS framework.




{/* */}




## Object Oriented Programming (OOP) [^oop]

- [ ] Apply SOLID principles.<br /> #general--oop

[^oop]: OOP refers to Object Oriented Programming principles, when and where they apply to the application.



## Appendix

### Non-functional requirements (NFRs)

- Achievability
- Simplicity
- Availability
- Correctness
- Readability
- Maintainability
- Security
- Testability 
- Accessibility 
- Performance
- Reliability
- Scalability
- Usability
- Observability
- Portability
- Compatibility
- Adaptability
- Economy

### SOLID principles

- Single-responsibility
- Open-closed
- Liskov substitution
- Interface segregation
- Dependency inversion




## References

### Non-Functional Requirements (NFRs)

- [Book: Object Oriented Software Construction • Bertrand MEYER](https://en.wikipedia.org/wiki/Object-Oriented_Software_Construction)

### Accessibility

- [Article: Checklist - The A11y Project](https://www.a11yproject.com/checklist/)

### Bug prevention

- [Website: Chromium Issues](https://issues.chromium.org/issues)

### Coding style

- [Book: The Art of Readable Code • Dustin BOSWELL](https://www.oreilly.com/library/view/the-art-of/9781449318482/)

### Code structure

- [Book: A Philosophy of Software Design • John OUSTERHOUT](https://web.stanford.edu/~ouster/cgi-bin/aposd.php)

### Web

- [Blog • Lars Magnus KLAVENES](https://larsmagnus.co/blog)
- [Blog • Marco HEINE](https://marcoheine.com/blog)
- [Blog • Brad WESTNESS](https://brad.westness.cc)
- [Blog • Anthony FU](https://antfu.me/posts)

- [Articles: MDN Web Docs](https://developer.mozilla.org)
- [Articles: web.dev](https://web.dev/articles)

- [Wiki: Flash of unstyled content - Wikipedia](https://en.wikipedia.org/wiki/Flash_of_unstyled_content)

- [Tool: Can I use... Support tables for HTML5, CSS3, etc](https://caniuse.com/)

### Javascript

- [Blog: I Code It • Juntao QIU](https://www.icodeit.com.au)

### Typescript

- [TkDodo's blog • Dominik](https://tkdodo.eu/blog)

### NextJS

- [Next.js by Vercel - The React Framework • Vercel](https://nextjs.org)

### React

- [Blog • Kent C. DODDS](https://kentcdodds.com/blog)
- [Docs: React Reference Overview • React Team](https://react.dev/reference)
- [Blog: overreacted • Dan ABRAMOV](https://overreacted.io)
- [Advanced React - Book and Video Course • Nadia MAKAREVICH](https://www.advanced-react.com)
- [Blog: React articles • Josh W. Comeau • Josh W. COMEAU](https://www.joshwcomeau.com/react)
- [Blog: ReactTDD.com - JavaScript testing techniques for React applications • Daniel IRVINE](https://reacttdd.com)
- [Blog • Alex SIDORENKO](https://alexsidorenko.com/blog)
- [Blog • Marco HEINE](https://marcoheine.com)

### Architecture

- [Website: The 12 Factor App](https://12factor.net)


### Unit testing

- [Book: Software Testing - A Craftsman's Approach • Paul JORGENSEN](https://www.routledge.com/Software-Testing-A-Craftsmans-Approach-Fifth-Edition/Jorgensen-DeVries/p/book/9780367767624)

