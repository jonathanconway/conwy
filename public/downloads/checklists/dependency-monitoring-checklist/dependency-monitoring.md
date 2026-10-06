- [ ] Ensure the CI pipeline runs and passes the full test suite.<br />
  Check unit and automation tests, linting, type checks and build.
- [ ] Prioritise the update if it resolves a known high severity vulnerability.
- [ ] Prioritise the update if it has minimal impact on the application at runtime.<br />
  Example: it affects only linting and formatting. but not runtime code. Then it’s lower risk and the balance of risk tilts in favour of applying the update, especially if it resolves a known vulnerability.
- [ ] Check how a similar update was checked, if already merged in other related repositories.<br />
  Some or all of that testing routine could be reused and repeated for the current update.
- [ ] Checkout and test the application locally with the update applied.<br />
  Ensure the specific features, flows and/or modules impacted all work.
- [ ] Be careful with updates that impact multiple packages.<br />
  Example: updates to a core library or updates to a package that is commonly used. Such updates should be co-ordinated across all impacted packages.
- [ ] Check if the package update impacts other packages.<br />
  The package itself might not be consumed directly, but other packages that rely on it might be consumed. Check that the update doesn’t break anything.
- [ ] Check if the same update was already successfully applied to other packages.<br />
  If so, it’s more likely to be safe to merge.
- [ ] Run any impacted developer tooling and ensure it works.<br />
  Example: build scripts, run those scripts locally and ensure they all work.
- [ ] Inspect the official repository of the package.<br />
  Ensure it is being maintained properly by the core contributor(s) and doesn't have serious issues.