




## General




### General - Requirements [^requirements]

- [ ] Ensure non-functional requirements addressed, correctly applied and prioritised with appropriate trade-offs.<br />
  Example: in some projects, correctness is more important than performance. Or scalability is not a concern.<br />
  #general--requirements
- [ ] For changes that affect many execution paths, performance may be more critical, as slowness will have a massive impact.<br />
  #general--requirements
- [ ] Don't build features not explicitly documented in requirements.<br />
  When in doubt, ask for clarification and/or update requirements.<br />
  #general--requirements

[^requirements]: Requirements items in this checklist cover requirements as they apply to front end development tasks.




### General - Solution design [^solution-design]

- [ ] Keep it simple, don't over-engineer.<br />
  #general--solution-design
- [ ] Check that the solution design you're using is up-to-date.<br />
  #general--solution-design
- [ ] Perform impact analysis.<br />
  Measure how big the impact is. How many features, components, pages, products, apps, etc it impacts.<br />
  [Blog: Organizing Your Code to Minimize the 'Blast Radius'](https://brad.westness.cc/2024/04/07/organizing-your-code-to-minimize-the-blast-radius/)<br />
  #general--solution-design
- [ ] Longevity of the feature.<br />
  Check if there a start/end date. Perhaps it is seasonal or otherwise periodic. Check if there is a plan for removal.<br />
  #general--solution-design #nfr--maintainability
- [ ] Inherent vs accidental complexity.<br />
  Try to find a simpler solution.<br />
  #general--solution-design #nfr--readability #nfr--maintainability
- [ ] Don't rely on assumptions that haven't been tested and verified.<br />
  #general--solution-design #nfr--correctness

[^solution-design]: Solution design in this checklist covers solution design as it applies to front end development tasks.



### General - Cleanness [^cleanness]

- [ ] Check for subtle logic errors.<br />
  False-positives. Checking for `true` when you should check for `false` or vice-versa.<br />
  Confusing inclusive vs. exclusive ranges. *Between* 1 and 5 vs. *from* 1 to 5.<br />
  Coercing truthy/falsy values to get an incorrect boolean result.<br />
  Off-by-one errors. Example: starting a loop from 1 in a 0-based array.<br />
  Filtering operations. Exclusive vs. inclusive lists. And vs. or operators.<br />
  #general--cleanness
- [ ] Test long sequences of actions and make sure the result at the end is exactly as expected.<br />
  #general--cleanness
- [ ] Check for typos, accidental keystrokes, inadvertent capitalisation.<br />
  #general--cleanness
- [ ] Input values in unexpectedly large quantities, in an unexpected format or null/empty values.<br />
  #general--cleanness
- [ ] Test with correctly formatted but illogical values.<br />
  Example: a date that is the 32nd of the month.<br />
  #general--cleanness
- [ ] Add a larger than normal number of items to a list.<br />
  #general--cleanness
- [ ] Run multiple instances of the application at once and verify that it still works properly.<br />
  #general--cleanness
- [ ] Values vs. references.<br />
  #general--cleanness
- [ ] Check for memory leaks.<br />
  Example: in Javascript, Maps that reference DOM nodes that no longer exist.<br />
  Example: in RXJS, subscriptions to observables that you forgot to unsubscribe.<br />
  Use tools for diagnosing memory leaks. Example: Chrome Developer Tools - Performance tab.<br />
  #general--cleanness
- [ ] Check for code executing too often.<br />
  #general--cleanness
- [ ] Check things that look and behave superficially similarly, but are qualitatively different.<br />
  Example: Two lists that appear identical but have different underlying data, where one of them might have an error.<br />
  #general--cleanness
- [ ] Perform null-checks where values might be null.<br />
  #general--cleanness
- [ ] Check for race conditions that might cause async, concurrent or parallel data loading to create errors.<br />
  #general--cleanness
- [ ] Ensure no breakage on various devices, operating systems (and versions), screen sizes and zoom factors.<br />
  #general--cleanness
- [ ] Careful to ensure that inputs to formatting functions are always valid.<br />
  Example: Numeric values, such as money amounts; date and time values; etc.<br />
  Incorrectly formatted inputs can cause exceptions or unexpected behavior.<br />
  [Article: Do you pre-format your time strings before using TimeSpan.Parse | SSW.Rules](https://www.ssw.com.au/rules/pre-format-your-time-strings-before-using-timespan-parse) <br />
  #general--cleanness
- [ ] Perform load testing.<br />
  #general--cleanness
- [ ] Make sure you're running the expected version of the application when using it locally.<br />
  #general--cleanness
- [ ] Check in multiple environments.<br />
  Example: make sure it works not only in Dev environment, but also in UAT and Prod environments.<br />
  #general--cleanness
- [ ] On finding a bug, search for similar bugs and fix them too.<br />
  #general--cleanness
- [ ] Errors of commission vs. omission.<br />
  When adding new code, be careful that it doesn't cause an error.<br />
  Similarly, when adding new code, be careful that you didn't *forget* to include something, which might cause an error.<br />
  #general--cleanness
- [ ] Don't consume a data source where in some contexts it might not be available.<br />
  #general--cleanness
- [ ] Re-testing after merge or rebase.<br />
  #general--cleanness
- [ ] Ensure all remote API calls are working correctly.<br />
  Including: HTTP requests, web-sockets connections, etc.<br />
  #general--cleanness
- [ ] Check browser issue lists regularly to ensure changes do not break your application.<br />
  [Website: Chromium issues](https://issues.chromium.org/issues?q=status:open)<br />
  [Website: Firefox bugs](https://bugzilla.mozilla.org/describecomponents.cgi?product=Firefox)<br />
  [Website: Safari &amp; Web | Apple Developer Forums](https://developer.apple.com/forums/topics/safari-and-web-topic)<br />
  [Website: Microsoft Edge questions](https://learn.microsoft.com/en-gb/answers/questions/)<br />
  #general--cleanness
- [ ] Store data in the correct mechanism, to prevent accidental loss or other data issues.<br />
  [Docs: Storage options for your Amazon EC2 instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Storage.html)<br />
  [Article: Do you know where to store your application's files? | SSW.Rules](https://www.ssw.com.au/rules/where-to-store-your-applications-files)<br />
  [Article: Do you store Application-Level Settings in your database rather than configuration files when possible? | SSW.Rules](https://www.ssw.com.au/rules/store-application-level-settings-in-database-instead-of-configuration-files-when-possible)<br />
  #general--cleanness

[^cleanness]: Cleanness refers to the absence of bugs or other mistakes in the application and code.




### General - Architecture [^architecture]

- [ ] Codebase<br />
  One codebase tracked in revision control, many deploys<br />
  [Article: The 12 Factor App - Codebase](https://12factor.net/codebase)<br />
  #general--architecture
- [ ] Dependencies<br />
  Explicitly declare and isolate dependencies<br />
  [Article: The 12 Factor App - Dependencies](https://12factor.net/dependencies)<br />
  #general--architecture
- [ ] Config<br />
  Store config in the environment<br />
  [Article: The 12 Factor App - Config](https://12factor.net/config)<br />
  #general--architecture
- [ ] Backing services<br />
  Treat backing services as attached resources<br />
  [Article: The 12 Factor App - Backing services](https://12factor.net/backing-services)<br />
  #general--architecture
- [ ] Build, release, run<br />
  Strictly separate build and run stages<br />
  [Article: The 12 Factor App - Build, release, run](https://12factor.net/build-release-run)<br />
  #general--architecture
- [ ] Processes<br />
  Execute the app as one or more stateless processes<br />
  [Article: The 12 Factor App - Processes](https://12factor.net/processes)<br />
  #general--architecture
- [ ] Port binding<br />
  Export services via port binding<br />
  [Article: The 12 Factor App - Port binding](https://12factor.net/port-binding)<br />
  #general--architecture
- [ ] Concurrency<br />
  Scale out via the process model<br />
  [Article: The 12 Factor App - Concurrency](https://12factor.net/concurrency)<br />
  #general--architecture
- [ ] Disposability<br />
  Maximize robustness with fast startup and graceful shutdown<br />
  [Article: The 12 Factor App - Disposability](https://12factor.net/disposability)<br />
  #general--architecture
- [ ] Dev/prod parity<br />
  Keep development, staging, and production as similar as possible<br />
  [Article: The 12 Factor App - Dev/prod parity](https://12factor.net/dev-prod-parity)<br />
  #general--architecture
- [ ] Logs<br />
  Treat logs as event streams<br />
  [Article: The 12 Factor App - Logs](https://12factor.net/logs)<br />
  #general--architecture
- [ ] Admin processes<br />
  Run admin/management tasks as one-off processes<br />
  [Article: The 12 Factor App - Admin processes](https://12factor.net/admin-processes)<br />
  #general--architecture

[^architecture]: Architecture items refer architecture as it in influences, or is influenced by, the front end.




## General - AI

- [ ] Use AI for pair programming and code review.<br />
  [Article: Do you use AI pair programming? | SSW.Rules](https://www.ssw.com.au/rules/ai-pair-programming)<br />
  #general--ai




## Concerns




### Concerns - State [^state]

- [ ] Choose the most appropriate state management facility, considering all available options.<br />
  Scoped variable, Global variable, Component state, Context state, Global state, URL, Local/session storage, In-browser database, Server-side.<br />
  [Article: Do you know the best practice for managing state? | SSW.Rules](https://www.ssw.com.au/rules/best-practice-for-managing-state)<br />
  #concern--state
- [ ] Represent state to the user.<br />
  Example: URL path/querystring.<br />
  #concern--state
- [ ] Keep on server state that is sensitive or otherwise belongs there.<br />
  #concern--state
- [ ] Avoid contradictions or inconsistencies in state if possible.<br />
  At least, within the same state structure. Clearly document any contradictions.<br />
  #concern--state
- [ ] Avoid duplicated or redundant state.<br />
  Use calculated/memoized fields.<br />
  #concern--state

[^state]: State refers to any kind of state management in the application.




### Concerns - Errors [^errors]

- [ ] Handle expected errors only.<br />
  #concerns--errors
- [ ] Use global error handling to ensure exceptions don't break the whole app and block the user.<br />
  #concerns--errors
- [ ] Don't handle exceptions without re-throwing unless it's necessary.<br />
  Example: a bug in the API that can't be resolved just yet. If necessary, thoroughly document and have a plan to fix up in future. If an exception does happen, we want to let it bubble up and be handled by the general exception handling mechanism, such as an error boundary at the app level.<br />
  #concerns--errors #nfr--correctness
- [ ] Define exceptions / errors out of existence where possible.<br />
  [Book: A Philosophy of Software Design, Ch 10](https://web.stanford.edu/~ouster/cgi-bin/aposd.php)<br />
  #general--errors

[^errors]: Errors covers errors or exceptions that might occur within the application and how they are dealt with.




### Concerns - Caching [^caching]

- [ ] Invalidate a cache when the same data needs to be fetched freshly in a different context.<br />
  Use invalidation tags if available.<br />
  #concern--caching #nfr--correctness
- [ ] Avoid use of `localStorage`, `sessionStorage` and similar where possible.<br />
  As they introduce complications and maintenance overhead.<br />
  #concern--caching #nfr--maintainability
- [ ] Select `localStorage`  vs `sessionStorage` correctly depending on how long data needs to live.<br />
  #concern--caching
- [ ] Cache service-service or service-database calls to improve performance.<br />
  Example: in a NextJS backend, wrap API service calls in `cache`.<br />
  #concern--caching #nfr--performance
- [ ] When choosing caching strategy, consider whether cached call is idempotent, and treat appropriately.<br />
  #concern--caching
- [ ] Consider additional layer of caching for calls made many times.<br />
  Example: each item in a long list of items.<br />
  #concern--caching

[^caching]: Caching refers to storage of values, over various time-scales, for faster retrieval by the application.




### Concerns - Paging and sorting [^paging-sorting]

- [ ] Careful with locally sorting server-requested data.<br />
  Might not play nicely with server-side pagination.<br />
  #concern--paging-sorting
- [ ] Represent totals correctly – total of all items vs. current page items.<br />
  #concern--paging-sorting
- [ ] Ordering of paging vs. sorting – apply sort beforehand.<br />
  #concern--paging-sorting

[^paging-sorting]: Paging and sorting covers paging (or infinite scroll) and sorting (or ordering) of data sets in the application.




### Concerns - Localisation [^localisation]

- [ ] Localise all the text, and keep in a separate file or service.<br />
  #concern--localisation
- [ ] Look for similar words/phrases and re-use for consistency.<br />
  #concern--localisation
- [ ] Use readable, understandable naming for localisation keys.<br />
  #concern--localisation
- [ ] Use consistent, hierarchical naming for localisation keys.<br />
  Similar sense of structure as for components or feature folders.<br />
  #concern--localisation
- [ ] Put language and locale in URL.<br />
  Example: `mysite.com/en/AU/foo/bar`.<br />
  #concern--localisation
- [ ] Search for other surrounding/similar/related localisation keys.<br />
  Make sure they are named and positioned consistently and hierarchically.<br />
  #concern--localisation #nfr--maintainability

[^localisation]: Localisation refers to the ability of the application to adapt to varying local factors, such as time-zone, language and formatting conventions.




### Concerns - Feature flags [^feature-flags]

- [ ] Use a purpose-built, full-features platform, where applicable.<br />
  [Docs: LaunchDarkly](https://launchdarkly.com/docs/home)<br />
  #concern--feature-flags
- [ ] Put feature behind a feature flag as needed.<br />
  #concern--feature-flags
- [ ] Don't add in shared package, keep in application code, so it can be properly specific.<br />
  #concern--feature-flags
- [ ] Minimise usage of feature flags.<br />
  #concern--feature-flags
- [ ] Ensure there is a removal or maintenance plan.<br />
  #concern--feature-flags
- [ ] Check flag once at the highest level to avoid checking repeatedly at lower levels.<br />
  Example: if a flag turns off a whole list, put the if at the list level, not the list item level.<br />
  #concern--feature-flags
- [ ] Regression test. Features not controlled by a feature flag should remain unaffected.<br />
  #concern--feature-flags
- [ ] Hide or disable a whole page or route if its feature flag is off.<br />
  Example: prevent early disclosure or tip-off if we don't want the public to be aware of an upcoming feature.<br />
  #concern--feature-flags
- [ ] Ensure the right people know about a feature flag.<br />
  Example: product-wide concern vs. engineering-only. Or inter-team concern vs. team-specific. Make sure appropriate people are informed.<br />
  #concern--feature-flags
- [ ] Descriptions and any commentary should be accurate.<br />
  Check accuracy with regards to purpose of the flag, code and behaviour impacted, release dates, removal plan, etc.<br />
  #concern--feature-flags #concern--documentation
- [ ] Ensure feature flag is applied to correct environment if configurable.<br />
  Example: dev only or also UAT and Prod.<br />
  #concern--feature-flags
- [ ] Use case for feature flag: feature requires pen-testing before going live.<br />
  #concern--feature-flags
- [ ] Ensure feature flag is added to relevant lists, documentation, etc.<br />
  #concern--feature-flags
- [ ] Ensure feature flag is added to relevant back-end systems, configuration files, databases, etc.<br />
  #concern--feature-flags
- [ ] Ensure feature flag is configured to be writeable via cookies or similar, if appropriate and required.<br />
  #concern--feature-flags

[^feature-flags]: Feature flags refer to configuration settings that turn features on or off.




### Concerns - Analytics [^analytics]

- [ ] Add analytics code if needed.<br />
  #concern--analytics
- [ ] Use a dedicated, full-featured third-party analytics platform, where applicable.<br />
  [Platform: Google Analytics](https://marketingplatform.google.com/about/analytics/)<br />
  [Platform: Adobe Analytics](https://experienceleague.adobe.com/en/browse/analytics)<br />
  [Platform: Medallia AI](https://www.medallia.com/platform/analytics/)<br />
  #concern--analytics
- [ ] Make sure names / labels / tags passed are correct. Not excessive or insufficient.<br />
  #concern--analytics
- [ ] Check analytics calls, make sure they're not either excessive or being suppressed somehow.<br />
  #concern--analytics

[^analytics]: Analytics refers to reporting of web application traffic and events, helping stakeholders understand user behavior and improve it.




### Concerns - Tests [^tests]

#### Concerns - Tests - General

- [ ] Choose the right kind of test.<br />
  UI tests, Unit tests, Integration tests, E2E tests, Browser tests, PACT tests, Visual diff tests.<br />
  #concern--tests
- [ ] Prefer integration tests.<br />
  [Blog: Write tests. Not too many. Mostly integration.](https://kentcdodds.com/blog/write-tests)<br />
  #concern--tests
- [ ] Think about what value each test adds.<br />
  #concern--tests
- [ ] Break specific parts of the code under test and ensure tests fail in correct ways.<br />
  #concern--tests
- [ ] Keep tests small and concise.<br />
  #concern--tests
- [ ] Encode knowledge of how the code works in the test.<br />
  #concern--tests
- [ ] Don't overly nest describe blocks.<br />
  #concern--tests
- [ ] Don't overly split describe blocks such as many describe blocks that only have one test block inside.<br />
  #concern--tests
- [ ] Use test utils/helpers where they can simplify test code.<br />
  #concern--tests
- [ ] Minimise test running time.<br />
  #concern--tests
- [ ] Eliminate errors and warnings in console when running test.<br />
  #concern--tests
- [ ] Name tests appropriately.<br />
  #concern--tests
- [ ] Use immutable `const` where possible. Alternately, split into utility functions or before/after blocks.<br />
  #concern--tests
- [ ] Place tests in appropriate folder with appropriate and meaningful filename.<br />
  Use appropriate suffix, such as `.test.ts` or `.spec.ts`.<br />
  #concern--tests
- [ ] Use `beforeAll` rather than `beforeEach` where possible to minimise overhead.<br />
  #concern--tests
- [ ] Avoid `data-testid` if desired. Prefer to query by title, label, aria role, etc.<br />
  [Blog: Test IDs are an a11y smell](https://tkdodo.eu/blog/test-ids-are-an-a11y-smell)<br />
  #concern--tests
- [ ] Use appropriate formatting and values for `data-testid` - short, kebab-case, appropriate identifier.<br />
  #concern--tests
- [ ] Use descriptive names rather than indexes for `const`s destructured from arrays.<br />
  Example: `usernameLabel` rather than `label0`.<br />
  #concern--tests
- [ ] Avoid `beforeEach`, prefer to keep setup in individual tests.<br />
  #concern--tests
- [ ] No need to cover behaviour built-in to the framework.<br />
  #concern--tests
- [ ] Group test code into chunks and give each a descriptive comment, for readability.<br />
  #concern--tests
- [ ] Keep tests in the right file. Split or combine as needed.<br />
  #concern--tests
- [ ] Cover all possible scenarios. Think about how the test could fail, write the test test to fail, make it pass.<br />
  [Article: Code - Do you handle all possible scenarios? | SSW.Rules](https://www.ssw.com.au/rules/handle-unhappy-paths)<br />
  #concern--tests
- [ ] Improve or extend test data to more precisely capture test target and failure cases.<br />
  #concern--tests
- [ ] Only cover behaviour, including errors, that we expect to happen.<br />
  #concern--tests

#### Concerns - Tests - Manual

- [ ] Manually test the application, exercising every important code path impacted.<br />
  #nfr--correctness
- [ ] Prioritise testing effort. Example: test high impact stuff first, then easy-to-test stuff, then the rest.<br />
  #concern--tests
- [ ] Test Required input fields - they should not accept blank spaces, strange characters, etc.<br />
  #concern--tests
- [ ] Test fields with extreme values, Example: very low or high numbers or very long strings.<br />
  #concern--tests
- [ ] Perform actions fast and/or with simulated slow conditions and ensure no breakage.<br />
  #concern--tests
- [ ] Test Lists, tables with very large data-sets, if expected, and ensure they scale.<br />
  #concern--tests
- [ ] Exercise every important code path that might be impacted by your change.<br />
  #concern--tests
- [ ] Consider whether a "transfer" type transaction should be supported with the same source and destination.<br />
  Example: sending a message to oneself, paying oneself, etc.<br />
  #concern--tests
- [ ] Test all paths that can lead to a particular piece of code running.<br />
  Not just the path that you're currently focussed on.<br />
   #nfr--correctness
- [ ] Test all applications or APIs your changes might impact.<br />
  Example: logic that affects both a customer facing website and a staff admin dashboard.<br />
- [ ] Compare application before and after changes, to ensure there are no hidden regressions.

#### Concerns - Tests - Unit

- [ ] Maximise code coverage.<br />
  #concern--tests
- [ ] Put common behaviour (such as rendering) in functions rather than repeating in each test block.<br />
  #concern--tests
- [ ] Don't perform axe tests redundantly in unit tests, prefer E2E such as Playwright, as it's more realistic.<br />
  #concern--tests
- [ ] When mocking APIs, assert they were called with correct parameters (inside the mock function declaration).<br />
  #concern--tests
- [ ] No need to necessarily write unit tests if behaviour already covered by higher level (such as integration) and they are adding no value.<br />
  #concern--tests

#### Concerns - Tests - Mocking

- [ ] Mock structure - should be aligned with Backend API specs.<br />
  #concern--tests
- [ ] Mock values should be realistic, close to real data.<br />
  #concern--tests
- [ ] Keep mock objects as clean and simple as possible.<br />
  #concern--tests
- [ ] Clear mocks between assertions; this makes each assertion independent and prevents false positives.<br />
  #concern--tests
- [ ] Avoid mocking whole modules.<br />
  [Blog: Alternatives to module mocks in your unit tests](https://reacttdd.com/alternatives-to-module-mocks/)<br />
  #concern--tests
- [ ] Use mock data specific to your test, to avoid your test breaking when mock data changes.<br />
  #concern--tests
- [ ] Be careful about re-using mock data.<br />
  It can create a lot of complexity. Sometimes it's better to just completely declare the whole mock separately in each unit test, especially if the mocks can be kept very simple and only take maybe a few lines.<br />
  #concern--tests
- [ ] When mocks get big and complex, put a "base mock" in a separate mocks file and re-use it.<br />
  In each test, create an individual constant, using spread operator with type assertions.<br />
  #concern--tests
- [ ] Use typed `assert` statements to traverse mocks with a deep nested structure and lots of nested optional fields.<br />
  #concern--tests
- [ ] Avoid importing lots of mocks from many different sources.<br />
  It's a sign that the tests or underlying code is highly coupled and needs to be broken down a bit or abstracted more.<br />
  #concern--tests
- [ ] Use object cloning and assignment to set deeply nested field values as an alternative to complicated, deeply nested spread operators.<br />
  #concern--tests
- [ ] Mock endpoints such as network calls. Don't make real network calls inside unit tests.<br />
  #concern--tests
- [ ] No need to add full mocks or test coverage for features that are still under incremental development and behind feature flags, and where regression testing is adequate.<br />
  #concern--tests

#### Concerns - Tests - Assertions

- [ ] Nice error messages on test failure if possible.<br />
  #concern--tests
- [ ] Use Regex pattern when asserting absences, so tests cover a wider range of failure cases.<br />
  #concern--tests
- [ ] Use literals when asserting presences, so tests cover a narrower range of success cases, and so that failures are very clear.<br />
  #concern--tests
- [ ] When asserting on collections, assert on expected length first, so test breaks earlier and faster, and failure is faster to debug.<br />
  #concern--tests
- [ ] Assert counterfactuals.<br />
  Example: expect element not to exist.<br />
  #concern--tests
- [ ] Simplify big asserts.<br />
  #concern--tests
- [ ] Careful about modifying large asserts - make sure original intent is preserved.<br />
  #concern--tests
- [ ] Assert number of times function is called.<br />
  #concern--tests
- [ ] Omit field in asserted objects/arrays that aren't actually needed for the assertion to be correct and add value.<br />
  #concern--tests
- [ ] Ensure each and every assert works correctly in the failure cases.<br />
  Remove or modify code under test so that it fails.<br />
  #concern--tests
- [ ] Assert on parameter values of function calls.<br />
  #concern--tests
- [ ] Don't include unnecessary assertions.<br />
  Example: if clicking a button as part of an integration test, you don't necessarily need to assert on the button itself – its label, size, etc. – if the button is not the primary focus of the test.<br />
  #concern--tests

#### Concerns - Tests - Assertions - Jest

- [ ] Assert `toBe(true)` rather than `toBeTruthy()` if the expected value is exactly `true`.<br />
  #concern--tests #framework--jest #language--javascript
- [ ] Prefer explicit checks for existence (such as `.toBeInTheDocument()`) over more ambiguous checks (such as `.toBeTruthy()`).<br />
  #concern--tests #framework--jest #language--javascript
- [ ] Assert on specific field values with dot notation (`foo.bar`) rather than cumbersome deeply nested `objectContains` or similar.<br />
  #concern--tests #framework--jest #language--javascript

#### Concerns - Tests - React

- [ ] use `<Component>` as easily recognisable title for component tests.<br />
  #concern--tests #framework--react
- [ ] Use `exact: false` and/or `selector: "foo"` to select elements by partial text matching; more accurate than just using a `RegExp`.<br />
  #concern--tests #framework--react

#### Concerns - Tests - Jest

- [ ] Use `waitForNextUpdate` when testing hooks rather than wrapping in `waitFor`.<br />
  #concern--tests #framework--jest #language--javascript
- [ ] Only use `waitFor` (avoid `act`) and explicitly wait for a side-effect (some text to appear, callback to be called, etc).<br />
  [Blog: Understanding act](https://reacttdd.com/understanding-act/)<br />
  #concern--tests #framework--jest #language--javascript
- [ ] Use `waitFor` and `queryBy*` when asserting that an element was *not* rendered.<br />
  #concern--tests #framework--jest #language--javascript
- [ ] Don't use free-standing `wait`, wrap the code in `wait(() => { ... })` block.<br />
  #concern--tests #framework--jest #language--javascript
- [ ] Check far async causing unit test breakage to not get picked up by test.<br />
  #concern--tests #framework--jest #language--javascript
- [ ] Use helpers: `makeAxiosError`, `mockRoles`.<br />
  #concern--tests #framework--jest #language--javascript
- [ ] Avoid `waitFor` blocks. Just use `findBy*` where possible. Simpler.<br />
  #concern--tests #framework--jest #language--javascript
- [ ] Prefer `userEvent` rather than `fireEvent`, it's a higher abstraction level.<br />
  #concern--tests #framework--jest #language--javascript
- [ ] Call `userEvent.setup()` and use its return value, to isolate it per-test.<br />
  #concern--tests #framework--jest #language--javascript
- [ ] Don't use `jest.mock`. Prefer `jest.spyOn`.<br />
  [Post: Why use `spyOn` with mock implementation rather than `jest.fn`?](https://stackoverflow.com/a/64930781/23341)<br />
  #concern--tests #framework--jest #language--javascript

#### Concerns - Tests - Reliability

- [ ] Use `void` rather than `async` prefix with `renderAsyncComponent`, then wait for one of its elements to render (using `findBy*` or `waitFor` block).<br />
  This avoids a race condition between the component loading and test logic that expects it to have loaded.<br />
  #concern--tests
- [ ] Always `await` calls to `userEvent` such as `userEvent.click()`, etc.<br />
  #concern--tests
- [ ] Run the test many times repeatedly to test for flakiness (time permitting).<br />
  #concern--tests
- [ ] Add longer timeouts, where necessary, to prevent timeout failures.<br />
  Add to test locators, assertions or whole test files.<br />
  #concern--tests
- [ ] When there's a chain of API calls, see if you can wait for each to evaluate first, before asserting, to reduce likelihood of flakiness.<br />
  #concern--tests
- [ ] Don't assert on animation events like aria-busy if they cause flakiness.<br />
  #concern--tests
- [ ] Use `getBy` subsequently, once component has loaded. Using `findBy` on the first component, to wait for it to be loaded, followed by `getBy` to assert on the loaded elements.<br />
  #concern--tests

#### Concerns - Tests - E2E

- [ ] Add if needed.<br />
  #concern--tests
- [ ] Log a task for it, if it's involved work.<br />
  #concern--tests
- [ ] Use `test.step` to divide the internals of a test into smaller, well described sub-tests.<br />
  #concern--tests
- [ ] When in doubt, remove code under test and ensure test assertions fail appropriately.<br />
  #concern--tests
- [ ] Be mindful when writing E2E tests to reduce flakiness and slowness.<br />
  #concern--tests
- [ ] After navigation or reload, wait for page to load before continuing.<br />
  #concern--tests
- [ ] Use `toBeInViewport` vs `toBeVisible` appropriately, depending on how the elements are rendering.<br />
  #concern--tests
- [ ] condense element lookup into one expect if possible rather than multiple DOM accesses and traversals, which take up time.<br />
  #concern--tests
- [ ] Remove unnecessary `test.slow` or `test.setTimeout`.<br />
  #concern--tests
- [ ] Add accessibility tests (such as `axe`).<br />
  #concern--tests
- [ ] Clear input before populating with new value.<br />
  #concern--tests
- [ ] Run tests and check for accessibility violations as "warn" entries in console.<br />
  #concern--tests
- [ ] Avoid checks that are redundant because the code would have failed by that point.<br />
  #concern--tests

[^tests]: Tests refers to test specification and implementation, used to verify correctness and quality of the application. Both manual and automated testing is covered here.




### Concerns - Version control [^version-control]

- [ ] Rebase on main/master regularly.<br />
  #concern--version-control
- [ ] Use a standard format for commit messages.<br />
  Example: Conventional Commits. Or whatever format the team agrees on.<br />
  [Website: Conventional Commits](https://www.conventionalcommits.org)<br />
  [Tool: Commitizen](https://commitizen-tools.github.io/commitizen/)<br />
  [Tool: Commitlint](https://commitlint.js.org/)<br />
  #concern--version-control #concern--documentation
- [ ] Explain **why** not what, audience is seeing it through git blame.<br />
  #concern--documentation
- [ ] Brief, concise commit messages. Respect people's time.<br />
  #concern--documentation



[^version-control]: Version control system (VCS), such as Git or Mercurial.




### Concerns - Logging, monitoring and observability [^monitoring-logging-and-observability]

- [ ] Remove logging, observability or other diagnostics if not intended to go into prod.<br />
  #concern--logging-monitoring-and-observability #nfr--observability
- [ ] Add observability or other diagnostics if intended to go into prod.<br />
  #concern--logging-monitoring-and-observability #nfr--observability

[^monitoring-logging-and-observability]: Logging (for debugging purposes) and monitoring and observability (for understanding system performance and behavior).




### Concerns - Pull request [^pull-request]

- [ ] Keep small and focussed, split where needed to keep each PR small.<br />
  Prioritise short iteration cycles.<br />
  #concern--pull-request #nfr--readability 
- [ ] Include links to task, designs, requirements, specifications, etc.<br />
  #concern--pull-request #concern--documentation
- [ ] Keep description small and structured. Hide details in collapsible sections or link to additional resources.<br />
  [Book: Software Engineering at Google • Titus WINTERS, Tom MANSHRECK, Hyrum WRIGHT, Ch 9 - Code Review, pp. 178]<br />
  #concern--pull-request #concern--documentation
- [ ] Ensure that all automated checks pass before sending the PR for review.<br />
  #concern--pull-request
- [ ] Make sure everything is provided for devs to checkout and test from scratch.<br />
  Example: installation instructions, credentials, test accounts.<br />
  #concern--pull-request #nfr--testability
- [ ] Create preview / staging site.<br />
  And include instructions to access if needed.<br />
  #concern--pull-request
- [ ] Apply changes in separate commits to allow history to be viewed and discussed.<br />
  #concern--pull-request
- [ ] Remove temporary settings before setting PR to Open.<br />
  Example: temporary test-only configurations or feature flag settings.<br />
  #concern--pull-request
- [ ] Review with stakeholders (design, analysts, etc) before merge, if needed.<br />
  #concern--pull-request #nfr--correctness
- [ ] Split functional and non-functional changes into separate PRs.<br />
  #concern--pull-request
- [ ] Split features and bug fixes or refactoring into separate PRS.<br />
  #concern--pull-request
- [ ] In description and inline comments, address non-functional requirements (NFRs).<br />
  Accessibility, performance, security, etc.<br />
  #concern--pull-request
- [ ] Seriously consider any AI bot suggestion.<br />
  #concern--pull-request #general--ai
- [ ] Regression-test everything after actioning PR feedback.<br />
  In case the actioning of the feedback itself contained a bug.<br />
  #concern--pull-request

[^pull-request]: Pull request items relate to pull request process and structure.




### Concerns - Documentation [^documentation]

- [ ] Add `README.md`.<br />
  Detail what this is and link to other docs for specific details.<br />
  [Docs: About the repository README file - GitHub](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes)<br />
  #concern--documentation
- [ ] Add how to install instructions.<br />
  #concern--documentation
- [ ] Add how to contribute instructions in `CONTRIBUTING.md`.<br />
  #concern--documentation
- [ ] Ensure it is as easy as possible for new starters to get started.<br />
  Try installing and running the application yourself, from scratch, as if a new joiner. Go through some of the major flows.<br />
  #concern--documentation
- [ ] Ensure new starters can readily find information needed.<br />
  Example: ensure documentation is available and searchable.<br />
  #concern--documentation
- [ ] In lists of steps, avoid one step getting too big.<br />
  Split out to separate steps as needed.<br />
  #concern--documentation
- [ ] In lists of steps, avoid too many small steps that are closely related.<br />
  Merge into a bigger step as needed.<br />
  #concern--documentation
- [ ] Ensure steps are clearly indicated as "required", if necessary.<br />
  #concern--documentation
- [ ] Ensure code samples match up with instructions.<br />
  #concern--documentation
- [ ] Check if design, code, documentation, etc. need to be updated so they are all consistent.<br />
  #concern--documentation #nfr--correctness

[^documentation]: Documentation refers to written documentation, code comments or self-documenting code.




### Concerns - Comments [^comments]

- [ ] Use comments where they add value.<br />
  [Article: Comments - Do you follow the code commenting standards? | SSW.Rules](https://www.ssw.com.au/rules/code-commenting)<br />
  #concern--documentation
- [ ] Describe the why not the what, let the code describe the what.<br />
  #concern--documentation
- [ ] Describe “why not” to communicate why one solution was chosen over another seemingly better solution.<br />
  Example: "We went with z. Why not y? Because z.<br />
  #concern--documentation
- [ ] Instead of `TODO`, track maintenance work more visibly in a task-tracking system.<br />
  [Article: Do you document "TODO" tasks? | SSW.Rules](https://www.ssw.com.au/rules/todo-tasks)<br />
  #concern--documentation
- [ ] Describe function parameters, object fields, types, interfaces, constants, etc. with JSDoc comments, if not apparent.<br />
  #concern--documentation
- [ ] Describe advanced features or obscure code the reader is unlikely to understand.<br />
  Example: use of `setTimeout` or browser hacks or device-specific APIs.<br />
  [Article: Do you leave explanatory notes for non-standard code? | SSW.Rules](https://www.ssw.com.au/rules/leave-explanatory-notes-for-non-standard-code)<br />
  [Article: Do you know what to do with a work around? | SSW.Rules](https://www.ssw.com.au/rules/what-to-do-with-a-work-around)<br />
  #concern--documentation
- [ ] Add warnings where needed.<br />
  #concern--documentation
- [ ] Use shorter, more precise sentences.<br />
  #concern--documentation
- [ ] Communicate intent.<br />
  #concern--documentation
- [ ] Use information-dense words.<br />
  Example: refer to the name of a software pattern rather than explaining the whole thing.<br />
  #concern--documentation
- [ ] Don't include anything likely to create tedious maintenance overhead or go out-of-date.<br />
  Such as specific amounts or date-specific information.<br />
  [Article: Do you know the best way to track comments when your code is updated? | SSW.Rules](https://www.ssw.com.au/rules/comment-when-your-code-is-updated)<br />
  #concern--documentation
- [ ] Reference code derived from an external source.<br />
  Example: Copied and pasted from Google, StackOverflow or AI.<br />
  It is important to provide attribution to authors. It can also be helpful for future developers to have the source, when reading or diagnosing issues.<br />
  [Article: Do you reference websites when you implement something you found on Google? | SSW.Rules](https://www.ssw.com.au/rules/reference-websites-when-you-implement-something-you-found-on-google)<br />
  #concern--documentation


[^comments]: Comments refer to code comments, which are annotations in the source code that explain the code.




### Concerns - Bug Reports [^bug-reports]

- [ ] Expected vs actual and reproduction steps and test data.<br />
  #concern--documentation
- [ ] Dig into the code to find out why and report what you found.<br />
  #concern--documentation

[^bug-reports]: Bug reports refer to documented issues or defects in the software.




## Non-Functional Requirements (NFRs)




### NFR - Achievability [^achievability]

- [ ] Can the task be achieved within given parameters in a timely manner?<br />
  If not, consider splitting up, re-prioritising, re-defining, etc.<br />
  #nfr--achievability

[^achievability]: Achievability refers to the likelihood of the software achieving the function and non-functional requirements in the agreed timeframe.




### NFR - Simplicity [^simplicity]

- [ ] Can the task or code change be avoided altogether?<br />
  #nfr--simplicity
- [ ] Can we use a simpler platform that abstracts away building, deploying, and hosting?<br />
  [Website: Netlify](https://www.netlify.com)<br />
  [Website: Amplify](https://aws.amazon.com/amplify/)<br />
  [Website: Heroku](https://www.heroku.com)<br />
  #nfr--simplicity

[^simplicity]: Simplicity refers to how simple solutions are to understand and implement.




### NFR - Availability [^availability]

- [ ] Can certain systems go down during peak periods? Can we cater for those scenarios to minimise disruption to users?<br />
  #nfr--availability

[^availability]: Availability (or uptime) refers to the percentage of time an application is operational, despite failures. High availability is often defined as 99.99% ("four+ nines").




### NFR - Correctness [^correctness]

- [ ] Ensure all and only the original requirements satisfied.<br />
  #nfr--correctness #general--requirements

[^correctness]: Correctness refers to the ability of software to perform the exact tasks required.




### NFR - Readability [^readability]

- [ ] Order code blocks, elements, etc. sensibly.<br />
  Example: order CSS properties with layout first, then color, etc.<br />
  #nfr--readability
- [ ] Ensure either the code is self-documenting or there are sufficient comments to aid understanding.<br />
  #nfr--readability
- [ ] Simplify and flatten deeply nested structures for readability.<br />
  Example: nested `if`, `switch` statements.<br />
  #nfr--readability
- [ ] Replace multiple `if` statements with one `switch` statement or pattern matching if it improves readability.<br />
  #nfr--readability
- [ ] Avoid double-negatives in conditionals.<br />
  [Article: Do you avoid Double-Negative Conditionals in if-statements? | SSW.Rules](https://www.ssw.com.au/rules/avoid-double-negative-conditionals-in-if-statements)<br />
  #nfr--readability
- [ ] Use more condensed syntax where it improves readability.<br />
  Example: inline conditionals (`x ? y : z`) for very simple logic.<br />
  #nfr--readability
- [ ] Use more expanded syntax or multiple lines where it improves readability.<br />
  Example: spread message box code into multiple lines, for title, description, etc.<br />
  [Article: Do you know how to format your MessageBox code? | SSW.Rules](https://www.ssw.com.au/rules/how-to-format-your-messagebox-code)<br />
  #nfr--readability
- [ ] Avoid excessive use of condensed syntax where it impacts readability.<br />
  Example: avoid complex nested ternaries, expand them into full `if` statements.<br />
  #nfr--readability
- [ ] Split large function to smaller functions.<br />
  Function calls can be scanned more quickly for a high level overview.<br />
  #nfr--readability
- [ ] Keep functions short.<br />
  [Article: Do you refactor your code and keep methods short? | SSW.Rules](https://www.ssw.com.au/rules/refactor-your-code-and-keep-methods-short)<br />
  #nfr--readability
- [ ] Measure and minimise cyclomatic complexity.<br />
  [Article: Do you know when functions are too complicated? | SSW.Rules](https://www.ssw.com.au/rules/know-when-functions-are-too-complicated)<br />
  #nfr--readability
- [ ] Group related statements with whitespace between.<br />
  #nfr--readability
- [ ] Remove unnecessary or unused code where possible.<br />
  Example: statements never executed, unused function parameters, branches never evaluated.<br />
  #nfr--readability
- [ ] Check for accidental mis-formatting.<br />
  Example: unnecessary or improper import order changes accidentally committed.<br />
  These might be accidentally committed due to problems with your formatter tool.<br />
  #nfr--readability
- [ ] Pass single param object to a function rather than many parameters.<br />
  Naming the parameters can make the calls to the function easier to read.<br />
  [Article: Do you know when to use named parameters? | SSW.Rules](https://www.ssw.com.au/rules/when-to-use-named-parameters)<br />
  #nfr--readability
- [ ] Instead of making all object fields optional, just make whole object optional.<br />
  #nfr--readability
- [ ] Extract filtering, mapping and other logic to nicely named pure functions.<br />
  #nfr--readability
- [ ] Use idiomatic coding style.<br />
  As appropriate to the language and frameworks in the current code base.<br />
  #nfr--readability
- [ ] Use coding style consistent with the surrounding code-base.<br />
  To make it easier for the current team to work with.<br />
  Alternately, clearly communicate and agree on targetted changes to coding style.<br />
  #nfr--readability
- [ ] Leave it cleaner than you found it.<br />
  Example: remove code that is no longer needed.<br />
  [Article: Do you follow the boy scout rule? | SSW.Rules](https://www.ssw.com.au/rules/follow-boy-scout-rule)<br />
  #nfr--readability #nfr--maintainability

[^readability]: Readability refers to how easy it is for a human to understand the intent (what), rationale (why), and logic (how) behind a piece of code.




### NFR - Maintainability [^maintainability]

- [ ] Use expanded syntax for function declaration where it helps.<br />
  That is: `function foo() { ... }` in Typescript.<br />
  Example: this makes it easier to insert logging or other statements if you know they will be needed.<br />
  #nfr--maintainability

[^maintainability]: Maintainability refers to the ease with which the software can be modified, updated, or repaired over time.




### NFR - Testability [^testability]

- [ ] Allow space for log statements to be easily inserted.<br />
  #nfr--testability
- [ ] Use interface-based designs, to allow functions, classes, etc. to be isolated for unit testing.<br />
  [Book: The Art of Unit Testing, 11.2.2, pp. 222 • Roy OSHEROV](https://www.artofunittesting.com)<br />
  #nfr--testability

[^testability]: Testability refers to the degree to which software can be effectively tested. 




### NFR - Scalability [^scalability]

- [ ] Use well tested, documented and supported third-party frameworks, which can grow with the application.<br />
  #nfr--scalability

[^scalability]: Scalability refers to the ability of software to handle increasing workloads while maintaining integrity.




### NFR - Observability [^observability]

- [ ] Don't suppress errors when it would be more proper to let them surface.<br />
  Example: so we can uncover and resolve logic errors, say through monitoring or observability.<br />
  #nfr--observability
- [ ] Ensure observability logs have high cardinality, high-dimensionality, and explorability.
  Example: so we can uncover and resolve logic errors, say through monitoring or observability.<br />
  #nfr--observability

[^observability]: Observability measures of how well internal states of a system can be inferred from its external outputs. 




### NFR - Portability [^portability]

- [ ] Use portable tooling that is supported on multiple operating systems and platforms.<br />
  Example: NPM works on Windows, Linux and Mac, so it is more portable than, say, Nuget.<br />
  #nfr--portability
- [ ] Avoid platform-specific calls or dependencies.<br />
  Example: NPM scripts should not rely on Windows or Linux specific features. Use an abstraction library if needed, such as NodeMon for file watching.<br />
  #nfr--portability #general--build

[^portability]: Portability refers to the ease of transferring software to various hardware and software environments.




### NFR - Adaptability [^adaptability]

- [ ] Use progressive enhancement when basic features need to work in non-standard browser environments.<br />
  #nfr--adaptability

[^adaptability]: Adaptability refers to the ability of software to adjust effectively to changing requirements and environments.




### NFR - Compatibility [^compatibility]

- [ ] Test on all major browsers <br />
  Chrome, Edge, Firefox, Safari, Opera, etc.<br />
  #nfr--compatibility
- [ ] Ensure browser features used are commonly supported.<br />
  [Tool: CanIUse](http://caniuse.com)<br />
  #nfr--compatibility

#### NFR - Compatibility - Screen sizes

- [ ] Use shortcuts where component library makes them available.<br />
  Example: `tablet-and-larger` rather than `tablet, desktop, wide`.<br />
  #nfr--compatibility
- [ ] Use a layout that works on all devices without device-specific overrides.<br />
  #nfr--compatibility
- [ ] Take advantage of container queries.<br />
  #nfr--compatibility

#### NFR - Compatibility - Offline

- [ ] Use service workers to enable offline access.<br />
  [Article: Using Service Workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers)<br />
  #nfr--compatibility

#### NFR - Compatibility - Mobile devices

- [ ] Use web application manifest to enable the site to be saved and run as an app-like experience on a phone.<br />
  [Article: Web application manifest](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Manifest)<br />
  #nfr--compatibility

[^compatibility]: Compatibility refers to the ability of an application to run smoothly on a variety of browsers, operating systems and devices.




### NFR - Accessibility [^accessibility]

- [ ] Use semantic HTML elements.<br />
  #nfr--accessibility #language--html
- [ ] Use lightweight plain HTML elements where possible, Example: `<div>` instead of `<Box>`.<br />
  #nfr--accessibility #language--html
- [ ] No new errors in unit tests such as Axe, including whole page scan.<br />
  #nfr--accessibility #language--javascript #concern--tests
- [ ] For loading indicators, apply `role=status` and include "Loading" text in nested, screen-reader-only element.<br />
  [Docs: Bootstrap - Spinners](https://getbootstrap.com/docs/4.5/components/spinners/) <br />
  #language--html #nfr--accessibility
- [ ] Use `aria-label` or `aria-labelled-by` (with matching id) to label elements if appropriate.<br />
  #language--html #nfr--accessibility
- [ ] Label should describe what component is for, not just repeat the value.<br />
  #nfr--accessibility
- [ ] Select box should read out selected value over screen-reader when focussed.<br />
  #nfr--accessibility
- [ ] Test IDs probably mean elements aren't specified well enough by semantically, by tag name, aria tags, etc.<br />
  [Blog: Test IDs are an a11y smell](https://tkdodo.eu/blog/test-ids-are-an-a11y-smell)<br />
  #nfr--accessibility #concern--tests

#### NFR - Accessibility - Perceivable

- [ ] Screen can be navigated with screen-reader.<br />
  #nfr--accessibility
- [ ] Heading announced by screen-reader.<br />
  #nfr--accessibility
- [ ] Buttons and nav links are announced as buttons by screen-reader.<br />
  #nfr--accessibility
- [ ] Items navigated in the correct order by screen-reader.<br />
  #nfr--accessibility

#### NFR - Accessibility - Operable

- [ ] All important elements and controls can be accessed with keyboard only.<br />
  #nfr--accessibility
- [ ] Avoid nested clickable regions. Just choose one element to be clickable.<br />
  #nfr--accessibility

#### NFR - Accessibility - Understandable

- [ ] Use simple, plain language.<br />
  #nfr--accessibility
- [ ] Use definition lists to define terms that are not commonly understood.<br />
  #nfr--accessibility

#### NFR - Accessibility - Robust

- [ ] Elements render correctly with all common screen-sizes.<br />
  Ideally: wide desktop, desktop, tablet, mobile. And: vertical and horizontal.<br />
  #nfr--accessibility
- [ ] Elements render correctly in dark or light mode.<br />
  #nfr--accessibility
- [ ] Text scales correctly with zoom.<br />
  #nfr--accessibility

#### NFR - Accessibility - Content

- [ ] Use plain language and avoid figures of speech, idioms, and complicated metaphors.<br />
  [Article: WCAG - Reading Level](https://www.w3.org/WAI/WCAG22/Understanding/reading-level.html)<br />
  #nfr--accessibility #accessibility--content
- [ ] Make sure that <code>button</code>, <code>a</code>, and <code>label</code> element content is unique and descriptive.<br />
  [Article: WCAG - Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html)<br />
  #nfr--accessibility #accessibility--content
- [ ] Use left-aligned text for left-to-right (<abbr>LTR</abbr>) languages, and right-aligned text for right-to-left (<abbr>RTL</abbr>) languages.<br />
  [Article: WCAG - Visual Presentation](https://www.w3.org/WAI/WCAG22/Understanding/visual-presentation.html)<br />
  #nfr--accessibility #accessibility--content

#### NFR - Accessibility - Global code

- [ ] Validate your HTML.<br />
  [Article: WCAG - Parsing](https://www.w3.org/WAI/WCAG22/Understanding/parsing.html)<br />
  #nfr--accessibility #accessibility--global-code
- [ ] Use a <code>lang</code> attribute on the <code>html</code> element.<br />
  [Article: WCAG - Language of Page](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page.html)<br />
  #nfr--accessibility #accessibility--global-code
- [ ] Provide a unique <code>title</code> for each page or view.<br />
  [Article: WCAG - Page Titled](https://www.w3.org/WAI/WCAG22/Understanding/page-titled.html)<br />
  #nfr--accessibility #accessibility--global-code
- [ ] Ensure that viewport zoom is not disabled.<br />
  [Article: WCAG - Resize text](https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html)<br />
  #nfr--accessibility #accessibility--global-code
- [ ] Use landmark elements to indicate important content regions.<br />
  [Article: WCAG - Name, Role, Value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)<br />
  #nfr--accessibility #accessibility--global-code
- [ ] Ensure a linear content flow.<br />
  [Article: WCAG - Focus Order](https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html)<br />
  #nfr--accessibility #accessibility--global-code
- [ ] Avoid using the <code>autofocus</code> attribute.<br />
  [Article: WCAG - Focus Order](https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html)<br />
  #nfr--accessibility #accessibility--global-code
- [ ] Allow extending session timeouts.<br />
  [Article: WCAG - Timing Adjustable](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable.html)<br />
  #nfr--accessibility #accessibility--global-code
- [ ] Remove <code>title</code> attribute tooltips.<br />
  [Article: WCAG - Name, Role, Value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)<br />
  #nfr--accessibility #accessibility--global-code

#### NFR - Accessibility - Keyboard

- [ ] Make sure there is a visible focus style for interactive elements that are navigated to via keyboard input.<br />
  [Article: WCAG - Focus Visible](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html)<br />
  #nfr--accessibility #accessibility--keyboard
- [ ] Check to see that keyboard focus order matches the visual layout.<br />
  [Article: WCAG - Meaningful Sequence](https://www.w3.org/WAI/WCAG22/Understanding/meaningful-sequence.html)<br />
  #nfr--accessibility #accessibility--keyboard
- [ ] Remove invisible focusable elements.<br />
  [Article: WCAG - Focus Order](https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html)<br />
  #nfr--accessibility #accessibility--keyboard

#### NFR - Accessibility - Images

- [ ] Make sure that all <code>img</code> elements have an <code>alt</code> attribute.<br />
  [Article: WCAG - Non-text Content](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html)<br />
  #nfr--accessibility #accessibility--images
- [ ] Make sure that decorative images use null <code>alt</code> (empty) attribute values.<br />
  [Article: WCAG - Non-text Content](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html)<br />
  #nfr--accessibility #accessibility--images
- [ ] Provide a text alternative for complex images such as charts, graphs, and maps.<br />
  [Article: WCAG - Non-text Content](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html)<br />
  #nfr--accessibility #accessibility--images
- [ ] For images containing text, make sure the alt description includes the image's text.<br />
  [Article: WCAG - Non-text Content](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html)<br />
  #nfr--accessibility #accessibility--images

#### NFR - Accessibility - Headings

- [ ] Use heading elements to introduce content.<br />
  [Article: WCAG - Headings or Labels](https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels.html)<br />
  #nfr--accessibility #accessibility--headings
- [ ] Use only one <code>h1</code> element per page or view.<br />
  [Article: WCAG - Headings or Labels](https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels.html)<br />
  #nfr--accessibility #accessibility--headings
- [ ] Heading elements should be written in a logical sequence.<br />
  [Article: WCAG - Headings or Labels](https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels.html)<br />
  #nfr--accessibility #accessibility--headings
- [ ] Don't skip heading levels.<br />
  [Article: WCAG - Headings or Labels](https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels.html)<br />
  #nfr--accessibility #accessibility--headings

#### NFR - Accessibility - Lists

- [ ] Use list elements (<code>ol</code>, <code>ul</code>, and <code>dl</code> elements) for list content.<br />
  [Article: WCAG - Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html)<br />
  #nfr--accessibility #accessibility--lists

#### NFR - Accessibility - Controls

- [ ] Use the <code>a</code> element for links.<br />
  [Article: WCAG - Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html)<br />
  #nfr--accessibility #accessibility--controls
- [ ] Ensure that links are recognizable as links.<br />
  [Article: WCAG - Use of Color](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html)<br />
  #nfr--accessibility #accessibility--controls
- [ ] Ensure that controls have <code>:focus</code> states.<br />
  [Article: WCAG - Focus Visible](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html)<br />
  #nfr--accessibility #accessibility--controls
- [ ] Use the <code>button</code> element for buttons.<br />
  [Article: WCAG - Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html)<br />
  #nfr--accessibility #accessibility--controls
- [ ] Provide a skip link and make sure that it is visible when focused.<br />
  [Article: WCAG - Bypass Blocks](https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks.html)<br />
  #nfr--accessibility #accessibility--controls
- [ ] Identify links that open in a new tab or window.<br />
  [Article: WCAG - Giving users advanced warning when opening a new window](https://www.w3.org/WAI/WCAG22/Techniques/general/G201)<br />
  #nfr--accessibility #accessibility--controls

#### NFR - Accessibility - Tables

- [ ] Use the <code>table</code> element to describe tabular data.<br />
  [Article: WCAG - Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html)<br />
  #nfr--accessibility #accessibility--tables
- [ ] Use the <code>th</code> element for table headers (with appropriate <code>scope</code> attributes).<br />
  [Article: WCAG - Parsing](https://www.w3.org/WAI/WCAG22/Understanding/parsing.html)<br />
  #nfr--accessibility #accessibility--tables
- [ ] Use the <code>caption</code> element to provide a title for the table.<br />
  [Article: WCAG - Headings or Labels](https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels.html)<br />
  #nfr--accessibility #accessibility--tables

#### NFR - Accessibility - Forms

- [ ] All inputs in a form are associated with a corresponding <code>label</code> element.<br />
  [Article: WCAG - On Input](https://www.w3.org/WAI/WCAG22/Understanding/on-input.html)<br />
  #nfr--accessibility #accessibility--forms
- [ ] Use <code>fieldset</code> and <code>legend</code> elements where appropriate.<br />
  [Article: WCAG - Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html)<br />
  #nfr--accessibility #accessibility--forms
- [ ] Inputs use <code>autocomplete</code> where appropriate.<br />
  [Article: WCAG - Identify Input Purpose](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html)<br />
  #nfr--accessibility #accessibility--forms
- [ ] Make sure that form input errors are displayed in list above the form after submission.<br />
  [Article: WCAG - Error Identification](https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html)<br />
  #nfr--accessibility #accessibility--forms
- [ ] Associate input error messaging with the input it corresponds to.<br />
  [Article: WCAG - Error Identification](https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html)<br />
  #nfr--accessibility #accessibility--forms
- [ ] Make sure that error, warning, and success states are not visually communicated by just color.<br />
  [Article: WCAG - Use of Color](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html)<br />
  #nfr--accessibility #accessibility--forms

#### NFR - Accessibility - Media

- [ ] Make sure that media does not autoplay.<br />
  [Article: WCAG - Audio Control](https://www.w3.org/WAI/WCAG22/Understanding/audio-control.html)<br />
  #nfr--accessibility #accessibility--media
- [ ] Ensure that media controls use appropriate markup.<br />
  [Article: WCAG - Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html)<br />
  #nfr--accessibility #accessibility--media
- [ ] Check to see that all media can be paused.<br />
  [Article: WCAG - Keyboard](https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html)<br />
  #nfr--accessibility #accessibility--media

#### NFR - Accessibility - Video

- [ ] Confirm the presence of captions.<br />
  [Article: WCAG - Captions](https://www.w3.org/WAI/WCAG22/Understanding/captions-prerecorded.html)<br />
  #nfr--accessibility #accessibility--video
- [ ] Remove seizure triggers.<br />
  [Article: WCAG - Three Flashes or Below Threshold](https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html)<br />
  #nfr--accessibility #accessibility--video

#### NFR - Accessibility - Audio

- [ ] Confirm that transcripts are available.<br />
  [Article: WCAG - Non-text Content](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html)<br />
  #nfr--accessibility #accessibility--audio

#### NFR - Accessibility - Appearance

- [ ] Check your content in specialized browsing modes.<br />
  [Article: WCAG - Use of Color](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html)<br />
  #nfr--accessibility #accessibility--appearance
- [ ] Increase text size to 200%.<br />
  [Article: WCAG - Resize text](https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html)<br />
  #nfr--accessibility #accessibility--appearance
- [ ] Double-check that good proximity between content is maintained.<br />
  [Article: WCAG - Sensory Characteristics](https://www.w3.org/WAI/WCAG22/Understanding/sensory-characteristics.html)<br />
  #nfr--accessibility #accessibility--appearance
- [ ] Make sure color isn't the only way information is conveyed.<br />
  [Article: WCAG - Use of Color](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html)<br />
  #nfr--accessibility #accessibility--appearance
- [ ] Make sure instructions are not visual or audio-only.<br />
  [Article: WCAG - Sensory Characteristics](https://www.w3.org/WAI/WCAG22/Understanding/sensory-characteristics.html)<br />
  #nfr--accessibility #accessibility--appearance
- [ ] Use a simple, straightforward, and consistent layout.<br />
  [Article: WCAG - Reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html)<br />
  #nfr--accessibility #accessibility--appearance

#### NFR - Accessibility - Animation

- [ ] Ensure animations are subtle and do not flash too much.<br />
  [Article: WCAG - Three Flashes or Below Threshold](https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html)<br />
  #nfr--accessibility #accessibility--animation
- [ ] Provide a mechanism to pause background video.<br />
  [Article: WCAG - Pause, Stop, Hide](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html)<br />
  #nfr--accessibility #accessibility--animation
- [ ] Make sure all animation obeys the <code>prefers-reduced-motion</code> media query.<br />
  [Article: WCAG - Animation from Interactions](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html)<br />
  #nfr--accessibility #accessibility--animation

#### NFR - Accessibility - Color contrast

- [ ] Check the contrast for all normal-sized text.<br />
  [Article: WCAG - Contrast](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)<br />
  #nfr--accessibility #accessibility--color-contrast
- [ ] Check the contrast for all large-sized text.<br />
  [Article: WCAG - Contrast](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)<br />
  #nfr--accessibility #accessibility--color-contrast
- [ ] Check the contrast for all icons.<br />
  [Article: WCAG - Non-text Contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html)<br />
  #nfr--accessibility #accessibility--color-contrast
- [ ] Check the contrast of borders for input elements (text input, radio buttons, checkboxes, etc.).<br />
  [Article: WCAG - Non-text Contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html)<br />
  #nfr--accessibility #accessibility--color-contrast
- [ ] Check text that overlaps images or video.<br />
  [Article: WCAG - Contrast](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)<br />
  #nfr--accessibility #accessibility--color-contrast
- [ ] Check custom <code>::selection</code> colors.<br />
  [Article: WCAG - Contrast](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)<br />
  #nfr--accessibility #accessibility--color-contrast

#### NFR - Accessibility - Mobile and touch

- [ ] Check that the site can be rotated to any orientation.<br />
  [Article: WCAG - Orientation](https://www.w3.org/WAI/WCAG22/Understanding/orientation.html)<br />
  #nfr--accessibility #accessibility--mobile-and-touch
- [ ] Remove horizontal scrolling.<br />
  [Article: WCAG - Reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html)<br />
  #nfr--accessibility #accessibility--mobile-and-touch
- [ ] Ensure that button and link icons can be activated with ease.<br />
  [Article: WCAG - Target Size](https://www.w3.org/WAI/WCAG22/Understanding/target-size-enhanced.html)<br />
  #nfr--accessibility #accessibility--mobile-and-touch
- [ ] Ensure sufficient space between interactive items in order to provide a scroll area.<br />
  [Article: WCAG - Bypass Blocks](https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks.html)<br />
  #nfr--accessibility #accessibility--mobile-and-touch

[^accessibility]: Accessibility covers accessibility features and techniques to ensure usability by everyone, including people with disabilities.




### NFR - Performance [^performance]

- [ ] Use early-return, ordered from cheapest to most expensive operations, when a sequence of checks need to be done, to minimise unnecessary processing.<br />
  #nfr--performance
- [ ] Optimise algorithms, or replace them with calls to libraries / third-party implementations that have been optimised.<br />
  [Book: Algorithms Illuminated • Tim ROUGHGARDEN](https://algorithmsilluminated.org/)
  #nfr--performance
- [ ] Use indexed lookups instead of loops for random-access.<br />
  #nfr--performance
- [ ] Use caching to prevent redundant, expensive computations.<br />
  #nfr--performance
- [ ] Minimise jank.<br />
  [Article: Jank - Glossary | MDN](https://developer.mozilla.org/en-US/docs/Glossary/Jank)<br />
  #nfr--performance
- [ ] Minimise largest contentful paint (LCP).<br />
  [Article: Largest Contentful Paint - web.dev](https://web.dev/articles/lcp)<br />
  #nfr--performance
- [ ] Minimise first input delay.<br />
  [Article: First Input Delay (FID) - Glossary | MDN](https://developer.mozilla.org/en-US/docs/Glossary/First_input_delay)<br />
  #nfr--performance
- [ ] Avoid or minimise Flash of Unstyled Content (FOUC).<br />
  [Wiki: Flash of unstyled content](https://en.wikipedia.org/wiki/Flash_of_unstyled_content)<br />
  #nfr--performance
- [ ] Careful with triggering re-renters of large component trees in React.<br />
  [Book: Advanced React, Ch 2](https://www.advanced-react.com)<br />
  #nfr--performance
- [ ] Check for unnecessary render cycles (React) using Chrome Performance Tools or similar.<br />
  #nfr--performance
- [ ] Identity expensive algorithms and optimise them.<br />
  #nfr--performance
- [ ] Use `reduce` efficiently: don't return result but set accumulator and return it (pass by reference).<br />
  #nfr--performance
- [ ] Reduce function calls to minimise function-call overhead.<br />
  #nfr--performance
- [ ] Combine into one function operations that integrate many pieces of date into one structure, to avoid excessive calling/returning of functions.<br />
  #nfr--performance
- [ ] Avoid "waterfall" requests - chains of dependent requests that, as a whole, take a long time to finish.<br />
  [Book: Advanced React, Ch 14](https://www.advanced-react.com)<br />
  #nfr--performance
- [ ] Make imports specific, to keep bundle size small.<br />
  [Blog: Please Stop Using Barrel Files](https://tkdodo.eu/blog/please-stop-using-barrel-files)<br />
  #nfr--performance
- [ ] Keep components small and focussed, use composition as needed.<br />
  #nfr--performance
- [ ] Minimise number of DOM elements, attributes and styles, to minimise browser rendering effort.<br />
  #nfr--performance
- [ ] Minimise delays without visual feedback - always be instantly responsive to user input.<br />
  Perceived performance.<br />
  [Article: Perceived performance - MDN](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Performance/Perceived_performance).<br />
  #nfr--performance
- [ ] Configure build system to use minification to compress scripts and stylesheets.<br />
  #nfr--performance
- [ ] Use edge hosting (such as CDNs) to speed up user access.<br />
  [Docs: AWS CloudFront](https://aws.amazon.com/cloudfront/)<br />
  #nfr--performance
- [ ] Use parallelisation to reduce total task completion time.<br />
  Example: use `Promise.all` to run multiple independent requests in parallel.<br />
  #nfr--performance
- [ ] Increase resources depending on workloads.<br />
  Example: compute-heavy workloads might require faster processors or data-heavy workloads might require more memory or storage.<br />
  #nfr--performance
- [ ] Prefetch and cache data on startup that we know will be needed during the user's session.<br />
  #nfr--performance
- [ ] Use async (micro-task) and/or timers (`setTimeout`, event queue) to defer processing, to improve responsiveness (perceived performance) to the user.<br />
  [Article: Window: setTimeout() method](https://developer.mozilla.org/en-US/docs/Web/API/Window/setTimeout)<br />
  [Blog: Why is setTimeout(fn, 0) sometimes useful? • criodo](https://www.crio.do/blog/why-settimeout-is-useful-2025-javascript-criodo/)<br />
  #nfr--performance
- [ ] Use web worker to run background tasks separately from the main user interface thread.<br />
  [Article: An overview of web workers](https://web.dev/learn/performance/web-worker-overview)<br />
  #nfr--performance
- [ ] Check for memory leaks or CPU overuse.<br />
  Use Chrome Performance Tools, use a debugger, local system monitor (MacOS Activities, Windows Task Manager or Linux `atop`) or monitor metrics in monitoring tool.<br />
  [Article: Chrome Dev Tools - Get performance insights](https://developer.chrome.com/docs/devtools#performance)<br />
  [Article: DynaTrace Live Debugger](https://docs.dynatrace.com/docs/observe/application-observability/live-debugger)<br />
  #nfr--performance

[^performance]: Performance refers to operating speed of the application, either real or perceived.




### NFR - Robustness  [^robustness]

- [ ] Fall back to sensible defaults for unexpected values.<br />
  Example: if comparing `quantityPacked` to `quantityOrdered` in an online order, if `quantityPacked > quantityOrdered` then fall back to the same logic as `quantityPacked === quantityOrdered`.<br />
  #nfr--robustness
- [ ] Click a lot of different parts of the UI in very quick succession and ensure nothing breaks.<br />
  #nfr--robustness

[^robustness]: Robustness is the ability of software systems to react appropriately to abnormal conditions.




### NFR - Reliability [^reliability]

- [ ] If the change alters the inputs being received and passed to the Backend, ensure those won't break.<br />
  #nfr--reliability
- [ ] Avoid throwing exceptions, as that can cause the whole app to break.<br />
  Instead, use conditionals, etc with logic to deal with expected edge-cases.<br />
  #nfr--reliability
- [ ] Avoid handling exceptions without throwing up to the highest layer possible.<br />
  Ideally log to a structured logging system such as Sentry. Otherwise issues can be masked.<br />
  #nfr--reliability
- [ ] Handle incorrect (but expected) values that might be returned by the Backend.<br />
  #nfr--reliability
- [ ] Check parameters are present and correct if there is good reason to expect that wrong values might be received sometimes.<br />
  #nfr--reliability
- [ ] Null-check and/or optional-chain where a field needs to be accessed which might be nil.<br />
  #nfr--reliability
- [ ] Handle non-numeric values when attempting a numeric operation, if expected.<br />
  #nfr--reliability
- [ ] Compare different devices - behaviour or logic should be consistent.<br />
  #nfr--reliability
- [ ] Refresh and navigate back/forward - ensure it does not result in an error.<br />
  #nfr--reliability
- [ ] Reset state after accessing the same context again.<br />
  Example: a button that goes into loading state on click should likely reset after we close then re-open the same page/screen.<br />
  #nfr--reliability
- [ ] Format a value consistently wherever it appears.<br />
  Example: format a date the same way in a date picker input control as display.<br />
  #nfr--reliability
- [ ] Careful with animations and timeouts.<br />
  Make sure to test, by quickly clicking/switching around, ensure it doesn't mess up.<br />
  #nfr--reliability
- [ ] Before manipulating a string, check it first.<br />
  If possible to make sure it's in the expected input format.<br />
  #nfr--reliability
- [ ] Check parameters and early return / throw if unexpected.<br />
  Use typed `assert` if possible, for conciseness.<br />
  #nfr--reliability #nfr--correctness #language--typescript
- [ ] Avoid code that dynamically accesses other code without the developer being aware, and might break if that code changes.<br />
  #nfr--reliability #nfr--maintainability
- [ ] Perform impact analysis if adding an entry in some structure.<br />
  Example: dictionary, enum, etc. Be careful that there isn't some code that dynamically operates on that structure, which is impacted.<br />
  #nfr--reliability #nfr--correctness
- [ ] Capture and log unexpected conditions of `if` or `switch` statements.<br />
  [Book: Pro Typescript by Steve Fenton, Ch 1, pp. 23](https://stevefenton.co.uk/publications/pro-typescript/)<br />
  #nfr--reliability #nfr--correctness
- [ ] Consider minimising backward compatibility when it reduces overall code quality.<br />
  [Article: Do you use good code over backward compatibility? | SSW.Rules](https://www.ssw.com.au/rules/use-good-code-over-backward-compatibility)<br />
  #nfr--reliability #nfr--correctness

[^reliability]: Reliability refers to the probability the application will operate with minimal (or acceptable) level of failures.




### NFR - Economy [^economy]

- [ ] Minimise operating cost by offloading processing, storage, etc. to the client side.<br />
  #nfr--economy
- [ ] Compress assets before serving, to minimise hosting costs.<br />
  Apply GZip compression, asset minification and optimised image file formats.<br />
  [Docs: Serve compressed files](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/ServingCompressedFiles.html)<br />
  [Docs: Compression and Decompression](https://docs.nginx.com/nginx/admin-guide/web-server/compression)<br />
  #nfr--economy
- [ ] Take advantage of client-side caching to minimise hosting costs.<br />
  Use caching headers and offline caching.<br />
  #nfr--economy

[^economy]: Economy refers to the cost effectiveness of operating the application.




### NFR - Security [^security]

- [ ] Prefer HTTPS wherever possible and be careful what you send over non-HTTPS.<br />
  #nfr--security
- [ ] Disable after first click to protect against "click jacking" or rapidly repeated submissions / spamming.<br />
  Use delay, debounce or other rate limiting<br />
  #nfr--security
- [ ] Apply least privilege principle.<br />
  Don't allow or expose anything except what the user/consumer needs.<br />
  #nfr--security
- [ ] Minimise client-exposed interfaces to reduce attack surface area.<br />
  #nfr--security
- [ ] Don't expose env vars to build or dev server that don't need to be exposed.<br />
  #nfr--security
- [ ] Check for cross-site scripting attack (XSS) vulnerability.<br />
  #nfr--security
- [ ] Check for unmasking customer personally identifiable information (PII) vulnerability.<br />
  #nfr--security
- [ ] Check for misleading the customer vulnerability.<br />
  #nfr--security
- [ ] Check OWASP Top 10.<br />
  #nfr--security
- [ ] Careful with calling new APIs that have not been consumed before. Make sure they're security vetted.<br />
  #nfr--security
- [ ] Careful with integrating with existing API already in Prod with different clients.<br />
  Example: native client when building a new web client. Input may be less constrained in web, opening a potential vulnerability. Make sure back-end is hardened for such a new use case.<br />
  #nfr--security
- [ ] Careful integrating via new flows that haven't been used before.<br />
  Make sure they're security vetted before going to Prod.<br />
  #nfr--security
- [ ] Careful when adding new input fields / user input / URL Parameters.<br />
  #nfr--security
- [ ] Careful about significant changes to underlying platform or control.<br />
  Such as updates to vendor systems (logging frameworks, etc) or migrations to new cloud/hosting providers.<br />
  #nfr--security
- [ ] Check for replay vulnerability.<br />
  This is where the network request is captured and submitted again without modification.<br />
  #nfr--security
- [ ] Ensure pen-testing process is in place if needed.<br />
  Be sure to request pen-testing as per processes in your organisation.<br />
  #nfr--security
- [ ] Entering HTML entity into an input should not create a vulnerability.<br />
  It might need to be sanitised when displayed back to the user, to avoid injection attack. Example: `<script>` should be sanitised so that the browser does not execute code within.<br />
  #nfr--security
- [ ] Use timeouts to reduce attack surface.<br />
  Example: generated secure redirect URLs could timeout after a few minutes.<br />
  #nfr--security
- [ ] If you render `<a href={user.website}>`, beware of the user whose website is `'javascript: stealYourPassword()'`.<br />
  #nfr--security
- [ ] Avoid spreading user input like `<div {...userData}>` or any object that might contain user input.<br />
  [Blog: Why Do React Elements Have a typeOf Property?](https://overreacted.io/why-do-react-elements-have-typeof-property/)<br />
  #nfr--security
- [ ] DevSecOps: Shift left.<br />
  Try to anticipate and address security issues as early as possible, such as in planning, design or build.<br />
  #nfr--security
- [ ] Never put potentially sensitive data somewhere insecure.<br />
  Example: client storage (`localStorage`, `sessionStorage`)<br />
  #nfr--security
- [ ] Avoid putting putting sensitive data in GET query-string parameters, headers, etc.<br />
  Even behind HTTP it might still show up in logs or other insecure places.<br />
  #nfr--security
- [ ] Non-reversible locators are Ok.<br />
  #nfr--security
- [ ] Careful with `id`s that are publicly visible.<br />
  Make sure they are totally non-identifiable with regard to the data they reference.<br />
  #nfr--security
- [ ] Keep experience for security admins separate from that for users.<br />
  Users should have maximum convenience and simplicity but minimal control that would render systems vulnerable.<br />
  #nfr--security
- [ ] Careful consuming third-party packages or components from untrusted sources.<br />
  Minimise use of third-party packages. Check for vulnerabilities on trusted news sources. Use automated checkers and tools if possible.<br />
  [Tool: Dependabot](https://github.com/dependabot)<br />
  [Tool: Snyk](https://snyk.io)<br />
  [Article: A03 Software Supply Chain Failures - OWASP Top 10:2025](https://owasp.org/Top10/2025/A03_2025-Software_Supply_Chain_Failures/)<br />
  #nfr--security
- [ ] Use HTTP response headers that restrict framing to prevent Clickjacking.<br />
  Use X-Frame-Options: `DENY`, `SAMEORIGIN`, `ALLOW-FROM` as appropriate.<br />
  Use Content-Security-Policy `frame-ancestors`: `none`, `self`, `URI` as appropriate.<br />
  [Article: Clickjacking | OWASP Foundation](https://owasp.org/www-community/attacks/Clickjacking)<br />
  #nfr--security
- [ ] Verify that security restrictions are enabled on your development device and browser.<br />
  #nfr--security
- [ ] Careful with redirects.<br />
  Avoid redirects and forwards, if possible.<br />
  Don't involve user input to determine the destination.<br />
  If parameters must be used, validate the supplied vale and ensure it is authorized for the user.<br />
  Use mapping values rather than the actual URLs.<br />
  #nfr--security
- [ ] Careful to prevent CSS injection attacks.<br />
  Utilize context-dependent sanitization.<br />
  Implement a Content Security Policy (CSP) that restricts where images and stylesheets can be loaded from or using an allowlist to prevent attackers from loading arbitrary style sheets.<br />
  Consider using an allowlist to prevent attackers from loading arbitrary style sheets.<br />
  Don't allowing users to customize the style of their personal pages by directly manipulating the CSS.<br />
  Sanitize content of html `<style>` tags.<br />
  #nfr--security
- [ ] Ensure rate-limiting of all assets being served, to prevent Denial of Service (DOS) attacks.<br />
  [Article: API4:2019 Lack of Resources & Rate Limiting](https://owasp.org/API-Security/editions/2019/en/0xa4-lack-of-resources-and-rate-limiting/)<br />
  #nfr--security
- [ ] Construct secure parameterised queries, to prevent SQL, NoSQL and OS shell injection attacks.<br />
  In addition, use allowlist validation on all user input.<br />
  #nfr--security
- [ ] Prevent sensitive data exposure.<br />
  Strongly encrypt sensitive data in transit and at rest. Don't store sensitive data unnecessarily, especially client-side.<br />
  #nfr--security
- [ ] Careful to avoid private data being leaked via logs.<br />
  Example: PII [^pii] or secrets.<br />
  #nfr--security #concern--logging-monitoring-and-observability #nfr--observability
- [ ] Continuously monitor security and library/tool vendor news for supply chain vulnerabilities.<br />
  [Blog: Socket](https://socket.dev/blog)<br />
  [Blog: The latest Next.js news](https://nextjs.org/blog)<br />
  [Blog: React Blog](https://react.dev/blog)<br />
  [Article: Do you monitor your application for vulnerabilities? | SSW.Rules](https://www.ssw.com.au/rules/monitor-packages-for-vulnerabilities)<br />
  [Website: CVE: Common Vulnerabilities and Exposures](https://www.cve.org)<br />
  #nfr--security
- [ ] Keep all secrets or sensitive data in a secret vault or store.<br />
  Example: API keys, database credentials, etc.<br />
  [Platform: HashiCorp Vault](https://www.vaultproject.io)<br />
  [Platform: AWS Secrets Manager](https://aws.amazon.com/secrets-manager/)<br />
  [Platform: Azure Key Vault](https://azure.microsoft.com/en-us/services/key-vault/)<br />
  [Platform: Google Cloud Secret Manager](https://cloud.google.com/secret-manager)<br />
  [Article: Do you store your secrets securely? | SSW.Rules](https://www.ssw.com.au/rules/store-your-secrets-securely)<br />
  [Article: Do you share your developer secrets securely? | SSW.Rules](https://www.ssw.com.au/rules/share-your-developer-secrets-securely)<br />
  #nfr--security
- [ ] Follow best practices when dealing with JWTs (JSON Web Tokens).<br />
  Use strong signing algorithms. Keep the secret key secure. Set appropriate token expiration times. Ensure tokens are validated on the server side. Never put sensitive data in the payload.<br />
  [Article: JWT Best Practices](https://auth0.com/docs/security/tokens/json-web-tokens-best-practices)<br />
  [Article: What Are JSON Web Tokens (JWT)?](https://www.freecodecamp.org/news/what-are-json-web-tokens-jwt)<br />
  #nfr--security
- [ ] Avoid clear-text email addresses in HTML.<br />
  [Article: Do you avoid clear text email addresses in web pages? | SSW.Rules](https://www.ssw.com.au/rules/avoid-clear-text-email-addresses-in-web-pages)<br />
  #nfr--security

[^security]: Security refers to protection of the application and data from unauthorized access, use, or destruction, ensuring confidentiality, integrity, and availability.
[^pii]: Personally Identifiable Information




### NFR - Usability [^usability]

[^usability]: Items in this checklist relate to the user interface usability and overall user experience.<br />




#### NFR - Usability - Interactions

- [ ] Handle error states with helpful messages and feedback.<br />
  #nfr--usability #usability--interaction
- [ ] Handle loading states with appropriate visual / textual cues, without breaking anything.<br />
  #nfr--usability #usability--interaction
- [ ] Smooth loading states, eliminate weird artefacts, distortion, etc.<br />
  #nfr--usability #usability--interaction
- [ ] Always represent user's input even if invalid; show validation alongside invalid value.<br />
  #nfr--usability #usability--interaction
- [ ] Responsive, snappy, instant feedback even if it's just transition to a loading state.<br />
  #nfr--usability #usability--interaction




#### NFR - Usability - Modals

- [ ] Capture focus on open.<br />
  #nfr--usability #usability--modals
- [ ] Easily closable.<br />
  #nfr--usability #usability--modals
- [ ] Use modal props, not conditional rendering, to support animation on modal open/close.<br />
  #nfr--usability #usability--modals
- [ ] Present the outcome of a multi-step process in a way that makes sense to the user.<br />
  Example: making a transfer in a banking app should results in a success screen with summary of the details; also the transfer should be shown in the transactions list.<br />
  #nfr--usability #usability--modals
- [ ] Careful when consuming context inside a modal – ensure it works in every case where the modal appears.<br />
  #nfr--usability #usability--modals
- [ ] Ensure `Esc` keypress is handled, as a way to quickly close the modal.<br />
  #nfr--usability #usability--modals




#### NFR - Usability - Visual design

- [ ] Light/dark mode.<br />
  #nfr--usability #usability--visual-design
- [ ] Accessible colour contrast.<br />
  #nfr--usability #usability--visual-design
- [ ] High-contrast mode for applications that will be used under bright light, outdoors, etc.<br />
  #nfr--usability #usability--visual-design
- [ ] Large tapping surface area for applications that will be used on-the-go, during movement or on unstable surfaces.<br />
  Example: hand-held device that will be used on a construction site.<br />
  #nfr--usability #usability--visual-design
- [ ] Compare with design, ensure alignment.<br />
  #nfr--usability #usability--visual-design
- [ ] Should conform to general UI guidelines if provided.<br />
  #nfr--usability #usability--visual-design
- [ ] Disable / hide actions if a system error will make them inaccessible.<br />
  #nfr--usability #usability--visual-design
- [ ] Whole button should be clickable, not just part of it.<br />
  #nfr--usability #usability--visual-design
- [ ] Loading indicators.<br />
  Spinners, indicators or skeletons.<br />
  #nfr--usability #usability--visual-design
- [ ] Correct mouse pointer.<br />
  #nfr--usability #usability--visual-design




#### NFR - Usability - Text [^text]

- [ ] Shorten very long text and ensure it does not break layout.<br />
  Use ellipsis, wrap or summarise and add "more" button.<br />
  #nfr--usability #usability--text
- [ ] Consistent casing.<br />
  #nfr--usability #usability--text
- [ ] Correct localisation / internationalisation as needed.<br />
  #nfr--usability #usability--text
- [ ] Sort lists correctly. Example: alphabetically.<br />
  #nfr--usability #usability--text
- [ ] Avoid user seeing duplicate labels / names of things and getting confused.<br />
  #nfr--usability #usability--text
- [ ] Unless specified otherwise, all text rendered should be selectable and copyable.<br />
  #nfr--usability #usability--text
- [ ] Run basic spelling and grammar check.<br />
  #nfr--usability #usability--text
- [ ] Use consistent phrasing, formatting.<br />
  #nfr--usability #usability--text
- [ ] Use slanted single-quotes where possible instead of instead of straight.<br />
  #nfr--usability #usability--text

[^text]: Text items relate to code used to convey textual information to the user.




#### NFR - Usability - Design system

- [ ] Use correct layout components.<br />
  #nfr--usability #usability--design-system
- [ ] Use existing design system patterns or library components, don't re-invent.<br />
  #nfr--usability #usability--design-system
- [ ] Make sure look & feel is broadly consistent with the rest of the site; question the design as needed.<br />
  #nfr--usability #usability--design-system
- [ ] Careful not to accidentally deviate from design system by blindly following design mock-up.<br />
  #nfr--usability #usability--design-system




#### NFR - Usability - Component library

- [ ] Before using custom classes, props, etc. check if it's part of component library already.<br />
  #nfr--usability #usability--component-library
- [ ] Keep component library version up-to-date.<br />
  #nfr--usability #usability--component-library
- [ ] Prefer to use component props where possible rather than manual CSS styling.<br />
  #nfr--usability #usability--component-library
- [ ] Look for usage examples in component library and keep consistent with them.<br />
  #nfr--usability #usability--component-library




#### NFR - Usability - Transitions and errors

- [ ] Minimise Cumulative Layout Shift (CLS).<br />
  #nfr--usability #usability--transitions-and-errors
- [ ] Handle errors that can occur in a user friendly way.<br />
  #nfr--usability #usability--transitions-and-errors
- [ ] Handle failed requests as errors.<br />
  #nfr--usability #usability--transitions-and-errors
- [ ] Handle loading states with appropriate visual / textual cues, without breaking anything.<br />
  #nfr--usability #usability--transitions-and-errors
- [ ] Smooth state transitions to/from loading and error.<br />
  #nfr--usability #usability--transitions-and-errors
- [ ] Eliminate weird artefacts, distortion, etc.<br />
  #nfr--usability #usability--transitions-and-errors
- [ ] Error pages for failed full page loads.<br />
  #nfr--usability #usability--transitions-and-errors
- [ ] Ensure any update to a value in one place reflected in the value in another place.<br />
  #nfr--usability #usability--transitions-and-errors
- [ ] Ensure any update on one device is reflected on other devices.<br />
  #nfr--usability #usability--transitions-and-errors
- [ ] Notify the user in advance if a process will be long-running.<br />
  [Article: Do you have the time taken in the status bar? | SSW.Rules](https://www.ssw.com.au/rules/show-time-taken-in-the-status-bar)<br />
  [Article: Do you warn users before starting a long process? | SSW.Rules](https://www.ssw.com.au/rules/warn-users-before-starting-a-long-process)<br />
  #nfr--usability #usability--transitions-and-errors




#### NFR - Usability - Date and time

- [ ] Ensure multiple time-zones are supported if necessary. Test with simulated time-zone.<br />
  #nfr--usability #usability--date-and-time
- [ ] Formatting date or time values should follow user's locale format and show value in correct time-zone.<br />
  #nfr--usability #usability--date-and-time
- [ ] Ensure time-zone differences between hosting location and user's browser location do not create issues.<br />
  #nfr--usability #usability--date-and-time




#### NFR - Usability - Numbers [^numbers]

- [ ] Format numeric values correctly.<br />
  Example: currencies should use correct comma and currency symbol or code if needed.<br />
  #nfr--usability #usability--numbers
- [ ] Parse numeric values received as a string to the correct number format.<br />
  #nfr--usability #usability--numbers

[^numbers]: Numbers items relate to code and systems that deal with numeric values.




#### NFR - Usability - Forms [^forms]

- [ ] Do not handle button click while in loading or saving state.<br />
  Use ally attrs appropriately.<br />
  #nfr--usability #usability--forms #nfr--reliability
- [ ] Don't disable buttons when form is in invalid state.<br />
  [Article: Do not disable buttons](https://marcoheine.com/blog/do-not-disable-buttons)<br />
  #nfr--usability #usability--forms #nfr--accessibility
- [ ] Careful not to let initial values be wiped when there's a background data refresh.<br />
  #nfr--usability #usability--forms
- [ ] Consider whether one input should filter another input.<br />
  Example: transfer from one account to another should nat allow transfer from one account to itself.<br />
  #nfr--usability #usability--forms
- [ ] Pre-fill field values where it improves usability.<br />
  #nfr--usability #usability--forms
- [ ] Order similar sequences of elements similarly.<br />
  Example: From and To accounts should be ordered the same for Payment as for Transfer.<br />
  #nfr--usability #usability--forms
- [ ] Careful not to allow multiple rapid form submits or actions.<br />
  This could expose automated DOS attacks.<br />
  #usability--forms #nfr--security

[^forms]: Forms refers to collections of inputs that users fill in with data on a web page.




#### NFR - Usability - Validation [^validation]

- [ ] Display field-level validations if possible, with clear description of why it's invalid.<br />
  #nfr--usability #usability--validation
- [ ] Display validations summary at the top of the form if possible, with summarised listing of invalid fields.<br />
  #nfr--usability #usability--validation #nfr--security
- [ ] Validate email addresses.<br />
  [Article: Do you use a regular expression to validate an email address? | SSW.Rules](https://www.ssw.com.au/rules/use-a-regular-expression-to-validate-an-email-address)<br />
  #nfr--usability #usability--validation

[^validation]: Validation refers to checking that user input is correct and providing feedback to the user if it is not.




## Code




### Code - General [^code-general]

- [ ] Use clean code.<br />
  Scan the code quickly and ensure it is understandable.<br />
  Minimal - remove unnecessary code. Simple - use "boring" code.<br />
  [Article: Do you know the difference between a 'smart' and a 'clever' developer? | SSW.Rules](https://www.ssw.com.au/rules/do-you-know-the-difference-between-a-clever-and-a-smart-developer)<br />
  #code--general #nfr--simplicity #nfr--readability
- [ ] Use library and language facilities correctly. Don't re-invent the wheel.<br />
  #nfr--readability #nfr--performance #nfr--reliability
- [ ] Check for typos (accidental keystrokes) or accidental mis-spellings.<br />
  #code--general
- [ ] Ensure pass-by-value vs. pass-by-reference are being used correctly.<br />
  #code--general 
- [ ] Extract hard-coded values into constants, enums or configuration files.<br />
  Example: Messages, global strings, magic numbers.<br />
  [Article: Do you use Enums instead of hard coded strings? | SSW.Rules](https://www.ssw.com.au/rules/use-enums-instead-of-hard-coded-strings)<br />
  [Article: Do you use resource file to store all the messages and global strings? | SSW.Rules](https://www.ssw.com.au/rules/use-resource-file-to-store-all-the-messages-and-global-strings)<br />
  [Article: Use Enum Constants instead of Magic numbers? | SSW.Rules](https://www.ssw.com.au/rules/use-enum-constants-instead-of-magic-numbers)<br />
  #code--general 

[^code-general]: Code - general refers to any kind of code in any language.




#### Code - Structure

- [ ] Don't clutter shared folders like atoms with components only used in one file.<br />
  Just declare them inline in that file.<br />
  #code--structure
- [ ] Deep classes, shallow interfaces.<br />
  [Book: A Philosophy of Software Design, Ch 4](https://web.stanford.edu/~ouster/cgi-bin/aposd.php)<br />
  #code--structure
- [ ] Define overly complex structures out of existence.<br />
  Change the design so that they are unnecessary.<br />
  #code--structure #nfr--readability #nfr--maintainability
- [ ] Use a more specific structure (function, variable, etc) if appropriate.<br />
  #code--structure
- [ ] Re-use an existing structure (function, variable, etc) if appropriate and to avoid duplication.<br />
  Move it to a shared folder/package/module and export.<br />
  [Article: Do you look for duplicate code? | SSW.Rules](https://www.ssw.com.au/rules/avoid-code-duplication)<br />
  #code--structure
- [ ] Maintain separation of concerns.<br />
  [Article: Do you maintain separation of concerns? | SSW.Rules](https://www.ssw.com.au/rules/maintain-separation-of-concerns)<br />
  #code--structure
- [ ] Re-use code in a higher-level folder/package/module where possible.<br />
  #code--structure
- [ ] Keep list entries in alphabetical order when adding or moving, if that's the convention.<br />
  #code--structure
- [ ] Don't add specific things to generic components.<br />
  #code--structure
- [ ] Move code to a common/shared module if appropriate.<br />
  #code--structure
- [ ] Move code to a more specific module or deeper sub-folder if appropriate.<br />
  #code--structure
- [ ] Move common data to a higher-level function and pass down (or otherwise share) to more lower-level functions.<br />
  #code--structure
- [ ] Pull a file up to a higher folder level if it is consumed by sub-folders of that level.<br />
  #code--structure
- [ ] Look at other adjacent or nearby similar constructs and think about how they should be modified (or left the same).<br />
  #code--structure
- [ ] Don't extract functions that are extremely trivial, where there is no complexity to hide.<br />
  Example: it doesn't make sense to extract: `foo > 0` to `isGreaterThanZero`. Having a whole separate function for something so trivial does not add value.<br />
  #code--structure
- [ ] Don't do barrel exports.<br />
  [Blog: Please Stop Using Barrel Files](https://tkdodo.eu/blog/please-stop-using-barrel-files)<br />
  #code--structure




#### Code - Naming

- [ ] Avoid spaces or unusual characters in names.<br />
  [Article: Do you avoid using spaces in folder and file names? | SSW.Rules](https://www.ssw.com.au/rules/remove-spaces-from-your-folders-and-filename)<br />
  #code--naming
- [ ] Simple plain English as much as possible.<br />
  #code--naming
- [ ] Choose specific words carefully and deliberately.<br />
  #code--naming
- [ ] Use names that won't go out of date in future.<br />
  [Article: Do you avoid using magic string when referencing property/variable names? | SSW.Rules](https://www.ssw.com.au/rules/avoid-using-magic-string-when-referencing-property-variable-names)<br />
  #code--naming
- [ ] Use consistent prefixes. pronouns, similar.<br />
  Example: `has{Foo}` if that's the convention in the code-base. Prefix booleans with `is`, `can`, `has`, `should`, etc.<br />
  #code--naming
- [ ] Use consistent pluralisation.<br />
  Example: `Features` vs `Feature`.<br />
  #code--naming
- [ ] Use specific rather than generic names, where that's clearer.<br />
  #code--naming
- [ ] Use consistent casing.<br />
  Example: `camelCase`, `PascalCase`, etc.<br />
  #code--naming
- [ ] Reference appropriate units.<br />
  Example: dollars, pixels, etc.<br />
  #code--naming
- [ ] Include important information.<br />
  Example: `plaintextPassword` if that matters for security.<br />
  #code--naming
- [ ] Think about how long name should be.<br />
  Keep it as short as possible.<br />
  #code--naming
- [ ] Use name formatting to pack extra information.<br />
  Example: local members prefixed with `l`.<br />
  #code--naming
- [ ] Name ranges intuitively.<br />
  Example: min/max for inclusive limits, first/last for inclusive ranges.<br />
  #code--naming
- [ ] Match expectations of consumers.<br />
  Example: don't name expensive calculation like a simple "getter".<br />
  #code--naming
- [ ] Enum values should match up with keys and use correct formatting.<br />
  Example: `snake-case`.<br />
  #code--naming
- [ ] Avoid single-letter or otherwise cryptic names.<br />
  #code--naming
- [ ] Naming should be intuitive.<br />
  #code--naming
- [ ] Name files consistent with their main purpose, main export, etc.<br />
  #code--naming
- [ ] Use longer names with rigorous prefixing, to prevent name clashes, where that's likely.<br />
  #code--naming#general--code
- [ ] Avoid duplicating names within the same structure.<br />
  Example: don't name a variable inside a function the same as the containing function.<br />
  #code--naming
- [ ] Structural naming, when important.<br />
  Have a hierarchy, such as FooBar, FooBarBaz, FooBiz, etc.<br />
  #code--naming
- [ ] Use a naming convention for event handlers vs. events.<br />
  Example: `onClick` (event), `handleClick` (handler).<br />
  [Article: Do you name your events properly? | SSW.Rules](https://www.ssw.com.au/rules/name-your-events-properly)<br />
  #code--naming
- [ ] Use a naming convention for booleans.<br />
  Example: `isEnabled` ("is a"), `hasPermissions` ("has a"), `canEdit` ("can do"), `shouldShow` ("should do").<br />
  [Article: Do you follow naming conventions for your Boolean Property? | SSW.Rules](https://www.ssw.com.au/rules/follow-naming-conventions-for-your-boolean-property)<br />
  #code--naming




#### Code - Removing or modifying

- [ ] When adding or removing an item in a hard-coded set, be careful of the impact.<br />
  Example: when changing an enumeration, check that there isn't any code that dynamically loops over it, which gets inadvertently impacted.<br />
  #code--removing-or-modifying
- [ ] If code is removed, also find and remove now-unused / "orphaned" code.<br />
  #code--removing-or-modifying #nfr--readability #nfr--maintainability.<br />
- [ ] Careful when modifying big complex statements or code blocks.<br />
  Ensure original meaning and function is preserved.<br />
  #code--removing-or-modifying #nfr--readability #nfr--correctness




#### Code - Logic

- [ ] Check for off-by-one errors.<br />
  #code--logic
- [ ] Check for issues around false-positives.<br />
  Example: a `true` check that seems superficially correct, but is actually the wrong way round.<br />
  #code--logic
- [ ] Check for expressions being implicitly coerced to incorrect boolean values.<br />
  Example: `if (foo)` where `foo` is assumed to evaluate to `false` under certain conditions, but actually does not.<br />
  #code--logic
- [ ] Incorrect filtering, such as excluding when you intended to include.<br />
  #code--logic
- [ ] Mixing destructive and non-destructive set operations, resulting in missing items.<br />
  Example: slicing first then sorting.<br />
  #code--logic




## Language




### Language - Javascript [^javascript]

- [ ] Use map with inline lookup rather than `switch`.<br />
  Like this: `{ key1: "value1", key2: "value2", ... }[key]`.<br />
  #language--javascript
- [ ] Choose between third-party library like `lodash` vs. custom function or built-in Browser API.<br />
  Correct solution depends on the context. Example: if minimising package size, a custom function might be best.<br />
  #language--javascript
- [ ] Explicitly compare value rather than using implicit `truthy/falsy` casting, for clarity.<br />
  Example: `if (arr.length > 0)` is probably clearer than `if (arr.length)`.<br />
  #language--javascript
- [ ] Remove unnecessary template strings.<br />
  #language--javascript
- [ ] Keep objects as simple as possible, avoid deep complex nested structures where possible.<br />
  #language--javascript
- [ ] Don't declare function as async unnecessarily.<br />
  #language--javascript
- [ ] Use destructuring import statements rather than `import * from `, where possible.<br />
  #language--javascript
- [ ] Use code splitting, dynamic import and/or lazy loading to speed up load times in complex applications.<br />
  [Article: Implementing Dynamic Import and Code Splitting](https://www.icodeit.com.au/posts/dynamic-import)<br />
  #language--javascript #nfr--performance
- [ ] Use most appropriate syntax for string literals.<br />
  For example, use template strings for multi-line strings or strings with embedded expressions. Use single quotes for strings containing double quotes and vice-versa.<br />
  #language--javascript #nfr--readability
- [ ] Prefer template strings over concatenation.<br />
  Better readability and typically better performance.<br />
  #language--javascript #nfr--readability
- [ ] Follow a reputable style guide.<br />
  [Website: Guidelines for writing JavaScript code examples | MDN](https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Code_style_guide/JavaScript)<br />
  #language--javascript

#### Language - Javascript - API calls

- [ ] Ensure API request parameters and response fields are used correctly.<br />
  Verify with Backend developers if uncertain and ensure correct usage is clearly spelled out in code or documented somewhere.<br />
  #language--javascript #nfr--correctness #backend-calls
- [ ] Check for bad values returned from API calls.<br />
  Ensure they're logged and handled as smoothly as possible from user's perspective.<br />
  #language--javascript #nfr--correctness

[^javascript]: Javascript items relate to Javascript and code that compiles to Javascript, such as Typescript.




### Language - Typescript [^typescript]

- [ ] Don't unnecessarily cast to a type or specify a type, where it is already implicitly or explicitly cast or specified.<br />
  [Article: Do you describe types sparsely? | SSW.Rules](https://www.ssw.com.au/rules/describe-types-sparsely)<br />
  #language--typescript
- [ ] Don't use JSDocs to communicate type information where Typescript types can do it.<br />
  #language--typescript
- [ ] Generally avoid fallbacks, just deal with falsy values as they are.<br />
  #language--typescript
- [ ] Don't use unusual or whimsical fallbacks/defaults.<br />
  Just pass through the falsy value or fall back to `undefined` when in doubt (explicitly or implicitly) and handle it explicitly where necessary.<br />
  #language--typescript
- [ ] Eliminate optional chaining operators where possible (`?.`, `!.`) by making the type non-nullish from the start.<br />
  #language--typescript
- [ ] Use optional types and chaining operators (`?.`) if the value really might not exist.<br />
  Example: when the API specification clearly states it might not exist, or if there have been cases in past when it did not exist.<br />
  #language--typescript
- [ ] Observe where declared types are different from actual runtime values and fix where possible.<br />
  #language--typescript
- [ ] Avoid using `as` explicit type-casting, but work with the types as they actually are.<br />
  Use `as`to express real and appropriate intent. Do not use as a hack, to just make something compile.<br />
  #language--typescript
- [ ] Use empty array (`[]`) rather than `undefined` as the type of a list that is actually empty.<br />
  Use `undefined` rather than empty array (`[]`) where there is no list and this really needs to be treated distinctly from an empty list.<br />
  #language--typescript
- [ ] Prefer all values to be typed. Avoid `any` or `unknown` where possible.<br />
  [Article: Do you avoid using “any”? | SSW.Rules](https://www.ssw.com.au/rules/avoid-using-any)<br />
  #language--typescript
- [ ] Prefer `unknown` over `any` if unable to type.<br />
  #language--typescript
- [ ] Ensure as much of the code base as possible / as desired is typed.<br />
  #language--typescript
- [ ] Choose between optional field vs. `| undefined` field type.<br />
  #language--typescript
- [ ] Use `satisfies` instead of `as` to preserve the original type.<br />
  #language--typescript
- [ ] Use type-guarding `assert`, to ensure values really are correct at runtime.<br />
  Rather than leaning on `as` casting and risking value being different than expected at runtime.<br />
  #language--typescript
- [ ] Don't use `assert` if you reasonably expect the value might be typed differently than expected.<br />
  We don't want the system to crash in that case.<br />
  #language--typescript
- [ ] Move `assert`s to the top of the function body where possible for clarity.<br />
  #language--typescript
- [ ] Avoid duck-typing. Where we must do duck-typing, prefer more explicit or informative checks.<br />
  Example: `type === "duck"` and/or extract to a clearly named function, Example: `isDuck(value): value is Duck`.<br />
  #language--typescript
- [ ] Keep interfaces / types as simple as possible.<br />
  Avoid deep complex nested structures where possible.<br />
  #language--typescript
- [ ] Explicitly type const objects/arrays when using spread operator, defensively.<br />
  #language--typescript
- [ ] Use a better mechanism than `enum`.<br />
  [Article: Enum patterns for Typescript - conwy.co](https://conwy.co/articles/typescript-enum-patterns)<br />
  [Article: Do you know why to use const assertions instead of TypeScript enums? | SSW.Rules](https://www.ssw.com.au/rules/typescript-enums)<br />
  #language--typescript
- [ ] Use good OO design patterns.<br />
  [Article: Do you follow good Object-Oriented design patterns? | SSW.Rules](https://www.ssw.com.au/rules/follow-good-object-oriented-design-patterns)<br />
  #language--typescript
- [ ] Use good Typescript configuration.<br />
  [Article: Do you have good TypeScript configuration? | SSW.Rules](https://www.ssw.com.au/rules/good-typescript-configuration)<br />
  #language--typescript
- [ ] Avoid unnecessary exports.<br />
  [Article: Do you only export what is necessary? | SSW.Rules](https://www.ssw.com.au/rules/only-export-what-is-necessary)<br />
  #language--typescript
- [ ] Check API requests and responses at runtime.<br />
  [Article: Do you use Zod for runtime validation? | SSW.Rules](https://www.ssw.com.au/rules/use-zod-for-runtime-validation)<br />
  [Tool: Zod](https://zod.dev)<br />
  [Tool: Yup](https://yup-docs.vercel.app)<br />
  #language--typescript
- [ ] Generate API client interfaces using an appropriate tool.<br />
  [Article: Practices - Do you generate strongly-typed interfaces for your DTOs? | SSW.Rules](https://www.ssw.com.au/rules/generate-interfaces-for-your-dtos)<br />
  [Tool: NSwag](https://github.com/RicoSuter/NSwag)<br />
  [Tool: BufBuild](https://buf.build/)<br />
  [Tool: OpenAPI Generator](https://openapi-generator.tech/)<br />
  [Tool: Hey API](https://heyapi.dev/)<br />
  [Tool: Orval](https://orval.dev/)<br />
  [Tool: Hey API](https://heyapi.dev/)<br />
  #language--typescript
- [ ] Follow a reputable style guide.<br />
  [Website: Google TypeScript Style Guide](https://google.github.io/styleguide/tsguide.html)<br />
  #language--typescript

[^typescript]: Typescript items relate to Typescript code.




### Language - HTML [^html]

- [ ] Semantic HTML - Group related controls.<br />
  #language--html
- [ ] Semantic HTML - Use correct elements.<br />
  Example: buttons for things that actually respond to clicks.<br />
  #language--html
- [ ] Omit attributes that are not needed because the behaviour is enabled by default.<br />
  #language--html

[^html]: HTML items relate to HTML and code that compiles to HTML, such as template syntax.




### Language - CSS [^css]

- [ ] For size and spacing, use appropriate units, preferring rems and percentages.<br />
  #language--css
- [ ] Ensure images respond correctly to light and dark mode.<br />
  [Blog: How to make images react to light and dark mode](https://larsmagnus.co/blog/how-to-make-images-react-to-light-and-dark-mode)<br />
  #language--css

[^css]: CSS items relate to CSS and code that compiles to CSS, such as LESS or SASS.




## Framework




### Framework - React [^react]

- [ ] Use a well supported bootstrap tool when getting started.<br />
  [Article: Do you know how to easily start a React project? | SSW.Rules](https://www.ssw.com.au/rules/how-to-easily-start-a-react-project)<br />
  #framework--react
- [ ] Use React-specific tools.<br />
  [Tool: React Developer Tools | React](https://react.dev/learn/react-developer-tools)<br />
  #framework--react
- [ ] Find good example projects to learn best practices from.<br />
  [Article: Do you know the best example projects – React? | SSW.Rules](https://www.ssw.com.au/rules/do-you-know-the-best-sample-applications)<br />
  #framework--react
- [ ] Remove unnecessary fragments.<br />
  #framework--react
- [ ] Prefer custom hooks over HOCs and renderProps.<br />
  #framework--react
- [ ] Avoid unnecessary re-rendering of child components.<br />
  Example: do not pass prop values that change in ways that unnecessarily trigger rendering. Apply memoization as needed.<br />
  #framework--react
- [ ] Careful with use of context in ways that trigger unnecessary re-rendering.<br />
  Apply techniques as needed: memoization, split contexts, reducers, context selectors.<br />
  [Book: Advanced React, Ch 8](https://www.advanced-react.com)<br />
  #framework--react
- [ ] Catch expected errors in event handlers, callbacks and other functions running outside the render lifecycle.<br />
  Use recommended techniques to handle them.<br />
  #framework--react
- [ ] Use appropriate error handling facilities.<br />
  `try/catch` for narrow error handling within component body or functions.<br />
  `<Suspense>` for error handling on components as a whole and within component tree.<br />
  `try/catch with Suspense` for async error handling.<br />
  [Book: Advanced React, Ch 16, pp. 324](https://www.advanced-react.com)<br />
  #framework--react
- [ ] Avoid `useEffect` and `useCallback` if possible.<br />
  Prefer inline calculation, `useMemo` or other techniques. But it is valid to use it for initial data loading.<br />
  [Blog: When to useMemo and useCallback](https://kentcdodds.com/blog/usememo-and-usecallback)<br />
  [Blog: useMemo and useCallback](https://www.joshwcomeau.com/react/usememo-and-usecallback/)<br />
  #framework--react
- [ ] Use a good quality web framework where it adds value.<br />
  [Library: Next.js](https://nextjs.org/)<br />
  [Library: Remix](https://remix.run/)<br />
  #framework--react
- [ ] Use a good quality data fetching library where it adds value.<br />
  [Article: Do you know the best libraries to fetch data in React? | SSW.Rules](https://www.ssw.com.au/rules/fetch-data-react)<br />
  [Library: TanStack Query](https://tanstack.com/query/v4/docs/framework/react/overview)<br />
  [Library: SWR](https://swr.vercel.app/)<br />
  [Library: RTKQuery](https://redux-toolkit.js.org/rtk-query/overview)<br />
  #framework--react
- [ ] Use a good quality routing library where it adds value.<br />
  [Library: React Router](https://reactrouter.com/)<br />
  #framework--react

#### Framework - React - Props

- [ ] Keep props as simple as possible.<br />
  Avoid deep complex nested structures where possible.<br />
  #framework--react
- [ ] Re-use defined types in props, where that keeps the overall solution simpler and is ok for performance.<br />
  Example: simpler rendering, co-located rendering related to that object.<br />
  #framework--react
- [ ] Remove unnecessary or unused props.<br />
  #framework--react
- [ ] Don't call components like functions, use `<Component>` JSX syntax.<br />
  [Blog: Don't call a React function component](https://kentcdodds.com/blog/dont-call-a-react-function-component)<br />
  #framework--react
- [ ] Early return if we don't want to render anything; `return null`.<br />
  [Article: Do you do your validation with Return? | SSW.Rules](https://www.ssw.com.au/rules/do-your-validation-with-exit-sub)<br />
  #framework--react
- [ ] Don't pass props that are not needed because the behaviour is enabled by default.<br />
  #framework--react
- [ ] Avoid excessive props-drilling.<br />
  Consider using a cleaner pattern such as composition or context.<br />
  [Blog: Prop drilling and component composition in React](https://alexsidorenko.com/blog/react-prop-drilling-composition)<br />
  [Blog: What is prop drilling and how to avoid it](https://marcoheine.com/blog/what-is-prop-drilling-and-how-to-avoid-it)<br />
  #framework--react

#### Framework - React - JSX

- [ ] When rendering dynamic array of objects, provide `key` prop and make sure value is suitable.<br />
  That is, not just `index` if items might change order or if item in same position might need to re-render.<br />
  #framework--react
- [ ] Avoid direct DOM manipulation. Use JSX declaratively, as intended.<br />
  #framework--react

#### Framework - React - Components

- [ ] Keep components small and focussed.<br />
  Apply Single Responsibility Principle (SRP).<br />
  [Article: Practices - Do you write small components? | SSW.Rules](https://www.ssw.com.au/rules/write-small-components)<br />
  #framework--react #nfr--readability
- [ ] Order and group a component's inner structures sensibly.<br />
  Example: constants, hook calls, event handlers, util functions then return with JSX.<br />
  #framework--react #nfr--readability
- [ ] Order and group a component's inner structures sensibly.<br />
  Separate data fetching, data processing, and data display.<br />
  Private fields and functions first, then public fields and methods.<br />
  [Article: Do you properly separate concerns in components? | SSW.Rules](https://www.ssw.com.au/rules/angular-separate-component-concerns)<br />
  #framework--angular #nfr--readability
- [ ] When there are repeated similar component calls, consider extracting them to a common component.<br />
  #framework--react
- [ ] Anticipate what might trigger unnecessary re-renders and reduce them.<br />
  Example: instead of changing just 1-2 props, causing the whole component to re-render, extract just the changing parts to a separate component and rendering it inside `children` or a render prop.<br />
  #framework--react
- [ ] Consider conditional rendering, where we expect the value being displayed might be falsy (`null`, `undefined`, `false`, etc).<br />
  #framework--react

#### Framework - React - Hooks

- [ ] Use intuitive field names in the hook result object if appropriate.<br />
  Example: `return { orders }` instead of `return { data }`.<br />
  #framework--react
- [ ] Careful about initialising return value of array to empty (`[]`) in hook without providing some kind of loading indicator.<br />
  Semantically, `[]` might mean it's empty, so maybe `undefined` or `null` is more accurate, during initial load or if there's an error on initial load.<br />
  #framework--react #nfr--readability
- [ ] When calling a hook from another hook, careful about state changes cascading, causing unexpected re-renders, slowing down the app.<br />
  In this regard, treat hooks like render props.<br />
  [Book: Advanced React, Ch 4](https://www.advanced-react.com)<br />
  #framework--react
- [ ] When hooks include JSX structures, extract them to components or design them out of existence.<br />
  #framework--react
- [ ] Don't use a hook where a simpler structure, such as a `function` or `const`, would be sufficient.<br />
  #framework--react
- [ ] Careful about using a hook in a context where its data is unavailable.<br />
  It might crash the app unexpectedly.<br />
  #framework--react 

#### Framework - React - State

- [ ] Use a good quality state management library where it adds value.<br />
  [Library: Redux](https://react-redux.js.org/)<br />
  [Library: Jotai](https://jotai.org/)<br />
  [Library: Zustand](https://zustand.site/en/)<br />
  [Library: Recoil](https://recoiljs.org/)<br />
  [Library: Reselect](https://github.com/reduxjs/reselect)<br />
  #framework--react
- [ ] Keep state as local as possible.<br />
  #framework--react
- [ ] Group related values into one memo / state object.<br />
  #framework--react
- [ ] Use `useReducer` when managing state with complex transitions.<br />
  [Docs: useReducer - React](https://react.dev/reference/react/useReducer)<br />
  [Article: Do you use these useful React Hooks? | SSW.Rules](https://www.ssw.com.au/rules/do-you-use-these-useful-react-hooks)<br />
  #framework--react
- [ ] Don't mirror props in state.<br />
  #framework--react
- [ ] Consider which inputs should be controlled vs. uncontrolled.<br />
  #framework--react
- [ ] Use best practices when persisting to localStorage.<br />
  [Blog: Persisting React State in localStorage](https://www.joshwcomeau.com/react/persisting-react-state-in-localstorage/)<br />
  #framework--react

#### Framework - React - Cleanness

- [ ] Ensure a hook does not depend context which is not available.<br />
  If context is not available, it should not break the app when the hook is rendered.<br />
  #framework--react

#### Framework - React - Performance

- [ ] Combine `useMemo` where helpful.<br />
  #framework--react
- [ ] Memoise whole component where helpful using `memo`.<br />
  #framework--react

#### Framework - React - UI

- [ ] Use a good quality UI component library where it adds value.<br />
  [Library: Material UI](https://mui.com/)<br />
  [Library: Ant Design](https://ant.design/)<br />
  [Library: Chakra UI](https://chakra-ui.com/)<br />
  [Library: Tailwind CSS](https://tailwindcss.com/)<br />
  [Library: Bootstrap](https://getbootstrap.com/)<br />
  [Library: shadcn/ui](https://ui.shadcn.com/)<br />
  [Article: Tools - Do you know the best UI framework for React? | SSW.Rules](https://www.ssw.com.au/rules/tools-do-you-know-the-best-ui-framework-for-react)<br />
  #framework--react

#### Framework - React - Forms

- [ ] When disabling all fields, pass "disabled" to useForm hook (react-hook-form) and ensure it's passed.<br />
  #framework--react

[^react]: React refers to code that runs on the React framework.

#### Framework - React - Patterns

- [ ] Apply React patterns correctly.<br />
  Container/Presentational, HOC, Render Props, Hooks, Compound, Client-side Rendering, Server-side Rendering, Static Rendering, Incremental Static Generation, Progressive Hydration, Streaming Server-Side Rendering, React Server Components, React Stacks.<br />
  [Website: Patterns.dev](https://www.patterns.dev/)<br />
  #patterns--react




### Framework - NextJS [^nextjs]

- [ ] Use NextJS where it makes sense and adds value.<br />
  [Article: Do you know why Next.js is great? | SSW.Rules](https://www.ssw.com.au/rules/why-nextjs-is-great)<br />
  #framework--nextjs
- [ ] Use appropriate data fetching mechanism.<br />
  Server side: `getServerSideProps`, `getStaticProps`.<br />
  Client side: API route.<br />
  [Article: Do you know how to fetch data in Next.js? | SSW.Rules](https://www.ssw.com.au/rules/fetch-data-nextjs)<br />
  [Docs: Fetching Data in Next.js](https://nextjs.org/docs/app/getting-started/fetching-data)<br />
  #framework--nextjs
- [ ] Only use "server only" or "client only" where necessary.<br />
  Server components are by default. Only need explicit "client only" to manipulate the dom or "server only" to ensure security for sensitive logic.<br />
  #framework--nextjs
- [ ] No need to call `use` on an async function call in an async server-rendered function.<br />
  Better to avoid it. Just make it async/await function and await the promise.<br />
  [Docs: use – React](https://react.dev/reference/react/use#caveats)<br />
  #framework--nextjs
- [ ] Server rendered components and server actions (data-fetching functions that execute server-side) should not do formatting that is client-dependent.<br />
  Example: browser local date/time or light/dark mode. They should do server-side-appropriate processing and return data sufficient for the client-side to take over client-dependent work.<br />
  #framework--nextjs
- [ ] Avoid "use client"; better to default to server rendering, for performance, and let NextJS apply client-side as needed.<br />
  Where it must be used, move it as far down the component tree as possible.<br />
  #framework--nextjs
- [ ] Use specific NextJS redirect functions as needed.<br />
  Such as `notFound` when route cannot be resolved, `permanentRedirect` if something is permanently moved, etc.<br />
  [Docs: API Reference: Functions – NextJS](https://nextjs.org/docs/app/api-reference/functions)<br />
  #framework--nextjs
- [ ] Use NextS file conventions.<br />
  Such as `not-found.tsx`, `error.tsx`, `loading.tsx`, etc. Prefer these over `<Suspense>` / `fallback`, as they are a NextJS convention and NextJS can pre-cache them.<br />
  #framework--nextjs
- [ ] Keep server actions in separate file.<br />
  #framework--nextjs
- [ ] Careful creating an `error.tsx` when there are sub-folders.<br />
  It means that errors in the sub-folders bubble up to this file, which might not create the right UX.<br />
  #framework--nextjs
- [ ] Careful With Server Action calls immediately before redirect.<br />
  NextJS seems to cancel them. You may want to use `setTimeout` to defer redirection to the next tick.<br />
  #framework--nextjs
- [ ] Use dynamic imports to reduce load time in projects with large modules.<br />
  [Article: Do you know when to use dynamic imports in Next.js? | SSW.Rules](https://www.ssw.com.au/rules/dynamically-load-components)<br />
  #framework--nextjs
- [ ] Use dynamic routing where appropriate.<br />
  [Docs: Dynamic Routes - NextJS](https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes)<br />
  [Article: Do you know when to use dynamic imports in Next.js? | SSW.Rules](https://www.ssw.com.au/rules/next-dynamic-routes)<br />
  #framework--nextjs
- [ ] Use NextJS built-in features to improve performance, user experience, accessibility, SEO and other concerns.<br />
  [Docs: Dynamic Routes - NextJS](https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes)<br />
  [Article: Core Web Vitals - NextJS | SSW.Rules](https://www.ssw.com.au/rules/core-web-vitals#next.js)<br />
  [Article: Do you optimize web performance in Next.js? | SSW.Rules](https://www.ssw.com.au/rules/optimize-web-performance-nextjs)<br />
  #framework--nextjs
- [ ] Use appropriate error handling facilities.<br />
  `<Suspense>` boundaries for general error handling.<br />
  `error.tsx` for specific error pages.<br />
  [Docs: Custom Errors | NextJS](https://nextjs.org/docs/pages/building-your-application/routing/custom-error)<br />
  [Docs: Error Handling | NextJS](https://nextjs.org/docs/pages/building-your-application/configuring/error-handling)<br />
  #framework--nextjs

#### Framework - NextJS - Security

- [ ] Put `"use server"` at the top for sensitive server-side functions.<br />
  Prevents them ever being shared with the client.<br />
  #framework--nextjs #nfr--security

#### Framework - NextJS - Caching

- [ ] Use appropriate caching mechanisms.<br />
  [Article: Do you know how to use NextJS caching system? | SSW.Rules](https://www.ssw.com.au/rules/use-nextjs-caching-system)<br />
  #framework--nextjs #concern--caching
- [ ] When using `cache`, provide separate params, don't use `params` object.<br />
  #framework--nextjs #concern--caching

[^nextjs]: NextJS refers to code that runs on the NextJS framework.




#### Framework - Angular [^angular]

- [ ] Follow the official style guide.<br />
  [Website: Angular coding style guide](https://angular.dev/style-guide)<br />
  #framework--angular
- [ ] Use Angular-specific tools.<br />
  [Tool: Angular CLI | Angular](https://angular.io/cli)<br />
  [Tool: Angular DevTools | Angular](https://angular.io/guide/devtools)<br />
  [Tool: Redux DevTools | Angular](https://github.com/reduxjs/redux-devtools)<br />
  [Article: Tools - Do you know what Angular Tools to install for an Angular project? | SSW.Rules](https://www.ssw.com.au/rules/angular-the-stuff-to-install)<br />
  #framework--angular
- [ ] Find good example projects to learn best practices from.<br />
  [Source: Tour of Heroes | Angular](https://angular.io/tutorial/tour-of-heroes)<br />
  [Source: ngrx Example App | NGRX](https://github.com/ngrx/platform/tree/master/projects/ngrx.io)<br />
  [Article: Do you know the best example projects – Angular? | SSW.Rules](https://www.ssw.com.au/rules/the-best-sample-applications#ui---angular)<br />
  #framework--angular
- [ ] Use presentational and container pattern if applicable.<br />
  [Article: Practices - Do you know to separate your Angular components into container and presentational? | SSW.Rules](https://www.ssw.com.au/rules/separate-your-angular-components-into-container-and-presentational)<br />
  [Article: Angular Architecture - Container vs Presentational Components Common Design Pitfalls | Angular University](https://blog.angular-university.io/angular-component-design-how-to-avoid-custom-event-bubbling-and-extraneous-properties-in-the-local-component-tree/)<br />
  #framework--angular
- [ ] Put re-usable logic in a separate service.<br />
  [Article: Practices - Do you use a Service to share reusable logic? | SSW.Rules](https://www.ssw.com.au/rules/use-a-service-to-share-reusable-logic)<br />
  #framework--angular
- [ ] Put re-usable UI code in a separate component.<br />
  [Article: Practices - Do you write small components? | SSW.Rules](https://www.ssw.com.au/rules/write-small-components)<br />
  #framework--angular
- [ ] Put HTTP request clients in a separate service.<br />
  #framework--angular
- [ ] Use a good quality UI component library where it adds value.<br />
  [Library: Angular Material](https://material.angular.io/)<br />
  [Library: Angular CDK](https://www.npmjs.com/package/@angular/cdk)<br />
  [Library: Bootstrap](https://getbootstrap.com/)<br />
  [Article: Tools - Do you know the best UI framework for Angular? | SSW.Rules](https://www.ssw.com.au/rules/angular-best-ui-framework)<br />
  #framework--angular
- [ ] Use a good quality state management library where it adds value.<br />
  [Library: NGRX](https://ngrx.io/)<br />
  [Library: NGXS](https://www.ngxs.io/)<br />
  #framework--angular
- [ ] Use good quality Angular libraries where they add value.<br />
  [Library: oidc-token-manager](https://github.com/IdentityModel/oidc-token-manager)<br />
  [Library: NgxSpinner](https://www.npmjs.com/package/ngx-spinner)<br />
  [Library: ngx-toastr](https://www.npmjs.com/package/ngx-toastr)<br />
  [Library: apollo-angular](https://www.npmjs.com/package/apollo-angular)<br />
  [Library: leaflet-geoman](https://www.npmjs.com/package/@geoman-io/leaflet-geoman-free)<br />
  [Library: keycloak-angular](https://www.npmjs.com/package/keycloak-angular)<br />
  [Library: ng-table-virtual-scroll](https://www.npmjs.com/package/ng-table-virtual-scroll)<br />
  #framework--angular
- [ ] Avoid direct DOM manipulation. Use Angular template logic declaratively, as intended.<br />
  [Article: Practices - Do you avoid directly modifying the DOM from your components? | SSW.Rules](https://www.ssw.com.au/rules/avoid-the-dom-in-your-components)<br />
  #framework--angular
- [ ] Use simpler standalone components.<br />
  [Article: Do you use standalone components? | SSW.Rules](https://www.ssw.com.au/rules/standalone-components)<br />
  #framework--angular
- [ ] Use appropriate error handling facilities.<br />
  ErrorHandler provider for general error handling.<br />
  `catchError` for specific error handling on HTTP responses.<br />
  `HttpInterceptor` for intercepting HTTP requests and responses and handling errors by middleware.<br />
  [Article: Do you know how to handle errors in Angular? | SSW.Rules](https://www.ssw.com.au/rules/angular-error-handling)<br />
  #framework--angular
- [ ] Use appropriate form type.<br />
  Template-Driven Forms for simpler forms and faster implementation.<br />
  Reactive Forms for complex forms with dynamic behavior.<br />
  [Article: Do you know when to use Reactive Forms vs Template-driven Forms in Angular? | SSW.Rules](https://www.ssw.com.au/rules/angular-reactive-forms-vs-template-driver-forms)<br />
  [Docs: Reactive forms | Angular](https://angular.dev/guide/forms/reactive-forms)<br />
  #framework--angular
- [ ] Use observables where applicable.<br />
  [Article: Do you know how to use Observables? | SSW.Rules](https://www.ssw.com.au/rules/use-observables)<br />
  #framework--angular

[^angular]: Angular items apply to code that runs on the Angular framework.




#### Framework - RxJS [^rxjs]

- [ ] Close subscriptions when no longer used, such as when Angular component destructs.<br />
  #framework--rxjs
- [ ] Avoid subscriptions that merely transform then store data. Instead, use observables.<br />
  #framework--rxjs

[^rxjs]: RxJS items apply to code that uses the RxJS library.





## Patterns




### Patterns - Object Oriented Programming (OOP) [^oop]

- [ ] Apply OO principles correctly.<br />
  Inheritance, Encapsulation, Polymorphism, Abstraction<br />
  #patterns--oop
- [ ] Apply SOLID principles.<br />
  Single Responsibility Principle, Open-Closed Principle, Liskov Substitution Principle, Interface Segregation Principle, and Dependency Inversion<br />
  #patterns--oop
- [ ] Use inheritance carefully and sparingly.<br />
  Avoid deep inheritance hierarchies that grow unmaintainable.<br />
  #patterns--oop
- [ ] Apply patterns where useful.<br />
  Abstract Factory, Adapter, Bridge, Builder, Chain of Responsibility, Command, Composite, Decorator, Facade, Factory Method, Flyweight, Interpreter, Iterator, Mediator, Memento, Observer, Prototype, Proxy, Singleton, State, Strategy, Template Method, Visitor.<br />
  #patterns--oop
- [ ] Declare accessibility explicitly, where clarity is needed.<br />
  [Article: Do you declare member accessibility for all classes? | SSW.Rules](https://www.ssw.com.au/rules/declare-member-accessibility-for-all-classes)<br />
  #patterns--oop

[^oop]: OOP refers to Object Oriented Programming principles, when and where they apply to the codes.




### Patterns - Functional Programming (FP) [^fp]

- [ ] Apply FP principles correctly.<br />
  First-class functions, Higher-order functions, Pure functions, Recursion, Referential transparency, Data structures, Composition, Partial application, Currying, Immutability.<br />
  [Article: The Principles of Functional Programming](https://www.freecodecamp.org/news/the-principles-of-functional-programming/)<br />
  [Wiki: Functional programming](https://en.wikipedia.org/wiki/Functional_programming)<br />
  #patterns--fp
- [ ] Apply Javascript patterns correctly.<br />
  Introduction, Singleton, Proxy, Prototype, Observer, Module, Mixin, Mediator/Middleware, Flyweight, Factory, Animating View Transitions, Optimize your loading sequence, Static Import, Dynamic Import, Import On Visibility, Import On Interaction, Route Based Splitting, Bundle Splitting, PRPL, Tree Shaking, Preload, Prefetch, Optimize loading third-parties, List Virtualization, Compressing JavaScript.<br />
  [Website: Patterns.dev](https://www.patterns.dev/)<br />
  #patterns--fp

[^fp]: FP refers to Functional Programming principles, when and where they apply to the code.




### Patterns - Micro front end

- [ ] When looking for an existing structure (function, component, etc) to re-use, check other micro front end apps or modules.<br />
  #patterns--micro-front-end
- [ ] Consider pros and cons when deciding whether to implement micro front ends.<br />
  Pros: Incremental upgrades; Simple, decoupled codebases; Independent deployment; Autonomous teams<br />
  Const: Payload size; Environment differences; Operational and governance complexity<br />
  [Article: Micro Frontends - martinfowler.com](https://martinfowler.com/articles/micro-frontends.html)<br />
  [Website: Micro Frontends](https://microfrontends.com)<br />
  #patterns--micro-front-end




## Pipeline




### Pipeline - Developer environment [^developer-environment]

- [ ] Use a good quality IDE.<br />
  [Tool: Visual Studio Code](https://code.visualstudio.com/)<br />
  [Tool: WebStorm](https://www.jetbrains.com/webstorm)<br />
  [Article: Tools - Do you know the best IDE for Angular and React? | SSW.Rules](https://www.ssw.com.au/rules/how-to-get-your-machine-setup)<br />
  #pipeline--developer-environment
- [ ] Document and/or fix aspects of development environment setup that are difficult, tedious or error-prone.<br />
  #pipeline--developer-environment
- [ ] Use automated formatting tools and standard configuration.<br />
  [Tool: Prettier](https://prettier.io/)<br />
  [Article: Do you keep your code consistent using .editorconfig? | SSW.Rules](https://www.ssw.com.au/rules/consistent-code-style)<br />
  #pipeline--developer-environment



[^developer-environment]: Developer environment refers to the local development environment, such as IDE, code editor, etc.




### Pipeline - Configuration [^configuration]

- [ ] Ensure entries are in alphabetic order, where that is the standard.<br />
  #nfr--consistency #general--configuration

[^configuration]: Configuration refers to configuration files and configuration-as-code, such as CI/CD, environment, feature flags, etc.




### Pipeline - Packages [^packages]

- [ ] Put dependencies in the right category - developer vs. production.<br />
  [Blog: Categorize Your Dependencies](https://antfu.me/posts)<br />
  #general--package
- [ ] Remove package that is made unnecessary due to the current code change.<br />
  #general--package
- [ ] Choose high quality dependencies.<br />
  Actively maintained, with recent commits, releases and responsiveness to issues.<br />
  Maintained by a credible individual or team.<br />
  Well documented.<br />
  Broadly used.<br />
  Frequently re-used.<br />
  Open and reviewable.<br />
  Licensed properly.<br />
  [Article: Do you choose the right dependencies? | SSW.Rules](https://www.ssw.com.au/rules/choose-dependencies-correctly)<br />
  #general--package #nfr--security
- [ ] Careful about supply-chain vulnerabilities. Ensure packages being consumed do not contain significant vulnerabilities.<br />
  [Article: Do you defend against package supply chain attacks? | SSW.Rules](https://www.ssw.com.au/rules/defend-against-package-supply-chain-attacks)<br />
  #general--package #nfr--security
- [ ] Use a good quality package manager.<br />
  [Article: Do you know the best package manager for Node? | SSW.Rules](https://www.ssw.com.au/rules/best-package-manager-for-node)<br />
  [Tool: pnpm](https://pnpm.io/)<br />
  [Tool: npm](https://www.npmjs.com/)<br />
  [Tool: Yarn](https://yarnpkg.com/)<br />
  [Tool: Bun](https://bun.sh/)<br />
  #general--package #framework--nodejs
- [ ] Manage dependencies and keep them up-to-date and synchronised across repositories.<br />
  [Tool: Dependabot](https://github.com/dependabot)<br />
  [Tool: Renovate](https://github.com/renovatebot/renovate)<br />
  [Tool: npm audit](https://docs.npmjs.com/cli/v10/commands/npm-audit)<br />
  [Tool: SonarQube](https://www.sonarsource.com/products/sonarqube)<br />
  [Article: Do you properly maintain your dependencies? | SSW.Rules](https://www.ssw.com.au/rules/maintain-dependencies-correctly)<br />
  #general--package #nfr--security
- [ ] Publish an audit log for your own releases.<br />
  This process can be partially automated using a tool such as Release Please.<br />
  [Tool: release-please](https://github.com/googleapis/release-please)<br />
  [Article: Do you keep a package audit log? | SSW.Rules](https://www.ssw.com.au/rules/package-audit-log)<br />
  #general--package



[^packages]: Package covers management of packages, such as third-party libraries, either consumed by or exposed by the application.




### Pipeline - Build [^build]

- [ ] Cache or otherwise re-use dependencies that don’t change often, to speed up the build.<br />
  [Article: PNPM GitHub Actions Cache](https://theodorusclarence.com/shorts/github/pnpm-github-actions-cache)<br />
  #general--build

[^build]: Build covers issues related to building the application for deployment to an environment.




### Pipeline - Deployment [^deployment]

- [ ] Time deployment to minimise disruption.<br />
  Example: avoid deploying during peak or critical usage periods if possible.<br />
  #general--deployment

[^deployment]: Deployment covers issues related to deploying the built application to an environment.




### Pipeline - DevOps [^dev-ops]

- [ ] Monitor statistics on build pipeline. Identify anomalies and action if necessary.<br />
  Example: length of time builds and deployments take. Number of failed builds.<br />
  #general--deployment #pipeline--devops
- [ ] Monitor statistics on code and commits. Identify anomalies and action if necessary.<br />
  Example: file count, line count, comment count, commit count, most changed files.<br />
  [Article: Do you know how to get code line metrics? | SSW.Rules](https://www.ssw.com.au/rules/get-code-line-metrics)<br />
  [Article: Do you use hotspot analysis to prioritize tech debt? | SSW.Rules](https://www.ssw.com.au/rules/prioritize-tech-debt)<br />
  [Tool: CodeScene](https://codescene.com/)
  [Tool: git-quick-stats](https://github.com/arzzen/git-quick-stats)
  [Book: Your Code as a Crime Scene • Adam TORNHILL](https://pragprog.com/titles/atcrime/your-code-as-a-crime-scene/)
  #general--deployment #pipeline--devops
- [ ] Monitor code health statistics using appropriate tools.<br />
  [Article: Do you use the Code Health Extensions in VS Code?](https://www.ssw.com.au/rules/do-you-use-the-code-health-extensions-in-vs-code)<br />
  [Tool: Code Health Extension for VS Code](https://marketplace.visualstudio.com/items)
  [Tool: CSSLint](https://www.npmjs.com/package/csslint)
  [Tool: Biome](https://biomejs.dev/guides/getting-started/)
  #general--deployment #pipeline--devops


[^dev-ops]: DevOps covers issues related to the ongoing operation of the application in production, such as monitoring, logging, alerting, etc.




